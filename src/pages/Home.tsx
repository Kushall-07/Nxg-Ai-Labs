import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap, BrainCircuit, Code, Server, Database, Cpu, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const services = [
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "AI/ML Development",
      description: "Custom AI and machine learning solutions tailored to your business needs.",
      features: ["Predictive Analytics", "Computer Vision", "NLP"]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description: "Modern, responsive, and scalable web applications built with the latest technologies.",
      features: ["React/Next.js", "Node.js", "API Development"]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services for your growing business.",
      features: ["AWS", "Google Cloud", "Azure"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Engineering",
      description: "Robust data pipelines and analytics solutions for data-driven decisions.",
      features: ["ETL Pipelines", "Data Warehousing", "Big Data"]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "IoT Solutions",
      description: "Connect and manage your devices with our IoT platform and services.",
      features: ["Device Management", "Real-time Analytics", "Edge Computing"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Business Intelligence",
      description: "Transform your data into actionable insights with our BI solutions.",
      features: ["Dashboards", "Reports", "Data Visualization"]
    }
  ];

  const features = [
    "Custom Software Development",
    "AI & Machine Learning",
    "Cloud Computing",
    "Data Analytics",
    "IoT Solutions",
    "Cybersecurity"
  ];

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Innovative Technology Solutions for{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Your Business
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We help businesses transform their operations with cutting-edge technology solutions.
              From AI/ML to cloud computing, we've got you covered.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-blue-600 text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 px-8 py-6"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-6"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <Check className="w-5 h-5 text-primary" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer a wide range of technology services to help your business grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-muted rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-card/50 border border-border backdrop-blur-sm">
            <BarChart3 className="w-16 h-16 mx-auto text-primary" />
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to <span className="text-primary">Grow Your Business?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join innovative companies that are already leveraging technology to transform their operations and deliver exceptional experiences.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 px-8 py-6"
                onClick={() => {
                  try {
                    (window as any).gtag?.('event', 'cta_click', { location: 'home_bottom', text: 'Contact Us' });
                  } catch {}
                  console.info('CTA click', { location: 'home_bottom' });
                }}
              >
                Get in Touch
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
