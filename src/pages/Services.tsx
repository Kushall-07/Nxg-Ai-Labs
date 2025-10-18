import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Zap, Sparkles, BarChart3, FileText, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Chatbots & Assistants",
      description: "Build intelligent conversational interfaces that understand context, provide instant support, and learn from every interaction.",
      features: [
        "24/7 customer support automation",
        "Natural language understanding",
        "Multi-channel deployment",
        "Custom knowledge bases",
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows with AI-powered automation that adapts to your business rules.",
      features: [
        "Document processing & extraction",
        "Workflow optimization",
        "Integration with existing systems",
        "Intelligent decision making",
      ],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Custom AI Solutions",
      description: "Tailored AI systems designed specifically for your unique challenges and opportunities.",
      features: [
        "Predictive analytics",
        "Computer vision applications",
        "Recommendation engines",
        "Custom model training",
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI-Powered Analytics",
      description: "Turn data into actionable insights with intelligent analysis and visualization tools.",
      features: [
        "Real-time dashboards",
        "Trend prediction",
        "Anomaly detection",
        "Automated reporting",
      ],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Content Generation",
      description: "Scale your content creation with AI that maintains your brand voice and quality standards.",
      features: [
        "Marketing copy generation",
        "Product descriptions",
        "Social media content",
        "SEO optimization",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold">
              AI Solutions That{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Drive Results
              </span>
            </h1>
            <p className="text-xl text-muted-foreground font-body">
              From intelligent chatbots to custom AI systems, we build solutions that 
              transform how you work and serve your customers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-card-hover transition-all duration-300 space-y-6 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
                  {service.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground font-body">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Strategy",
                  description: "We dive deep into your business to identify high-impact opportunities for AI integration.",
                },
                {
                  step: "02",
                  title: "Design & Development",
                  description: "Our team builds custom solutions tailored to your specific needs and existing systems.",
                },
                {
                  step: "03",
                  title: "Testing & Refinement",
                  description: "Rigorous testing ensures quality, accuracy, and reliability before launch.",
                },
                {
                  step: "04",
                  title: "Deployment & Support",
                  description: "Seamless integration with ongoing support and optimization as your needs evolve.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 rounded-xl bg-card border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl font-bold text-primary/20">{item.step}</div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground font-body">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-card border border-border">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Let's discuss how AI can solve your specific challenges and unlock new opportunities.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all group">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
