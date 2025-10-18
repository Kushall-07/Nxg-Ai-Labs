import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const Work = () => {
  const projects = [
    {
      title: "Intelligent Insights Agent",
      client: "Enterprise AI",
      category: "Analytics",
      description:
        "AI-powered workflow that connects Sheets, CRMs, web analytics, and email to deliver real-time business insights, detect anomalies, and automate decisions — acting as a personal data strategist for your clients.",
      tags: ["Analytics", "Automation", "AI Agent", "Multi-source Data"],
      results: {
        metric1: "75%",
        label1: "Faster Insight-to-Action",
        metric2: "92%",
        label2: "Anomaly Precision",
      },
    },
    {
      title: "Smart Support Agent",
      client: "HelpDesk AI",
      category: "Automation",
      description:
        "AI-powered workflow that classifies, drafts, and sends responses to support emails while learning from feedback to reduce manual effort and response time.",
      tags: ["Gmail Workflow", "Vector Search", "Automation"],
      results: {
        metric1: "65%",
        label1: "Faster First Response",
        metric2: "45%",
        label2: "Ticket Deflection",
      },
    },
    {
      title: "Invoice Intelligence System",
      client: "FinSync",
      category: "Automation",
      description:
        "Automates invoice extraction from Drive PDFs, syncs structured data to Google Sheets in real time, and triggers AI-generated email notifications for zero-touch finance ops.",
      tags: ["OCR", "Automation", "AI Email", "Google Workspace"],
      results: {
        metric1: "94%",
        label1: "Touchless Processing",
        metric2: "99.2%",
        label2: "Extraction Accuracy",
      },
    },
    {
      title: "E-commerce AI Assistant",
      client: "RetailCo",
      category: "Chatbot",
      description: "Reduced support tickets by 60% with an intelligent customer service bot",
      tags: ["NLP", "Integration", "24/7 Support"],
      results: {
        metric1: "60%",
        label1: "Ticket Reduction",
        metric2: "4.8/5",
        label2: "User Rating",
      },
    },
    {
      title: "Document Processing Pipeline",
      client: "FinanceHub",
      category: "Automation",
      description: "Automated invoice processing saving 500+ hours monthly",
      tags: ["OCR", "Workflow", "ML"],
      results: {
        metric1: "500+",
        label1: "Hours Saved/Month",
        metric2: "99.2%",
        label2: "Accuracy",
      },
    },
    {
      title: "Predictive Analytics Dashboard",
      client: "TechScale",
      category: "Analytics",
      description: "Real-time insights driving 30% improvement in decision speed",
      tags: ["Forecasting", "Visualization", "API"],
      results: {
        metric1: "30%",
        label1: "Faster Decisions",
        metric2: "15%",
        label2: "Revenue Growth",
      },
    },
    {
      title: "Content Generation Platform",
      client: "MediaWave",
      category: "AI Tools",
      description: "Scaled content production 5x while maintaining brand consistency",
      tags: ["GPT", "Brand Voice", "SEO"],
      results: {
        metric1: "5x",
        label1: "Content Output",
        metric2: "85%",
        label2: "Time Saved",
      },
    },
    {
      title: "Smart Recommendation Engine",
      client: "StreamFlex",
      category: "Custom AI",
      description: "Personalized recommendations increasing engagement by 45%",
      tags: ["ML Models", "Real-time", "Scale"],
      results: {
        metric1: "45%",
        label1: "Engagement Boost",
        metric2: "2.3x",
        label2: "Session Length",
      },
    },
    {
      title: "AI-Powered CRM Assistant",
      client: "SalesForce Pro",
      category: "Integration",
      description: "Automated lead scoring and follow-ups, 3x conversion rate",
      tags: ["CRM", "Automation", "Sales AI"],
      results: {
        metric1: "3x",
        label1: "Conversion Rate",
        metric2: "40%",
        label2: "Sales Cycle Reduction",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold">
              Projects That{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Drive Impact
              </span>
            </h1>
            <p className="text-xl text-muted-foreground font-body">
              Explore how we've helped businesses transform their operations with intelligent AI solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-card-hover transition-all duration-300 space-y-6 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {project.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">For {project.client}</p>
                  <p className="text-muted-foreground font-body">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded bg-muted text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">
                      {project.results.metric1}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {project.results.label1}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-secondary">
                      {project.results.metric2}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {project.results.label2}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
