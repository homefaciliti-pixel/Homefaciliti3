import { useEffect } from 'react';

const useReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Function to find and observe elements
    const observeElements = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-left');
      reveals.forEach((el) => {
        if (!el.classList.contains('active')) {
          observer.observe(el);
        }
      });
    };

    // Initial observation
    observeElements();

    // Set up MutationObserver to detect dynamically added nodes
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};

export default useReveal;
