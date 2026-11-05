"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Hero3DFallback } from "./HeroScene";

// Dynamically import Three.js scene with ssr: false
const HeroSceneDynamic = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <Hero3DFallback />,
});

export const Hero3D: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return <Hero3DFallback />;
  }

  return (
    <div className="w-full h-[400px] sm:h-[480px] lg:h-[580px] relative select-none">
      <HeroSceneDynamic />
    </div>
  );
};

