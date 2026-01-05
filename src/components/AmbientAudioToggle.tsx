import { Volume2, VolumeX } from "lucide-react";
import { useAmbientAudio } from "@/hooks/useAmbientAudio";
import { useState, useEffect } from "react";

export const AmbientAudioToggle = () => {
  const { isPlaying, toggle } = useAmbientAudio();
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Show hint after 3 seconds
    const showTimer = setTimeout(() => {
      setShowHint(true);
    }, 3000);

    // Hide hint after 8 seconds total (3s delay + 5s visible)
    const hideTimer = setTimeout(() => {
      setShowHint(false);
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
      {/* Hint text */}
      <div
        className={`pointer-events-none flex items-center gap-1.5 text-xs text-muted-foreground/70 transition-opacity duration-500 ${
          showHint ? "opacity-100" : "opacity-0"
        }`}
      >
        <span>ambient music</span>
        <span className="text-muted-foreground/50">→</span>
      </div>

      <button
        onClick={toggle}
        className="p-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200"
        aria-label={isPlaying ? "Mute ambient audio" : "Play ambient audio"}
        title={isPlaying ? "Mute" : "Play ambient music"}
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4" />
        ) : (
          <VolumeX className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};
