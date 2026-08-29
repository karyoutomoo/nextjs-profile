"use client";

import React, { useRef } from "react";

import { RevealProps } from "./reveal.types";
import { useRevealOnScroll } from "./useRevealOnScroll";

/**
 * Fades and lifts its children into place the first time they scroll into
 * view. Reveals are one-shot: content never re-hides on scroll back.
 * @param props Component props.
 * @return Wrapper element carrying the reveal transition.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const revealed = useRevealOnScroll(wrapperRef);

  return (
    <div
      ref={wrapperRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
