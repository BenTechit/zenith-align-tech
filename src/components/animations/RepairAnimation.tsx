import { Laptop, Wrench, Check } from "lucide-react";

const sparks = [
  { top: "35%", left: "60%", delay: "0s" },
  { top: "30%", left: "55%", delay: "0.5s" },
  { top: "40%", left: "65%", delay: "1s" },
  { top: "25%", left: "50%", delay: "1.5s" },
  { top: "38%", left: "70%", delay: "0.8s" },
];

const RepairAnimation = () => {
  return (
    <div className="hidden md:block w-64 h-64 mx-auto relative">
      {/* Laptop with screen color cycle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Screen glow behind laptop */}
          <div
            className="absolute -inset-4 rounded-xl opacity-30"
            style={{
              animation: "screenFix 4s ease-in-out infinite",
            }}
          />
          <Laptop
            className="w-16 h-16 relative z-10"
            style={{
              animation: "screenFix 4s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Orbiting wrench/gear */}
      <div
        className="absolute top-1/2 left-1/2 w-0 h-0 z-20"
        style={{ animation: "gearOrbit 4s linear infinite" }}
      >
        <Wrench
          className="w-7 h-7 text-primary -translate-x-1/2 -translate-y-1/2"
          style={{
            marginLeft: "50px",
            filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.4))",
          }}
        />
      </div>

      {/* Spark particles */}
      {sparks.map((spark, i) => (
        <div
          key={`spark-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-yellow-400"
          style={{
            top: spark.top,
            left: spark.left,
            boxShadow: "0 0 6px hsl(45 100% 60% / 0.8)",
            animation: `sparkFlash 1.5s ease-in-out ${spark.delay} infinite`,
          }}
        />
      ))}

      {/* Progress bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40">
        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-primary"
            style={{ animation: "progressFill 4s ease-in-out infinite" }}
          />
        </div>
        {/* Checkmark that appears at 100% */}
        <div className="flex justify-center mt-2">
          <Check
            className="w-5 h-5 text-green-400"
            style={{
              animation: "checkPop 4s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RepairAnimation;
