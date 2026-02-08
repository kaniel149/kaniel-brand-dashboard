import React from 'react';
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from 'remotion';
import { Background } from '../components/Background';
import { SlideIn } from '../components/SlideIn';
import { BRAND } from '../config/brand';

export interface FrameworkExplainerProps extends Record<string, unknown> {
  title: string;
  stages: Array<{ label: string; color: string; emoji: string }>;
  highlightStage: number;
  direction: 'rtl' | 'ltr';
  fontFamily?: string;
  bottomText?: string;
}

export const FrameworkExplainer: React.FC<FrameworkExplainerProps> = ({
  title,
  stages,
  highlightStage,
  direction,
  fontFamily = 'Heebo',
  bottomText = 'Where are you?',
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Title animation: fade in frames 0-30
  const titleOpacity = interpolate(frame, [5, 25], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const titleY = interpolate(frame, [5, 25], [-30, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Stagger each stage box
  const stageStartFrames = [60, 100, 140];

  // Arrows start after the second box in each pair
  const arrowStartFrames = [90, 130];

  // Bottom text
  const bottomTextOpacity = interpolate(frame, [200, 230], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <Background variant="grid" gridOpacity={0.04} gradientCorner="bottom-right">
      {/* Title */}
      <div
        style={{
          position: 'absolute',
          top: 180,
          width: '100%',
          textAlign: 'center',
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <span
          style={{
            fontFamily,
            fontSize: 64,
            fontWeight: 800,
            color: BRAND.colors.text,
            direction,
          }}
        >
          {title}
        </span>
      </div>

      {/* Stages */}
      <div
        style={{
          position: 'absolute',
          top: 380,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }}
      >
        {stages.map((stage, index) => {
          const boxStart = stageStartFrames[index] || stageStartFrames[stageStartFrames.length - 1];
          const isHighlighted = index === highlightStage;

          const boxProgress = spring({
            frame: frame - boxStart,
            fps,
            config: {
              damping: 14,
              stiffness: 150,
              mass: 0.5,
            },
          });

          const boxOpacity = interpolate(
            frame - boxStart,
            [0, 12],
            [0, 1],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          );

          const boxY = interpolate(
            frame - boxStart,
            [0, 15],
            [60, 0],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          );

          // Pulse animation for highlighted stage
          const pulsePhase = ((frame - boxStart) % 45) / 45;
          const pulseScale = isHighlighted && frame > boxStart + 20
            ? 1 + 0.02 * Math.sin(pulsePhase * Math.PI * 2)
            : 1;
          const pulseGlow = isHighlighted && frame > boxStart + 20
            ? 0.3 + 0.15 * Math.sin(pulsePhase * Math.PI * 2)
            : 0;

          return (
            <React.Fragment key={index}>
              {/* Stage Box */}
              <div
                style={{
                  opacity: boxOpacity,
                  transform: `translateY(${boxY}px) scale(${boxProgress * pulseScale})`,
                  width: width * 0.75,
                  padding: '36px 40px',
                  borderRadius: 20,
                  backgroundColor: isHighlighted
                    ? `${stage.color}18`
                    : BRAND.colors.bgSecondary,
                  border: `2px solid ${isHighlighted ? stage.color : 'rgba(255,255,255,0.08)'}`,
                  boxShadow: isHighlighted
                    ? `0 0 ${40 + pulseGlow * 100}px ${stage.color}${Math.round(pulseGlow * 255).toString(16).padStart(2, '0')}`
                    : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  direction,
                }}
              >
                <span style={{ fontSize: 48 }}>{stage.emoji}</span>
                <span
                  style={{
                    fontFamily,
                    fontSize: 42,
                    fontWeight: 700,
                    color: isHighlighted ? stage.color : BRAND.colors.textSecondary,
                  }}
                >
                  {stage.label}
                </span>
              </div>

              {/* Arrow between stages */}
              {index < stages.length - 1 && (
                <ArrowDown
                  frame={frame}
                  startFrame={arrowStartFrames[index] || arrowStartFrames[arrowStartFrames.length - 1]}
                  fps={fps}
                  color={BRAND.colors.textSecondary}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Bottom text */}
      <div
        style={{
          position: 'absolute',
          bottom: 200,
          width: '100%',
          textAlign: 'center',
          opacity: bottomTextOpacity,
        }}
      >
        <span
          style={{
            fontFamily,
            fontSize: 48,
            fontWeight: 600,
            color: BRAND.colors.accent,
            direction,
          }}
        >
          {bottomText}
        </span>
      </div>
    </Background>
  );
};

// Arrow component
const ArrowDown: React.FC<{
  frame: number;
  startFrame: number;
  fps: number;
  color: string;
}> = ({ frame, startFrame, fps, color }) => {
  const progress = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 15, stiffness: 120, mass: 0.6 },
  });

  const opacity = interpolate(
    frame - startFrame,
    [0, 10],
    [0, 0.6],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const scaleY = interpolate(progress, [0, 1], [0, 1]);

  return (
    <div
      style={{
        opacity,
        transform: `scaleY(${scaleY})`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0,
      }}
    >
      <div
        style={{
          width: 3,
          height: 32,
          backgroundColor: color,
          borderRadius: 2,
        }}
      />
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        style={{ marginTop: -2 }}
      >
        <path
          d="M10 14L0 4L3 1L10 8L17 1L20 4L10 14Z"
          fill={color}
        />
      </svg>
    </div>
  );
};
