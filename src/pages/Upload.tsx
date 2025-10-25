import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, Activity, Microscope, FileText, Camera, Upload as UploadIcon, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Upload = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const reportTypes = [
    { id: "mri", name: "MRI Scan", icon: Brain, color: "text-primary" },
    { id: "ct", name: "CT Scan", icon: Activity, color: "text-accent" },
    { id: "ultrasound", name: "Ultrasound", icon: Camera, color: "text-success" },
    { id: "endoscopy", name: "Endoscopy", icon: FileText, color: "text-warning" },
    { id: "blood", name: "Blood Test", icon: Microscope, color: "text-destructive" },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedType || !file) {
      toast.error("Please select a report type and upload a file");
      return;
    }

    setUploading(true);
    setProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            toast.success("Report analyzed successfully!");
            navigate("/results");
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-soft py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upload Medical Report</h1>
          <p className="text-muted-foreground text-lg">
            Select your report type and upload for AI-powered analysis
          </p>
        </div>

        {/* Report Type Selection */}
        <Card className="p-8 mb-8 bg-gradient-card border-border shadow-medium animate-fade-in-up">
          <h2 className="text-2xl font-semibold mb-6">Select Report Type</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {reportTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                  selectedType === type.id
                    ? "border-primary bg-primary/10 shadow-medium"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <type.icon className={`h-8 w-8 mx-auto mb-2 ${type.color}`} />
                <p className="text-sm font-medium text-center">{type.name}</p>
              </button>
            ))}
          </div>
        </Card>

        {/* File Upload */}
        <Card className="p-8 mb-8 bg-gradient-card border-border shadow-medium animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <h2 className="text-2xl font-semibold mb-6">Upload File</h2>
          
          <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors duration-300">
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <UploadIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">
                {file ? file.name : "Click to upload or drag and drop"}
              </p>
              <p className="text-sm text-muted-foreground">
                Supported formats: PDF, JPG, PNG (Max 10MB)
              </p>
            </label>
          </div>

          {file && (
            <div className="mt-4 p-4 bg-success/10 border border-success/20 rounded-lg flex items-center gap-2 animate-scale-in">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <span className="text-success font-medium">File ready: {file.name}</span>
            </div>
          )}
        </Card>

        {/* Upload Button & Progress */}
        <Card className="p-8 bg-gradient-card border-border shadow-medium animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          {!uploading ? (
            <Button
              onClick={handleUpload}
              disabled={!selectedType || !file}
              size="lg"
              className="w-full shadow-medium hover:shadow-large transition-all"
            >
              <UploadIcon className="mr-2 h-5 w-5" />
              Analyze Report
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm font-medium">
                <span>Analyzing report...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-3" />
              <p className="text-sm text-muted-foreground text-center">
                AI is processing your medical report
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Upload;
