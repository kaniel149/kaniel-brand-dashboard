import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

interface SlideInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  startFrame?: number;
  distance?: number;
  timing?: 'spring' | 'ease';
  springConfig?: {
    damping?: number;
    stiffness?: number;
    mass?: number;
  };
  style?: React.CSSProperties;
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = 'up',
  startFrame = 0,
  distance = 80,
  timing = 'spring',
  springConfig = { damping: 14, stiffness: 180, mass: 0.6 },
  style = {},
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  let progress: number;
  if (timing === 'spring') {
    progress = spring({
      frame: frame - startFrame,
      fps,
      config: springConfig,
    });
  } else {
    progress = interpolate(
      frame - startFrame,
      [0, 20],
      [0, 1],
      { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
    );
  }

  const opacity = interpolate(
    frame - startFrame,
    [0, 10],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const directionMap = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const offset = directionMap[direction];
  const translateX = offset.x * (1 - progress);
  const translateY = offset.y * (1 - progress);

  return (
    <div
      style={{
        opacity,
        transform: `translate(${translateX}px, ${translateY}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
