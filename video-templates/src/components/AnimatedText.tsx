import React from 'react';
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

interface AnimatedTextProps {
  text: string;
  mode: 'word' | 'character';
  direction: 'rtl' | 'ltr';
  fontFamily: string;
  fontSize: number;
  color?: string;
  fontWeight?: number;
  startFrame?: number;
  delayPerUnit?: number;
  lineHeight?: number;
  textAlign?: 'center' | 'left' | 'right';
  maxWidth?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  mode,
  direction,
  fontFamily,
  fontSize,
  color = '#FFFFFF',
  fontWeight = 700,
  startFrame = 0,
  delayPerUnit = 5,
  lineHeight = 1.3,
  textAlign = 'center',
  maxWidth,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const units = mode === 'word' ? text.split(' ') : text.split('');

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start',
        direction: direction,
        gap: mode === 'word' ? '0.3em' : '0',
        maxWidth: maxWidth || '90%',
        lineHeight,
      }}
    >
      {units.map((unit, index) => {
        const unitStartFrame = startFrame + index * delayPerUnit;

        const scale = spring({
          frame: frame - unitStartFrame,
          fps,
          config: {
            damping: 12,
            stiffness: 200,
            mass: 0.5,
          },
        });

        const opacity = interpolate(
          frame - unitStartFrame,
          [0, 5],
          [0, 1],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );

        const translateY = interpolate(
          frame - unitStartFrame,
          [0, 8],
          [30, 0],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );

        return (
          <span
            key={index}
            style={{
              display: 'inline-block',
              fontFamily,
              fontSize,
              fontWeight,
              color,
              opacity,
              transform: `scale(${scale}) translateY(${translateY}px)`,
              whiteSpace: mode === 'character' ? 'pre' : 'normal',
            }}
          >
            {unit}
          </span>
        );
      })}
    </div>
  );
};
