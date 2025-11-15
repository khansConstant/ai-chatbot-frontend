interface ProgressStepsProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressSteps = ({ currentStep, totalSteps }: ProgressStepsProps) => {
  return (
    <div className="flex gap-2 mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-1 flex-1 rounded-full transition-all duration-500 ${
            index < currentStep
              ? "bg-primary"
              : index === currentStep
              ? "bg-primary/60"
              : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
};
