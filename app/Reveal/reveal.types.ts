/**
 * @file Types for the scroll reveal wrapper.
 * @module Reveal/types
 */
import { ReactNode } from "react";

export interface RevealProps {
  children: ReactNode;
  /** Stagger in milliseconds, applied as a transition delay. */
  delay?: number;
  /** Extra classes for the wrapper element. */
  className?: string;
}
