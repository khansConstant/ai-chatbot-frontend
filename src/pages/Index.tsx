import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "AI-Powered Discovery",
      description: "Advanced machine learning algorithms identify and surface the most relevant contacts for your business needs."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Verified & Accurate",
      description: "Every contact is verified in real-time to ensure you're always working with up-to-date, accurate information."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Smart Insights",
      description: "Get actionable insights and recommendations to optimize your outreach and connection strategies."
    }
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "Automate hours of manual research and let AI do the heavy lifting for contact discovery."
    },
    {
      title: "Increase Conversions",
      description: "Connect with the right people at the right time, boosting your conversion rates significantly."
    },
    {
      title: "Scale Effortlessly",
      description: "From startup to enterprise, Meridian AI scales with your growing business needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-block">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                ✨ Powered by Advanced AI
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
            >
              Discover Perfect
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Contacts with AI
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            >
              Meridian AI revolutionizes contact discovery with intelligent automation, 
              helping you find and connect with the right people instantly.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            >
              <Button
                onClick={() => navigate("/register")}
                size="lg"
                className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                Get Started Free
              </Button>
              <Button
                onClick={() => navigate("/login")}
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg border-2"
              >
                Sign In
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Intelligent Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with cutting-edge AI technology to supercharge your contact discovery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Meridian AI Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Meridian AI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of businesses transforming their outreach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-3"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Contact Discovery?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of businesses already using Meridian AI to find and connect with their ideal contacts.
            </p>
            <Button
              onClick={() => navigate("/register")}
              size="lg"
              className="h-14 px-12 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              Start Free Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Meridian AI
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Intelligent Contact Discovery
              </p>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
