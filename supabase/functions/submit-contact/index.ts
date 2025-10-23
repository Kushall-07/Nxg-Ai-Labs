// @ts-ignore - Deno URL import for Supabase Edge Functions
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
// @ts-ignore - Deno URL import for Supabase Edge Functions
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
// @ts-ignore - Deno URL import for Supabase Edge Functions
import { Resend } from "https://esm.sh/resend@4.0.0";
// @ts-ignore - Deno URL import for Supabase Edge Functions
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

// Declare Deno for IDE TypeScript awareness (runtime provided by Deno)
declare const Deno: any;

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  if (origin === "https://nxgailabs.com") return true;
  if (origin === "https://www.nxgailabs.com") return true;
  if (origin === "http://localhost:5173") return true;
  // Allow Vercel preview and production domains
  if (origin.endsWith('.vercel.app')) return true;
  return false;
}

function getCors(origin: string | null): Record<string, string> {
  const allowOrigin = isAllowedOrigin(origin) ? (origin as string) : "";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Vary": "Origin",
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// Validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

// HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

const handler = async (req: Request): Promise<Response> => {
  const origin = req.headers.get("Origin");
  const corsHeaders = getCors(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: ContactSubmission = await req.json();

    // Validate and sanitize input using Zod
    const validationResult = contactSchema.safeParse(body);
    
    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => e.message).join(", ");
      return new Response(
        JSON.stringify({ error: errors }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, company, message } = validationResult.data;

    // Initialize Supabase client (support multiple env names; Supabase disallows secrets starting with SUPABASE_)
    const supabaseUrl =
      Deno.env.get("SB_URL") ||
      Deno.env.get("SERVICE_URL") ||
      Deno.env.get("SUPABASE_URL");
    const supabaseKey =
      Deno.env.get("SB_SERVICE_ROLE_KEY") ||
      Deno.env.get("SERVICE_ROLE_KEY") ||
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase URL or Service Role key in function secrets");
    }
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Save to database
    const { data: submission, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        company,
        message,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save submission");
    }

    console.log("Submission saved:", submission.id);

    // Send confirmation email to user (with escaped HTML to prevent XSS)
    try {
      const userEmailResponse = await resend.emails.send({
        from: "Nxg AI Labs <onboarding@resend.dev>",
        to: [email],
        subject: "Thanks for contacting Nxg AI Labs",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #00BFFF;">Thanks for reaching out, ${escapeHtml(name)}!</h1>
            <p>We've received your message and will get back to you within 24 hours.</p>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Your message:</h3>
              <p>${escapeHtml(message)}</p>
            </div>
            <p>Best regards,<br>The Nxg AI Labs Team</p>
          </div>
        `,
      });
      console.log("Confirmation email sent to user:", userEmailResponse);
    } catch (emailError) {
      console.error("Error sending confirmation email:", emailError);
      // Don't fail the request if confirmation email fails
    }

    // Send notification email to agency (with escaped HTML to prevent XSS)
    try {
      const notificationEmailResponse = await resend.emails.send({
        from: "Nxg AI Labs <onboarding@resend.dev>",
        to: ["nxgailabs@gmail.com"], // Your agency email
        reply_to: email, // Allow replying directly to the client's email
        subject: `New Contact Form Submission from ${escapeHtml(name)}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #00BFFF;">New Contact Form Submission</h1>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
              <p><strong>Message:</strong></p>
              <p>${escapeHtml(message)}</p>
            </div>
            <p><small>Submission ID: ${submission.id}</small></p>
          </div>
        `,
      });
      console.log("Notification email sent to agency:", notificationEmailResponse);
    } catch (emailError) {
      console.error("Error sending notification email:", emailError);
      // Don't fail the request if notification email fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Thank you for your message! We'll be in touch soon.",
        id: submission.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-contact function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
