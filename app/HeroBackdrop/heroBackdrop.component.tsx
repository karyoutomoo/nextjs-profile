"use client";

import React, { useRef } from "react";

import { HeroBackdropProps } from "./heroBackdrop.types";
import { useHeroBackdrop } from "./useHeroBackdrop";

/**
 * Animated hero backdrop: a single full-screen fragment shader drifting
 * between the page gradient stops. Falls back to nothing when WebGL is
 * unavailable, leaving the CSS gradient underneath visible.
 * @param props Component props.
 * @return Absolutely positioned canvas layer.
 */
const HeroBackdrop: React.FC<HeroBackdropProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useHeroBackdrop(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
};

export default HeroBackdrop;
