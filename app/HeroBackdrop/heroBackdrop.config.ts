/**
 * @file Tunables for the hero backdrop shader.
 * @module HeroBackdrop/config
 */

/** Seconds-to-shader-time multiplier. Lower drifts slower. */
export const DRIFT_SPEED = 0.045;

/** Device pixel ratio ceiling. Full-res fullscreen shaders cook phone batteries. */
export const MAX_DPR = 1.5;

/** Page gradient stops, kept in sync with the root background in the Portfolio component. */
export const COLOR_BASE = "#111827";
export const COLOR_HIGHLIGHT = "#475569";
