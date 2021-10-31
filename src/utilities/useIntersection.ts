import React, { useEffect, useRef } from 'react';

const useIntersection = <T extends HTMLElement>(
  activeClass: string,
  { root = null, rootMargin = '0px', threshold = 1 }: IntersectionObserverInit,
  dependency: React.ReactNode[] = [],
  unobserveAfterFirstIntersection = true
): React.MutableRefObject<T | null> => {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root,
      rootMargin,
      threshold,
    };

    const observer = new IntersectionObserver((entries, observerObj) => {
      entries.forEach((entry) => {
        if (unobserveAfterFirstIntersection) {
          if (entry.isIntersecting) {
            entry.target.classList.add(activeClass);
            observerObj.unobserve(entry.target);
          }
        } else if (entry.isIntersecting) {
          entry.target.classList.add(activeClass);
        } else {
          entry.target.classList.remove(activeClass);
        }
      });
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
  }, [...dependency]);

  return elementRef;
};

export default useIntersection;
