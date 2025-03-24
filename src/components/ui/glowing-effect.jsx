import { useEffect, useRef, useState } from "react";

export const GlowingEffect = ({
  glow = true,
  disabled = false,
  speed = 0.07,
  minAlpha = 0.3,
  maxAlpha = 0.7,
  spread = 20,
  proximity = 0,
  inactiveZone = 0.01,
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const frame = useRef(0);

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!ref.current || disabled) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = (e.clientX - centerX) / (rect.width / 2);
      const distanceY = (e.clientY - centerY) / (rect.height / 2);

      // Calculate distance from center (normalized)
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < inactiveZone) {
        // When near center, place directly at center
        setPosition({ x: 50, y: 50 });
        setOpacity(maxAlpha);
      } else {
        // Otherwise follow the pointer
        if (proximity > 0 && distance > proximity) {
          setIsVisible(false);
          return;
        }

        const x = 50 + distanceX * 50;
        const y = 50 + distanceY * 50;

        setPosition({ x, y });
        setOpacity(Math.min(maxAlpha, Math.max(minAlpha, distance * 0.5)));
      }

      setIsVisible(true);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(frame.current);
    };
  }, [disabled, inactiveZone, maxAlpha, minAlpha, proximity]);

  const interpolatedPosition = useRef({ x: 0, y: 0 });
  const interpolatedOpacity = useRef(0);

  useEffect(() => {
    let prevTime;
    
    const animate = (time) => {
      if (prevTime === undefined) {
        prevTime = time;
      }
      
      const deltaTime = time - prevTime;
      prevTime = time;
      
      // Smooth interpolation
      interpolatedPosition.current.x += (position.x - interpolatedPosition.current.x) * speed * deltaTime * 0.1;
      interpolatedPosition.current.y += (position.y - interpolatedPosition.current.y) * speed * deltaTime * 0.1;
      
      // Apply to element
      if (ref.current) {
        const targetOpacity = isVisible ? opacity : 0;
        interpolatedOpacity.current += (targetOpacity - interpolatedOpacity.current) * speed * deltaTime * 0.1;
        
        ref.current.style.setProperty('--glow-x', `${interpolatedPosition.current.x}%`);
        ref.current.style.setProperty('--glow-y', `${interpolatedPosition.current.y}%`);
        ref.current.style.setProperty('--glow-opacity', interpolatedOpacity.current.toString());
      }
      
      frame.current = requestAnimationFrame(animate);
    };
    
    frame.current = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, [position, opacity, speed, isVisible]);

  return (
    <div 
      ref={ref}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{
        '--glow-size': `${spread}%`,
      }}
    >
      {glow && (
        <div 
          className="absolute blur-[40px] opacity-[var(--glow-opacity)] will-change-[opacity,transform] duration-75 ease-linear"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,50,50,0.8) 0%, rgba(255,50,50,0) 65%)',
            width: 'var(--glow-size)',
            height: 'var(--glow-size)',
            left: 'calc(var(--glow-x) - var(--glow-size) / 2)',
            top: 'calc(var(--glow-y) - var(--glow-size) / 2)',
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
};
