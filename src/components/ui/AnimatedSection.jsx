import { useRef } from "react";
import { useInView } from "../../hooks/useInView";

/**
 * AnimatedSection - wraps children with a fade-in + slide-up animation
 * triggered when the element enters the viewport.
 */
export default function AnimatedSection({ children, className = "", style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
