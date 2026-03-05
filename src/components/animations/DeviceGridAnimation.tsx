import { User, Laptop, Smartphone, Monitor, Printer, Wifi, Server } from "lucide-react";

const outerDevices = [
  { icon: Laptop, angle: 0 },
  { icon: Smartphone, angle: 60 },
  { icon: Monitor, angle: 120 },
  { icon: Printer, angle: 180 },
  { icon: Wifi, angle: 240 },
  { icon: Server, angle: 300 },
];

const radius = 80;

const DeviceGridAnimation = () => {
  return (
    <div className="w-44 h-44 md:w-56 md:h-56 mx-auto relative">
      {/* Central person */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative">
          <div
            className="absolute -inset-5 rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
              animation: "nodePulse 3s ease-in-out infinite",
            }}
          />
          <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>

      {/* Devices + connection lines */}
      {outerDevices.map((device, i) => {
        const rad = (device.angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        const Icon = device.icon;

        return (
          <div key={i}>
            {/* Dotted connection line */}
            <svg
              className="absolute top-1/2 left-1/2 w-0 h-0 overflow-visible z-0"
            >
              <line
                x1="0" y1="0" x2={x} y2={y}
                stroke="hsl(var(--primary) / 0.12)"
                strokeWidth="1"
                strokeDasharray="3 3"
                style={{
                  animation: `lineGrow 2s ease-out ${i * 0.15}s both`,
                }}
              />
            </svg>

            {/* Pulse along line */}
            <div
              className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full z-5"
              style={{
                background: "hsl(var(--primary) / 0.5)",
                boxShadow: "0 0 6px hsl(var(--primary) / 0.3)",
                animation: `packetTravel 3s ease-in-out ${i * 0.5}s infinite`,
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
                className="w-8 h-8 rounded-full bg-background/80 border border-border flex items-center justify-center"
                style={{
                  animation: `nodePulse 3s ease-in-out ${i * 0.5}s infinite`,
                }}
              >
                <Icon className="w-3.5 h-3.5 text-muted-foreground" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DeviceGridAnimation;
