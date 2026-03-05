import { MessageSquare, Phone, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageSquare, x: 40 },
  { icon: Phone, x: 128 },
  { icon: CheckCircle, x: 216 },
];

const WorkflowAnimation = () => {
  return (
    <div className="hidden md:block w-64 h-20 mx-auto relative">
      {/* Connection line */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 80">
        <line
          x1="56" y1="40" x2="200" y2="40"
          stroke="white" strokeOpacity="0.15"
          strokeWidth="2" strokeDasharray="6 4"
        />
      </svg>

      {/* Traveling dot */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-20"
        style={{
          background: "hsl(var(--primary))",
          boxShadow: "0 0 12px hsl(var(--primary) / 0.6)",
          animation: "dotTravel 4s ease-in-out infinite",
          left: "40px",
        }}
      />

      {/* Step nodes */}
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
            style={{ left: `${step.x}px` }}
          >
            <div
              className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center"
              style={{
                animation: `nodeLight 4s ease-in-out ${i * 1.2}s infinite`,
              }}
            >
              <Icon className="w-5 h-5 text-white/70" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkflowAnimation;
