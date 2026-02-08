import React from 'react';
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Sequence,
} from 'remotion';
import { Background } from '../components/Background';
import { BRAND } from '../config/brand';

export interface HookReelProps extends Record<string, unknown> {
  hookText: string;
  accentWord: string;
  direction: 'rtl' | 'ltr';
  fontFamily: string;
}

export const HookReel: React.FC<HookReelProps> = ({
  hookText,
  accentWord,
  direction,
  fontFamily,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const words = hookText.split(' ');
  const delayPerWord = 8;

  return (
    <Background variant="grain" grainOpacity={0.04}>
      {/* Subtle animated radial glow behind text area */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${BRAND.colors.accentGlow} 0%, transparent 70%)`,
          opacity: interpolate(
            frame,
            [20, 50],
            [0, 0.4],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          ),
        }}
      />

      {/* Words container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: width * 0.85,
          direction,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px 18px',
            direction,
          }}
        >
          {words.map((word, index) => {
            const wordStart = 10 + index * delayPerWord;
            const isAccent = word === accentWord || word.includes(accentWord);

            const wordScale = spring({
              frame: frame - wordStart,
              fps,
              config: {
                damping: 10,
                stiffness: 200,
                mass: 0.4,
              },
            });

            const wordOpacity = interpolate(
              frame - wordStart,
              [0, 6],
              [0, 1],
              { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
            );

            const wordY = interpolate(
              frame - wordStart,
              [0, 10],
              [40, 0],
              { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
            );

            // Accent underline width animation
            const underlineWidth = isAccent
              ? interpolate(
                  frame - (wordStart + 10),
                  [0, 15],
                  [0, 100],
                  { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
                )
              : 0;

            return (
              <div
                key={index}
                style={{
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily,
                    fontSize: 82,
                    fontWeight: 800,
                    color: isAccent ? BRAND.colors.accent : BRAND.colors.text,
                    opacity: wordOpacity,
                    transform: `scale(${wordScale}) translateY(${wordY}px)`,
                    textShadow: isAccent
                      ? `0 0 30px ${BRAND.colors.accentGlow}`
                      : 'none',
                  }}
                >
                  {word}
                </span>

                {/* Blue accent underline */}
                {isAccent && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: -4,
                      left: direction === 'rtl' ? 'auto' : 0,
                      right: direction === 'rtl' ? 0 : 'auto',
                      width: `${underlineWidth}%`,
                      height: 5,
                      borderRadius: 3,
                      backgroundColor: BRAND.colors.accent,
                      boxShadow: `0 0 12px ${BRAND.colors.accentGlow}`,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => {
        const particleX = (i * 137.508) % width;
        const particleStartY = height + 20;
        const speed = 0.8 + (i % 3) * 0.4;
        const particleY = particleStartY - frame * speed;
        const particleOpacity = interpolate(
          particleY,
          [height * 0.2, height * 0.8],
          [0, 0.5],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: particleX,
              top: ((particleY % (height + 40)) + height + 40) % (height + 40),
              width: 3 + (i % 3),
              height: 3 + (i % 3),
              borderRadius: '50%',
              backgroundColor: BRAND.colors.accent,
              opacity: particleOpacity * 0.3,
            }}
          />
        );
      })}
    </Background>
  );
};
