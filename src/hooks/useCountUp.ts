import { useEffect, useState, useRef } from 'react';

interface UseCountUpOptions {
  duration?: number;
  start?: number;
  end: number;
  decimals?: number;
  enabled?: boolean;
}

export function useCountUp({
  duration = 2000,
  start = 0,
  end,
  decimals = 0,
  enabled = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      setCount(end);
      return;
    }

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
        setIsAnimating(true);
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = start + (end - start) * easeOutQuart;

      setCount(Number(currentCount.toFixed(decimals)));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        setCount(end);
      }
    };

    // Reset and start animation
    setCount(start);
    startTimeRef.current = null;
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [start, end, duration, decimals, enabled]);

  return { count, isAnimating };
}

