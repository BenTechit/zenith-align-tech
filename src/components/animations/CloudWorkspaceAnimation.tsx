import { Cloud, FileText, FileSpreadsheet, File, RefreshCw } from "lucide-react";

const floatingFiles = [
  { icon: FileText, left: "25%", delay: "0s" },
  { icon: FileSpreadsheet, left: "50%", delay: "1.2s" },
  { icon: File, left: "70%", delay: "2.4s" },
  { icon: FileText, left: "40%", delay: "0.6s" },
];

const CloudWorkspaceAnimation = () => {
  return (
    <div className="hidden md:block w-64 h-64 mx-auto relative overflow-hidden">
      {/* Central cloud */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
        <div
          className="absolute -inset-4 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
            animation: "nodePulse 3s ease-in-out infinite",
          }}
        />
        <Cloud className="w-14 h-14 text-primary drop-shadow-[0_0_12px_hsl(var(--primary)/0.4)]" />
      </div>

      {/* Sync arrows */}
      <div
        className="absolute top-16 left-[30%] z-20"
        style={{ animation: "syncSpin 3s linear infinite" }}
      >
        <RefreshCw className="w-4 h-4 text-primary/40" />
      </div>
      <div
        className="absolute top-16 right-[30%] z-20"
        style={{ animation: "syncSpin 3s linear 1.5s infinite reverse" }}
      >
        <RefreshCw className="w-4 h-4 text-primary/40" />
      </div>

      {/* Floating files rising into cloud */}
      {floatingFiles.map((file, i) => {
        const Icon = file.icon;
        return (
          <div
            key={i}
            className="absolute bottom-0 z-5"
            style={{
              left: file.left,
              animation: `floatUp 3.5s ease-in-out ${file.delay} infinite`,
            }}
          >
            <Icon className="w-5 h-5 text-muted-foreground/50" />
          </div>
        );
      })}

      {/* Platform dots (Microsoft 365 / Google) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-8">
        {/* M365 dot */}
        <div className="flex flex-col items-center gap-1">
          <div
            className="w-6 h-6 rounded bg-[hsl(210_80%_50%)] flex items-center justify-center"
            style={{ animation: "nodePulse 4s ease-in-out 0.5s infinite" }}
          >
            <span className="text-white text-[9px] font-bold">M</span>
          </div>
          <span className="text-[9px] text-muted-foreground/40">365</span>
        </div>
        {/* Google dot */}
        <div className="flex flex-col items-center gap-1">
          <div
            className="w-6 h-6 rounded bg-[hsl(4_80%_55%)] flex items-center justify-center"
            style={{ animation: "nodePulse 4s ease-in-out 1.5s infinite" }}
          >
            <span className="text-white text-[9px] font-bold">G</span>
          </div>
          <span className="text-[9px] text-muted-foreground/40">WS</span>
        </div>
      </div>
    </div>
  );
};

export default CloudWorkspaceAnimation;
