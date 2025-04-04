"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1.5, easing: (t) => Math.sqrt(1 - (t - 1) ** 2) }}>
      {children}
    </ReactLenis>
  );
}
