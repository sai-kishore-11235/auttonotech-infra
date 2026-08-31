import type { ReactNode } from "react";
import type { SectorIcon } from "@/lib/content";

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      {children}
    </svg>
  );
}

export function SectorIconGraphic({ name }: { name: SectorIcon }) {
  switch (name) {
    case "civil":
      return (
        <Svg>
          <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6" />
        </Svg>
      );
    case "renewable":
      return (
        <Svg>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
        </Svg>
      );
    case "government":
      return (
        <Svg>
          <path d="M3 9l9-6 9 6v11H3z" />
          <path d="M9 20v-6h6v6" />
          <path d="M12 3v4" />
        </Svg>
      );
    case "electrical":
      return (
        <Svg>
          <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
        </Svg>
      );
    case "industrial":
      return (
        <Svg>
          <path d="M2 20h20M4 20V9l5-3v14M14 20V4l6 3v13M7 12v0M7 15v0" />
        </Svg>
      );
    case "management":
      return (
        <Svg>
          <path d="M9 11l3 3 8-8M4 4h7M4 9h5M4 14h5M4 19h9" />
        </Svg>
      );
  }
}
