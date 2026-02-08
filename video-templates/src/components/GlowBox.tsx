import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { BRAND } from '../config/brand';

interface GlowBoxProps {
  children: React.ReactNode;
  glowColor?: string;
  glowIntensity?: number;
  borderRadius?: number;
  padding?: string;
  width?: string | number;
  startFrame?: number;
  pulseSpeed?: number;
  backgroundColor?: string;
}

export const GlowBox: React.FC<GlowBoxProps> = ({
  children,
  glowColor = BRAND.colors.accent,
  glowIntensity = 0.4,
  borderRadius = 16,
  padding = '24px 32px',
  width = 'auto',
  startFrame = 0,
  pulseSpeed = 60,
  backgroundColor = BRAND.colors.bgSecondary,
}) => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(
    frame - startFrame,
    [0, 15],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const scaleIn = interpolate(
    frame - startFrame,
    [0, 15],
    [0.9, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Pulsing glow effect
  const pulsePhase = ((frame - startFrame) % pulseSpeed) / pulseSpeed;
  const glowPulse = 0.7 + 0.3 * Math.sin(pulsePhase * Math.PI * 2);
  const currentIntensity = glowIntensity * glowPulse;

  const glowRgb = hexToRgb(glowColor);

  return (
    <div
      style={{
        opacity: fadeIn,
        transform: `scale(${scaleIn})`,
        borderRadius,
        padding,
        width,
        backgroundColor,
        border: `1px solid rgba(${glowRgb}, ${currentIntensity * 0.6})`,
        boxShadow: `
          0 0 ${20 * currentIntensity}px rgba(${glowRgb}, ${currentIntensity * 0.3}),
          0 0 ${60 * currentIntensity}px rgba(${glowRgb}, ${currentIntensity * 0.15}),
          inset 0 0 ${30 * currentIntensity}px rgba(${glowRgb}, ${currentIntensity * 0.05})
        `,
      }}
    >
      {children}
    </div>
  );
};

function hexToRgb(hex: string): string {
  const cleaned = hex.replace('#', '');
  const r = parseInt(cleaned.substring(0, 2), 16);
  const g = parseInt(cleaned.substring(2, 4), 16);
  const b = parseInt(cleaned.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}
