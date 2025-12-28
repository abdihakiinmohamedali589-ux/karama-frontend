import { useCountUp } from '../hooks/useCountUp';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface CountUpNumberProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function CountUpNumber({
  end,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}: CountUpNumberProps) {
  const { elementRef, hasBeenVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { count } = useCountUp({
    end,
    duration,
    decimals,
    enabled: hasBeenVisible,
  });

  return (
    <span ref={elementRef as React.RefObject<HTMLSpanElement>} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

