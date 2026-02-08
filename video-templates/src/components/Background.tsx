import React from 'react';
import { useCurrentFrame, interpolate, useVideoConfig } from 'remotion';
import { BRAND } from '../config/brand';

interface BackgroundProps {
  children: React.ReactNode;
  variant?: 'solid' | 'grid' | 'gradient' | 'grain';
  gradientCorner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  gradientColor?: string;
  gridOpacity?: number;
  grainOpacity?: number;
}

export const Background: React.FC<BackgroundProps> = ({
  children,
  variant = 'solid',
  gradientCorner = 'top-right',
  gradientColor = BRAND.colors.accent,
  gridOpacity = 0.06,
  grainOpacity = 0.03,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const cornerPositions = {
    'top-left': '0% 0%',
    'top-right': '100% 0%',
    'bottom-left': '0% 100%',
    'bottom-right': '100% 100%',
  };

  const getBackgroundStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: 'absolute',
      top: 0,
      left: 0,
      width,
      height,
      backgroundColor: BRAND.colors.bg,
    };

    if (variant === 'gradient' || variant === 'grid') {
      base.background = `radial-gradient(ellipse at ${cornerPositions[gradientCorner]}, ${gradientColor}22 0%, ${BRAND.colors.bg} 60%)`;
    }

    return base;
  };

  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      {/* Base background */}
      <div style={getBackgroundStyle()} />

      {/* Grid overlay */}
      {(variant === 'grid') && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width,
            height,
            opacity: gridOpacity,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      )}

      {/* Grain texture via SVG noise */}
      {(variant === 'grain') && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width,
            height,
            opacity: grainOpacity,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
      )}

      {/* Content */}
      <div
        style={{
          position: 'relative',
          width,
          height,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};
