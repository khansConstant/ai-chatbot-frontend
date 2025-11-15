import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ProgressSteps } from "@/components/auth/ProgressSteps";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const steps = [
    {
      field: "name" as keyof FormData,
      label: "What's your full name?",
      placeholder: "Enter your full name",
      type: "text",
    },
    {
      field: "email" as keyof FormData,
      label: "What's your email?",
      placeholder: "you@company.com",
      type: "email",
    },
    {
      field: "password" as keyof FormData,
      label: "Create a secure password",
      placeholder: "Min. 8 characters",
      type: "password",
    },
    {
      field: "confirmPassword" as keyof FormData,
      label: "Confirm your password",
      placeholder: "Re-enter your password",
      type: "password",
    },
  ];

  const currentField = steps[currentStep];

  const validateField = (field: keyof FormData, value: string): string | null => {
    switch (field) {
      case "name":
        return value.trim().length < 2 ? "Name must be at least 2 characters" : null;
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email" : null;
      case "password":
        return value.length < 8 ? "Password must be at least 8 characters" : null;
      case "confirmPassword":
        return value !== formData.password ? "Passwords do not match" : null;
      default:
        return null;
    }
  };

  const handleNext = () => {
    const value = formData[currentField.field];
    const error = validateField(currentField.field, value);

    if (error) {
      setErrors({ ...errors, [currentField.field]: error });
      return;
    }

    setErrors({ ...errors, [currentField.field]: "" });

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Account created!",
      description: "Welcome to Meridian AI.",
    });
    navigate("/");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleNext();
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Join Meridian AI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Create your account in a few simple steps
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-2xl p-8 shadow-2xl border-2 border-primary/10"
        >
          <ProgressSteps currentStep={currentStep} totalSteps={steps.length} />

          <div className="relative overflow-hidden min-h-[200px]">
            <AnimatePresence mode="wait" custom={1}>
              <motion.div
                key={currentStep}
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <Label htmlFor={currentField.field} className="text-lg font-semibold text-foreground">
                    {currentField.label}
                  </Label>
                  <Input
                    id={currentField.field}
                    type={currentField.type}
                    placeholder={currentField.placeholder}
                    value={formData[currentField.field]}
                    onChange={(e) => {
                      setFormData({ ...formData, [currentField.field]: e.target.value });
                      setErrors({ ...errors, [currentField.field]: "" });
                    }}
                    onKeyDown={handleKeyDown}
                    className="h-14 text-base border-2 focus:border-primary"
                    autoFocus
                  />
                  <AnimatePresence>
                    {errors[currentField.field] && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-sm text-destructive"
                      >
                        {errors[currentField.field]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex gap-3 pt-4">
                  {currentStep > 0 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      className="flex-1 h-12 border-2"
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  >
                    {currentStep === steps.length - 1 ? "Finish Registration" : "Continue"}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-primary hover:underline font-semibold"
              >
                Sign in
              </button>
            </p>
          </motion.div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          Protected by enterprise-grade security
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Register;
