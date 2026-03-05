import { HardDrive, AlertTriangle, FileText, File, FileSpreadsheet } from "lucide-react";

const fallingFiles = [
  { icon: FileText, left: "20%", delay: "0s" },
  { icon: File, left: "45%", delay: "0.8s" },
  { icon: FileSpreadsheet, left: "70%", delay: "1.6s" },
  { icon: FileText, left: "35%", delay: "2.2s" },
  { icon: File, left: "60%", delay: "0.4s" },
];

const DataLossAnimation = () => {
  return (
    <div className="hidden md:block w-64 h-64 mx-auto relative overflow-hidden">
      {/* Warning glow */}
      <div
        className="absolute inset-0 m-auto w-28 h-28 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(0 80% 50% / 0.2) 0%, transparent 70%)",
          animation: "driveGlitch 2s ease-in-out infinite",
        }}
      />

      {/* Central hard drive */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative" style={{ animation: "driveGlitch 2s ease-in-out infinite" }}>
          <HardDrive className="w-14 h-14 text-red-400 drop-shadow-[0_0_12px_hsl(0_80%_50%/0.5)]" />
          <AlertTriangle
            className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400"
            style={{ animation: "shieldPulse 1.5s ease-in-out infinite" }}
          />
        </div>
      </div>

      {/* Falling/fading files */}
      {fallingFiles.map((file, i) => {
        const Icon = file.icon;
        return (
          <div
            key={i}
            className="absolute top-1/3 z-5"
            style={{
              left: file.left,
              animation: `fileFall 2.5s ease-in ${file.delay} infinite`,
            }}
          >
            <Icon className="w-5 h-5 text-white/30" />
          </div>
        );
      })}

      {/* Glitch lines */}
      {[0, 1, 2].map((i) => (
        <div
          key={`glitch-${i}`}
          className="absolute left-0 w-full h-px bg-red-400/20"
          style={{
            top: `${35 + i * 15}%`,
            animation: `driveGlitch 1.5s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default DataLossAnimation;
