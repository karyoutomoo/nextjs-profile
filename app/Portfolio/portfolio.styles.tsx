/**
 * @file Shared Tailwind class tokens for the Portfolio screen.
 * @module Portfolio/styles
 */

/**
 * Frosted-glass surface: translucent fill, heavy backdrop blur with saturation
 * boost so the page gradient shows through with colour, a hairline outer border
 * and an inset highlight that fakes a lit top edge.
 */
export const glassCard =
  "bg-white/[0.06] backdrop-blur-xl backdrop-saturate-150 " +
  "border border-white/10 ring-1 ring-inset ring-white/5 " +
  "shadow-[0_8px_32px_rgba(0,0,0,0.36)] " +
  "transition-all duration-300 " +
  "hover:bg-white/[0.09] hover:border-white/20";
