/**
 * @file Types for the animated hero backdrop.
 * @module HeroBackdrop/types
 */

/** Everything needed to drive one frame, resolved once at init. */
export interface BackdropContext {
  gl: WebGLRenderingContext;
  program: WebGLProgram;
  uniforms: {
    time: WebGLUniformLocation | null;
    resolution: WebGLUniformLocation | null;
  };
}

export interface HeroBackdropProps {
  /** Extra classes for the absolutely positioned canvas wrapper. */
  className?: string;
}
