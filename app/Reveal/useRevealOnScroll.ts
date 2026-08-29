/**
 * @file One-shot viewport reveal driven by IntersectionObserver.
 * @module Reveal/useRevealOnScroll
 */
import { RefObject, useEffect, useState } from "react";

/** Fraction of the element that must be visible before it reveals. */
const REVEAL_THRESHOLD = 0.15;

/** Pulls the trigger point up from the very bottom edge of the viewport. */
const REVEAL_MARGIN = "0px 0px -10% 0px";

/**
 * Reports whether the element has entered the viewport at least once. Reveals
 * immediately — with no transition to play — when the visitor prefers reduced
 * motion or IntersectionObserver is unavailable, so content is never trapped
 * in a hidden state.
 * @param elementRef Ref to the element being observed.
 * @return True once the element should be shown.
 */
export const useRevealOnScroll = (
  elementRef: RefObject<HTMLElement | null>,
): boolean => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }
        setRevealed(true);
        observer.disconnect();
      },
      { threshold: REVEAL_THRESHOLD, rootMargin: REVEAL_MARGIN },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [elementRef]);

  return revealed;
};
