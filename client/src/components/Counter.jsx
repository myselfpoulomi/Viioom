import { useEffect, useRef, useState } from "react";

const Counter = ({ target, suffix = "", className = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCount = () => {
              current += increment;
              if (current < target) {
                setCount(Math.floor(current));
                requestAnimationFrame(updateCount);
              } else {
                setCount(target);
              }
            };

            updateCount();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num.toString();
  };

  return (
    <div ref={countRef} className={`counter ${className}`}>
      {formatNumber(count)}
      {suffix}
    </div>
  );
};

export default Counter;
