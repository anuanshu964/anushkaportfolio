import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
  const { threshold = 0.1, triggerOnce = true, rootMargin = '0px 0px -50px 0px' } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if IntersectionObserver is supported
    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (triggerOnce) {
          observer.unobserve(el);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    }, { threshold, rootMargin });

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, triggerOnce, rootMargin]);

  return [ref, isInView];
}
