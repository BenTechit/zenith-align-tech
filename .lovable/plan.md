

## Plan: Add Live Animated Scenes to Compliance & Repair Lab Sections

### 1. Shield Defense Animation (`src/components/animations/ShieldDefenseAnimation.tsx`)
A dramatic "shield blocking attacks" scene built with CSS keyframes and Lucide icons:
- **Central shield** (ShieldCheck icon) with a pulsing protective glow aura
- **Incoming threat particles** — 5-6 small red/orange dots flying in from different angles (top-left, top-right, sides), each on a staggered infinite loop
- **Deflection effect** — particles hit an invisible barrier around the shield and fade/scatter away with a brief flash
- **Lock icon** at the center of the shield, slowly rotating
- **Binary/data streams** — thin vertical lines of "0 1" text scrolling down behind the shield (subtle, low opacity)
- All pure CSS animations, no JS animation loops

### 2. Laptop Repair Animation (`src/components/animations/RepairAnimation.tsx`)
A "laptop being fixed" scene:
- **Laptop icon** in the center with a screen that flickers from red to green (broken → fixed cycle)
- **Rotating gear/wrench** orbiting around the laptop
- **Spark particles** — small dots that flash intermittently near the repair point
- **Progress bar** beneath that fills from 0% to 100% then resets, simulating repair progress
- **Checkmark** that pops in when progress hits 100%, then the cycle restarts

### 3. New CSS Keyframes in `src/index.css`
- `attackIncoming` — particles fly toward center from edges, fade at shield radius
- `deflect` — brief scale-up + fade at impact point
- `shieldPulse` — shield glow intensifies rhythmically
- `binaryScroll` — vertical text scrolling
- `gearOrbit` — circular rotation around a point
- `sparkFlash` — intermittent opacity flicker
- `progressFill` — width 0% → 100% over ~3s
- `screenFix` — color shift from red-tint to green-tint

### 4. Integration
- **ComplianceSection**: Replace the small floating shield icon with the full `ShieldDefenseAnimation` component, displayed in a `w-64 h-64 mx-auto` container above the heading (hidden on mobile via `hidden md:block`)
- **RepairLabSection**: Add `RepairAnimation` between the badge/heading and the device grid, centered, similar sizing

### 5. Mobile
- Both animations hidden on mobile (`hidden md:block`) — sections already look clean without them

### Files to create
- `src/components/animations/ShieldDefenseAnimation.tsx`
- `src/components/animations/RepairAnimation.tsx`

### Files to modify
- `src/index.css` — new keyframes
- `src/components/ComplianceSection.tsx` — swap shield icon for animation
- `src/components/RepairLabSection.tsx` — insert repair animation

