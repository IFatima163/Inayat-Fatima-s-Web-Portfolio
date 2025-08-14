import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children }) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(domRef.current); // only animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-section ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
}