import { Card } from "@/components/ui/card";
import { Brain, Shield, Zap, Users, Award, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Technology",
      description: "Our deep learning models are trained on millions of medical images and reports, enabling accurate detection of abnormalities across various diagnostic modalities.",
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Medical data is encrypted and stored on a distributed blockchain network, ensuring tamper-proof records and patient privacy protection.",
    },
    {
      icon: Zap,
      title: "Instant Analysis",
      description: "Get preliminary results in seconds, helping healthcare providers make faster, more informed decisions.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize access to advanced medical diagnostics through AI technology while maintaining the highest standards of data security.",
    },
    {
      icon: Award,
      title: "Our Vision",
      description: "A world where every patient has access to accurate, affordable, and secure medical diagnosis powered by artificial intelligence.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Built by healthcare professionals, AI researchers, and blockchain experts dedicated to improving patient outcomes.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About MediScan AI</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Revolutionizing medical diagnostics through the power of artificial intelligence and blockchain technology
          </p>
        </div>

        {/* Main Concept */}
        <Card className="p-8 md:p-12 mb-12 bg-gradient-card border-border shadow-large animate-fade-in-up">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-gradient-primary rounded-lg">
              <Brain className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                MediScan AI combines cutting-edge artificial intelligence with blockchain technology to provide 
                secure, accurate, and instant medical report analysis. Our system supports multiple diagnostic 
                modalities including MRI scans, CT scans, ultrasounds, endoscopy images, and blood test reports.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When you upload a medical report, our AI algorithms analyze the data using deep learning models 
                trained on extensive medical datasets. The results are then encrypted and stored on a blockchain 
                network, ensuring your medical data remains private, secure, and tamper-proof.
              </p>
            </div>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card border-border shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-gradient-primary rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border shadow-medium hover:shadow-large transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <value.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <Card className="p-8 md:p-12 bg-primary/5 border-primary/20 shadow-large animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-6 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI & Machine Learning
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Convolutional Neural Networks (CNNs)</li>
                <li>• Transfer Learning with Medical Datasets</li>
                <li>• Natural Language Processing for Reports</li>
                <li>• Computer Vision for Image Analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Blockchain & Security
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• End-to-End Encryption</li>
                <li>• Distributed Ledger Technology</li>
                <li>• HIPAA Compliant Architecture</li>
                <li>• Immutable Audit Trails</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-card border-border shadow-medium inline-block animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-4">Developed By</h2>
            <p className="text-lg text-muted-foreground mb-2">The MediScan AI Team</p>
            <p className="text-sm text-muted-foreground">
              Healthcare Professionals • AI Researchers • Blockchain Experts
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
