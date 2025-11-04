import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Brain, TrendingUp } from "lucide-react";
import styles from "./home-marquee.module.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const services = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Chatbots",
      description: "Intelligent conversational AI that understands and engages your customers 24/7",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Process Automation",
      description: "Streamline operations and eliminate repetitive tasks with smart automation",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Custom AI Solutions",
      description: "Tailored AI systems designed specifically for your unique business needs",
    },
  ];

  const metrics = [
    { value: "50+", label: "Projects Delivered" },
    { value: "2M+", label: "AI Interactions" },
    { value: "10K+", label: "Hours Saved" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 border border-black/10">
              <Sparkles className="w-5 h-5 text-black" />
              <span className="text-black font-medium text-base">Building the future with AI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Transform Your Business with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Intelligent AI
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              We craft custom AI solutions that automate workflows, enhance customer experiences, 
              and drive measurable growth for forward-thinking companies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all group px-8 py-6"
                  onClick={() => {
                    try {
                      (window as any).gtag?.('event', 'cta_click', { location: 'home_hero', text: 'Contact Us' });
                    } catch {}
                    console.info('CTA click', { location: 'home_hero' });
                  }}
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/work">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-border hover:border-primary transition-colors px-8 py-6">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Marquee Band (replaces metrics) */}
      <section className="py-6 border-y border-border bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 space-y-4">
          {/* Line 1: Right-to-left */}
          <div className="relative overflow-hidden">
            <div className={`${styles.marquee} text-base md:text-xl font-bold italic text-white`}>
              AI isn’t just a tool — it’s the new infrastructure of efficiency. It helps businesses think faster, act smarter, and work smoother.
            </div>
          </div>

          {/* Line 2: Right-to-left with delay */}
          <div className="relative overflow-hidden">
            <div className={`${styles.marqueeDelay} text-base md:text-xl font-bold italic text-white`}>
              The future’s already here — it’s time to grab it before your competitors do.
            </div>
          </div>

          
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              We specialize in creating AI solutions that solve real business problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-card-hover transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-body">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="border-border hover:border-primary transition-colors group">
                Explore All Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-card/50 border border-border backdrop-blur-sm">
            <TrendingUp className="w-16 h-16 mx-auto text-primary animate-float" />
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Scale with AI?</span>
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Join innovative companies that are already leveraging AI to transform their operations and deliver exceptional experiences.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all px-8 py-6"
                onClick={() => {
                  try {
                    (window as any).gtag?.('event', 'cta_click', { location: 'home_bottom', text: 'Contact Us' });
                  } catch {}
                  console.info('CTA click', { location: 'home_bottom' });
                }}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
