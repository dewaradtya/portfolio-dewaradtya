"use client";

import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

const ReactLenis = dynamic(
  () =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import("@studio-freight/react-lenis").then((mod) => mod.ReactLenis as React.ComponentType<any>),
  { ssr: false }
);

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        easing: (t: number) => Math.sqrt(1 - (t - 1) ** 2),
      }}
    >
      {children}
    </ReactLenis>
  );
}
