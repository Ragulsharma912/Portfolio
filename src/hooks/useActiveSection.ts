import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view using IntersectionObserver,
 * so the navbar can highlight the active link while scrolling.
 */
export function useActiveSection(sectionIds: string[], rootMargin = '-40% 0px -55% 0px') {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin, threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
}
