import React from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = React.useState<number>(0);

  React.useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', updateScrollPosition);
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);
  return scrollPosition;
};

export default useScrollPosition;
