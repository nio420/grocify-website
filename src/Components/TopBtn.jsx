import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }; 

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={scrollToTop}
        className={`
            relative inline-flex items-center justify-center gap-2
            bg-linear-to-b from-orange-400 to-orange-500
            text-white font-semibold
            px-3 py-3 rounded-full
            shadow-md overflow-hidden
            transition-all duration-300
            hover:shadow-xl hover:-translate-y-1
            active:scale-95 cursor-pointer hover:to-orange-700
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
      >
        <FaArrowUp className="w-5 h-5 group-hover:animate-bounce" />
      </button>
    </div>
  );
};

export default ScrollToTop;