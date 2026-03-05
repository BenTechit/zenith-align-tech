import { Server, Laptop, Smartphone, Monitor, Printer, Wifi } from "lucide-react";

const devices = [
  { icon: Laptop, angle: 0, label: "Laptop" },
  { icon: Smartphone, angle: 72, label: "Phone" },
  { icon: Monitor, angle: 144, label: "Monitor" },
  { icon: Printer, angle: 216, label: "Printer" },
  { icon: Wifi, angle: 288, label: "WiFi" },
];

const radius = 90;

const NetworkPulseAnimation = () => {
  return (
    <div className="w-48 h-48 md:w-64 md:h-64 mx-auto relative">
      {/* Central server node */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative">
          <div
            className="absolute -inset-6 rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(142 70% 45% / 0.2) 0%, transparent 70%)",
              animation: "nodePulse 3s ease-in-out infinite",
            }}
          />
          <Server className="w-10 h-10 text-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.4)]" />
        </div>
      </div>

      {/* Device nodes + connection lines + packets */}
      {devices.map((device, i) => {
        const rad = (device.angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        const Icon = device.icon;

        return (
          <div key={device.label}>
            {/* Connection line (SVG) */}
            <svg
              className="absolute top-1/2 left-1/2 w-0 h-0 overflow-visible z-0"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <line
                x1="0" y1="0" x2={x} y2={y}
                stroke="hsl(var(--primary) / 0.15)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Data packet traveling along line */}
            <div
              className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full z-20"
              style={{
                background: "hsl(142 70% 50%)",
                boxShadow: "0 0 8px hsl(142 70% 50% / 0.6)",
                animation: `packetTravel 2.5s ease-in-out ${i * 0.5}s infinite`,
                ["--end-x" as string]: `${x}px`,
                ["--end-y" as string]: `${y}px`,
              }}
            />

            {/* Device node */}
            <div
              className="absolute top-1/2 left-1/2 z-10"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <div
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center"
                style={{
                  animation: `nodePulse 3s ease-in-out ${i * 0.6}s infinite`,
                }}
              >
                <Icon className="w-4 h-4 text-white/70" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NetworkPulseAnimation;
