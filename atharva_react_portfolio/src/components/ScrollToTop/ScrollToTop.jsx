import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css'; 

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.scrollToTop}>
      {isVisible && (
        <button onClick={scrollToTop} className={styles.scrollButton}>
          ⬆️ Top
        </button>
      )}
    </div>
  );
};
