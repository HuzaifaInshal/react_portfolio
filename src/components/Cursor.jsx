import React, { useState, useEffect } from 'react';

const CircleFollowCursor = ({isHovered }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [position2, setPosition2] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setPosition((prevPosition) => ({
        x: prevPosition.x + window.scrollX,
        y: prevPosition.y + window.scrollY,
      }));
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const updatePosition = () => {
    //   setPosition2({ x: position.x, y: position.y });
      setPosition2({x: position2.x += (position.x-position2.x)/8 ,y: position2.y += (position.y-position2.y)/8})
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        zIndex:'999999',
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
    >
      <div className={`cursor-border ${isHovered ? 'hovered' : ''}`}
        style={{
          left: position2.x ,
          top: position2.y ,
        }}
      />
      <div className='cursor'
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </div>
  );
};

export default CircleFollowCursor;
