import React from 'react';

interface MousePosition {
  x: number | null;
  y: number | null;
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState<MousePosition>({ x: null, y: null });

  React.useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
};

export default useMousePosition;
