import React, { useEffect, useRef, useState } from "react";

const CountUp = ({ value, duration = 1400 }) => {
  // value can be "300+", "18+", "98%"
  const num = parseInt(String(value).replace(/[^\d]/g, ""), 10) || 0;
  const suffix = String(value).replace(String(num), ""); // keeps "+" or "%"

  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const startTime = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // easeOutCubic for premium smoothness
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * num));

            if (progress < 1) requestAnimationFrame(tick);
            else setCount(num);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default CountUp;
