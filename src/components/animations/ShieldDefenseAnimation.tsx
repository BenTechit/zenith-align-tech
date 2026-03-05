import { ShieldCheck, Lock } from "lucide-react";

const binaryStreams = [
  { left: "15%", delay: "0s", duration: "8s" },
  { left: "35%", delay: "2s", duration: "10s" },
  { left: "55%", delay: "1s", duration: "9s" },
  { left: "75%", delay: "3s", duration: "7s" },
  { left: "90%", delay: "0.5s", duration: "11s" },
];

const attackParticles = [
  { startX: "-120px", startY: "-100px", delay: "0s" },
  { startX: "120px", startY: "-80px", delay: "0.8s" },
  { startX: "-100px", startY: "60px", delay: "1.6s" },
  { startX: "110px", startY: "70px", delay: "2.4s" },
  { startX: "0px", startY: "-130px", delay: "3.2s" },
  { startX: "-130px", startY: "0px", delay: "4s" },
];

const ShieldDefenseAnimation = () => {
  return (
    <div className="w-48 h-48 md:w-64 md:h-64 mx-auto relative">
      {/* Binary data streams background */}
      {binaryStreams.map((stream, i) => (
        <div
          key={`binary-${i}`}
          className="absolute top-0 text-[10px] font-mono text-primary/10 leading-tight whitespace-pre select-none pointer-events-none"
          style={{
            left: stream.left,
            animation: `binaryScroll ${stream.duration} linear ${stream.delay} infinite`,
          }}
        >
          {"0\n1\n0\n1\n1\n0\n0\n1\n0\n1\n1\n0\n1\n0\n0\n1\n0\n1"}
        </div>
      ))}

      {/* Shield glow aura */}
      <div
        className="absolute inset-0 m-auto w-28 h-28 rounded-full"
        style={{
          animation: "shieldPulse 2.5s ease-in-out infinite",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)",
        }}
      />

      {/* Central shield */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative">
          <ShieldCheck className="w-16 h-16 text-primary drop-shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />
          <Lock
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground"
            style={{ animation: "spin 8s linear infinite" }}
          />
        </div>
      </div>

      {/* Attack particles */}
      {attackParticles.map((particle, i) => (
        <div
          key={`attack-${i}`}
          className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full z-20"
          style={{
            background: i % 2 === 0
              ? "hsl(0 80% 55%)"
              : "hsl(25 90% 55%)",
            boxShadow: i % 2 === 0
              ? "0 0 8px hsl(0 80% 55% / 0.6)"
              : "0 0 8px hsl(25 90% 55% / 0.6)",
            animation: `attackIncoming 2s ease-in ${particle.delay} infinite`,
            ["--start-x" as string]: particle.startX,
            ["--start-y" as string]: particle.startY,
          }}
        />
      ))}

      {/* Deflection flashes */}
      {attackParticles.map((particle, i) => (
        <div
          key={`deflect-${i}`}
          className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full z-15"
          style={{
            background: "hsl(var(--primary) / 0.4)",
            animation: `deflect 2s ease-out ${particle.delay} infinite`,
            ["--start-x" as string]: particle.startX,
            ["--start-y" as string]: particle.startY,
          }}
        />
      ))}
    </div>
  );
};

export default ShieldDefenseAnimation;
