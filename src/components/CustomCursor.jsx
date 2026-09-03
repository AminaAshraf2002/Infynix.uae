import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    };

    // Smooth ring follow
    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    animate();

    // Hover grow on interactive elements
    const interactives = document.querySelectorAll('a, button, .work-strip, .content-card-featured, .content-item');
   const grow = () => {
  cursor.style.width = '7px';
  cursor.style.height = '7px';
  ring.style.width = '48px';
  ring.style.height = '48px';
  ring.style.borderWidth = '1px';
  ring.style.borderColor = 'rgba(0, 122, 94, 0.4)';
};
const shrink = () => {
  cursor.style.width = '9px';
  cursor.style.height = '9px';
  ring.style.width = '42px';
  ring.style.height = '42px';
  ring.style.borderWidth = '1px';
  ring.style.borderColor = 'rgba(0, 122, 94, 0.4)';
};
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
};

export default CustomCursor;
