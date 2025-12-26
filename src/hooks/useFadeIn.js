import { useEffect } from "react";

export const useFadeIn = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-soft");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};
