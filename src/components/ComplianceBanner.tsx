import { useState } from "react";
import { X, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComplianceBanner = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-primary/10 border-b border-primary/20 relative" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <ShieldAlert className="w-5 h-5 text-primary shrink-0" />
          <p className="text-sm text-foreground font-medium truncate sm:whitespace-normal">
            האם העסק שלכם עומד בתקנות הגנת הפרטיות החדשות?
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="default"
            size="sm"
            className="text-xs px-4"
            onClick={() => document.querySelector('#compliance')?.scrollIntoView({ behavior: 'smooth' })}
          >
            בדקו עכשיו
          </Button>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 rounded-full hover:bg-primary/10 transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplianceBanner;
