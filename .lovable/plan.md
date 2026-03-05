

## Plan: Add Live Animated Elements Across All Sections

Currently only **Compliance** (shield defense) and **Repair Lab** (laptop repair) have animated scenes. Here's the plan to add animated visual elements to 5 more sections:

### New Animation Components to Create

**1. `src/components/animations/CloudWorkspaceAnimation.tsx`** — For **Services Section**
- A cloud icon at center with Microsoft 365 / Google Workspace logos (simplified as colored dots/icons)
- File icons (documents, spreadsheets) floating upward into the cloud
- Small "sync" arrows rotating between devices below and cloud above
- Represents cloud migration and workspace setup

**2. `src/components/animations/NetworkPulseAnimation.tsx`** — For **Hero Section** (replace or enhance the IT Health dashboard card)
- A central server/router node with radiating connection lines to 4-5 device nodes (laptop, phone, monitor, printer)
- Data packets (small dots) traveling along the lines in both directions
- Nodes pulse green periodically to show "healthy" status
- Represents a managed network with live data flow

**3. `src/components/animations/DataLossAnimation.tsx`** — For **Risk Section**
- A hard drive icon with a warning triangle that pulses red
- File icons that fade/fall away (representing data loss)
- A cracking/glitch effect on the drive icon
- Creates visual urgency matching the section's warning tone

**4. `src/components/animations/WorkflowAnimation.tsx`** — For **CTA Section**
- Three connected nodes (representing the 3 steps: Contact → Talk → Answer)
- A glowing dot that travels along a path from node 1 to 2 to 3
- Each node lights up as the dot arrives
- Visualizes the simple onboarding process

**5. `src/components/animations/DeviceGridAnimation.tsx`** — For **Who I Help Section**
- A network of device silhouettes (5-6) connected by dotted lines
- Lines pulse outward from center, connecting all devices
- A "person" icon at center managing all connections
- Represents one person managing all IT for a small business

### CSS Keyframes to Add in `src/index.css`
- `floatUp` — files rising into cloud
- `syncSpin` — rotating sync arrows
- `packetTravel` — dots moving along network lines
- `nodePulse` — device nodes lighting up
- `fileFall` — documents falling/fading
- `driveGlitch` — warning shake effect
- `dotTravel` — glowing dot along path
- `lineGrow` — connection lines growing outward

### Integration Points
| Section | Animation | Placement |
|---------|-----------|-----------|
| Hero | NetworkPulseAnimation | Replace static dashboard card on desktop |
| Services | CloudWorkspaceAnimation | Above heading, centered |
| Who I Help | DeviceGridAnimation | Inside the callout card area (right column) |
| Risk | DataLossAnimation | Above heading, centered |
| CTA | WorkflowAnimation | Between heading and the 3 steps |

### Mobile
All animations use `hidden md:block` — mobile users see the clean text-only layout.

### Files to Create (5)
- `src/components/animations/CloudWorkspaceAnimation.tsx`
- `src/components/animations/NetworkPulseAnimation.tsx`
- `src/components/animations/DataLossAnimation.tsx`
- `src/components/animations/WorkflowAnimation.tsx`
- `src/components/animations/DeviceGridAnimation.tsx`

### Files to Modify (6)
- `src/index.css` — new keyframes
- `src/components/HeroSection.tsx` — add NetworkPulseAnimation
- `src/components/ServicesSection.tsx` — add CloudWorkspaceAnimation
- `src/components/WhoIHelpSection.tsx` — add DeviceGridAnimation
- `src/components/RiskSection.tsx` — add DataLossAnimation
- `src/components/StandaloneCTASection.tsx` — add WorkflowAnimation

