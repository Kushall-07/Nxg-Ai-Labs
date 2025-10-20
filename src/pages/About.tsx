import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  const team = [
    { name: "Karan", role: "Developer", description: "Full‑stack developer focused on clean architecture and rapid delivery." },
    { name: "Medhansh", role: "Developer / Automation Engineer", description: "Automation‑first engineer building CI/CD and workflow bots to remove manual toil." },
    { name: "Adharsh", role: "Frontend / UX Engineer", description: "Frontend/UX engineer crafting fast, accessible interfaces with pixel‑perfect detail." },
    { name: "Kushal", role: "Backend / UI Engineer", description: "Backend engineer who also ships polished UI, APIs, and integrations at speed." },
    { name: "Siddharth", role: "Marketing / Strategy Lead", description: "Leads go‑to‑market, positioning, and growth partnerships with a data‑driven approach." },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "We measure success by the tangible impact we create for your business",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "Always exploring cutting-edge AI to keep you ahead of the curve",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership",
      description: "Your success is our success. We're in this together",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold">
              Building the Future of{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Intelligent Business
              </span>
            </h1>
            <p className="text-xl text-muted-foreground font-body">
              We're a team of AI specialists, engineers, and strategists passionate about 
              making artificial intelligence accessible and impactful for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
              <p>
                Nxg AI Labs was born from a simple observation: while AI technology was advancing 
                rapidly, most businesses struggled to harness its potential effectively.
              </p>
              <p>
                We are a team of passionate engineering students, currently pursuing our degrees, united by a shared mission — to develop and deliver practical, scalable AI solutions that create real business value.
               Founded in 2025, our journey began with building efficient, purpose-driven AI agents designed to help businesses grow, automate intelligently, and work smarter.
               Brings together deep expertise and diverse perspectives of all our team members to create truly holistic solutions.
              </p>
              <p>
                Our approach combines deep technical expertise with a genuine understanding of 
                business challenges. We don't just implement AI—we partner with you to identify 
                opportunities, design solutions, and measure impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border text-center space-y-4 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground font-body">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto" />
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-muted-foreground text-sm font-body">
                    {member.description}
                  </p>
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

export default About;
