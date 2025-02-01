import React from 'react';

interface Step {
  number: number;
  title: string;
  icon: React.ReactNode;
}

interface ProgressBarProps {
  steps: Step[];
  currentStep: number;
}

const ProgressBar = ({ steps, currentStep }: ProgressBarProps) => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
      <div className="relative flex justify-between">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`flex flex-col items-center ${
              step.number <= currentStep ? 'text-purple-600' : 'text-gray-400'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step.number <= currentStep
                  ? 'bg-purple-600 text-white'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {step.icon}
            </div>
            <div className="mt-2 text-sm font-medium">{step.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;