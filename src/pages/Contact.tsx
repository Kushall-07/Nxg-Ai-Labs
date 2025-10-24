import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Instagram, Twitter } from "lucide-react";
 

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send message");

      toast({
        title: "Message sent!",
        description: data?.message || "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold">
              Let's Build Something{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-muted-foreground font-body">
              Have a project in mind? We'd love to hear about it and explore how AI can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Send us your use-case</h2>
                <p className="text-muted-foreground font-body">
                  Share your goals and current tools. We'll assess AI-readiness and respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2">Wanna directly talk to us about your project?</h3>
                  <a
                    href="tel:+917019130206"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <Phone className="w-4 h-4" /> +91 70191 30206
                  </a>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2">Or just mail us — we'll get in touch ASAP</h3>
                  <a
                    href="mailto:NxgAILabs@gmail.com"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    <Mail className="w-4 h-4" /> NxgAILabs@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
