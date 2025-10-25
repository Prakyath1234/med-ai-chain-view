import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ShieldCheck, AlertCircle, CheckCircle2, Brain, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const Results = () => {
  const results = [
    {
      id: 1,
      title: "Primary Diagnosis",
      finding: "Possible Abnormality Detected",
      description: "AI analysis has identified a potential tumor in the frontal lobe region",
      confidence: 92,
      severity: "high",
      recommendation: "Immediate consultation with a neurologist recommended",
    },
    {
      id: 2,
      title: "Secondary Observations",
      finding: "Minor Inflammation",
      description: "Slight inflammation detected in surrounding tissue",
      confidence: 78,
      severity: "medium",
      recommendation: "Follow-up scan recommended in 3 months",
    },
    {
      id: 3,
      title: "General Assessment",
      finding: "Normal Brain Structure",
      description: "Overall brain structure and anatomy appear normal",
      confidence: 95,
      severity: "low",
      recommendation: "Regular health checkups advised",
    },
  ];

  const handleDownload = () => {
    toast.success("Report downloaded successfully");
  };

  const handleBlockchainVerify = () => {
    toast.success("Report verified on blockchain");
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive";
      case "medium":
        return "warning";
      case "low":
        return "success";
      default:
        return "secondary";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return AlertCircle;
      case "medium":
        return TrendingUp;
      case "low":
        return CheckCircle2;
      default:
        return Brain;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Analysis Results</h1>
          <p className="text-muted-foreground text-lg">
            AI-powered medical report analysis with blockchain verification
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up">
          <Button 
            onClick={handleDownload}
            size="lg" 
            className="flex-1 shadow-medium hover:shadow-large transition-all"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Report
          </Button>
          <Button 
            onClick={handleBlockchainVerify}
            size="lg" 
            variant="outline" 
            className="flex-1 shadow-soft hover:shadow-medium transition-all"
          >
            <ShieldCheck className="mr-2 h-5 w-5" />
            Verify on Blockchain
          </Button>
        </div>

        {/* Results Cards */}
        <div className="space-y-6">
          {results.map((result, index) => {
            const SeverityIcon = getSeverityIcon(result.severity);
            return (
              <Card 
                key={result.id} 
                className="p-6 bg-gradient-card border-border shadow-medium hover:shadow-large transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-${getSeverityColor(result.severity)}/10 mt-1`}>
                      <SeverityIcon className={`h-6 w-6 text-${getSeverityColor(result.severity)}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{result.title}</h3>
                      <p className="text-lg text-foreground font-medium">{result.finding}</p>
                    </div>
                  </div>
                  <Badge variant={getSeverityColor(result.severity)} className="w-fit">
                    {result.confidence}% Confidence
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-4 ml-11">
                  {result.description}
                </p>

                <div className="ml-11 p-4 bg-muted/50 rounded-lg border border-border">
                  <p className="text-sm font-medium text-foreground flex items-start gap-2">
                    <Brain className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span><strong>AI Recommendation:</strong> {result.recommendation}</span>
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Doctor's Note Section */}
        <Card className="p-6 mt-8 bg-primary/5 border-primary/20 shadow-medium animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Doctor's Note
          </h3>
          <p className="text-muted-foreground italic">
            "Please consult with your healthcare provider to discuss these AI-generated findings. 
            This analysis is meant to assist medical professionals and should not be used as the sole basis for diagnosis."
          </p>
        </Card>

        {/* Blockchain Verification Info */}
        <Card className="p-6 mt-6 bg-gradient-card border-border shadow-medium animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-6 w-6 text-success mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Blockchain Verified</h3>
              <p className="text-sm text-muted-foreground mb-2">
                This report has been securely stored on the blockchain network
              </p>
              <div className="text-xs font-mono bg-muted p-3 rounded border border-border overflow-x-auto">
                Hash: 0x7d8a9b3c4e5f6a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Results;
