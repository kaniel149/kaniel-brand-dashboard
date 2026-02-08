import React from 'react';
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from 'remotion';
import { Background } from '../components/Background';
import { GlowBox } from '../components/GlowBox';
import { BRAND } from '../config/brand';

export interface DailyTipProps extends Record<string, unknown> {
  tipNumber: number;
  category: string;
  categoryEmoji: string;
  title: string;
  description: string;
  actionText: string;
  direction: 'rtl' | 'ltr';
  fontFamily?: string;
}

export const DailyTip: React.FC<DailyTipProps> = ({
  tipNumber,
  category,
  categoryEmoji,
  title,
  description,
  actionText,
  direction,
  fontFamily = 'Heebo',
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // TIP badge animation
  const badgeScale = spring({
    frame: frame - 5,
    fps,
    config: { damping: 10, stiffness: 220, mass: 0.3 },
  });
  const badgeOpacity = interpolate(frame, [5, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Category emoji bounce
  const emojiScale = spring({
    frame: frame - 20,
    fps,
    config: { damping: 8, stiffness: 250, mass: 0.4 },
  });
  const emojiOpacity = interpolate(frame, [20, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Title slide in
  const titleStart = 35;
  const titleProgress = spring({
    frame: frame - titleStart,
    fps,
    config: { damping: 14, stiffness: 160, mass: 0.5 },
  });
  const titleOpacity = interpolate(frame - titleStart, [0, 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const titleX = (1 - titleProgress) * (direction === 'rtl' ? -80 : 80);

  // Description fade in
  const descStart = 55;
  const descOpacity = interpolate(frame - descStart, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const descY = interpolate(frame - descStart, [0, 20], [20, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // "Try this today" section
  const actionLabelStart = 85;
  const actionLabelOpacity = interpolate(frame - actionLabelStart, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Action card
  const actionCardStart = 100;
  const actionCardScale = spring({
    frame: frame - actionCardStart,
    fps,
    config: { damping: 12, stiffness: 150, mass: 0.5 },
  });
  const actionCardOpacity = interpolate(frame - actionCardStart, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Typewriter for action text
  const typeStart = actionCardStart + 15;
  const charsPerFrame = 0.6;
  const actionTotalChars = actionText.length;
  const actionVisibleChars = Math.min(
    actionTotalChars,
    Math.floor((frame - typeStart) * charsPerFrame)
  );
  const displayedAction = frame >= typeStart ? actionText.slice(0, actionVisibleChars) : '';

  // Cursor
  const cursorVisible = actionVisibleChars < actionTotalChars && frame >= typeStart;
  const cursorBlink = Math.floor(frame / 8) % 2 === 0;

  // Watermark
  const watermarkOpacity = interpolate(frame, [0, 30], [0, 0.4], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <Background variant="gradient" gradientCorner="bottom-left" gradientColor={BRAND.colors.accent}>
      {/* TIP Badge */}
      <div
        style={{
          position: 'absolute',
          top: 170,
          opacity: badgeOpacity,
          transform: `scale(${badgeScale})`,
        }}
      >
        <div
          style={{
            backgroundColor: BRAND.colors.accent,
            padding: '10px 32px',
            borderRadius: 50,
            boxShadow: `0 0 20px ${BRAND.colors.accentGlow}`,
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontSize: 22,
              fontWeight: 700,
              color: BRAND.colors.text,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            TIP #{tipNumber}
          </span>
        </div>
      </div>

      {/* Category Emoji */}
      <div
        style={{
          position: 'absolute',
          top: 280,
          opacity: emojiOpacity,
          transform: `scale(${emojiScale})`,
        }}
      >
        <span style={{ fontSize: 80 }}>{categoryEmoji}</span>
      </div>

      {/* Category label */}
      <div
        style={{
          position: 'absolute',
          top: 380,
          opacity: emojiOpacity,
        }}
      >
        <span
          style={{
            fontFamily,
            fontSize: 24,
            fontWeight: 500,
            color: BRAND.colors.textSecondary,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {category}
        </span>
      </div>

      {/* Title */}
      <div
        style={{
          position: 'absolute',
          top: 450,
          width: width * 0.85,
          textAlign: 'center',
          direction,
          opacity: titleOpacity,
          transform: `translateX(${titleX}px)`,
        }}
      >
        <span
          style={{
            fontFamily,
            fontSize: 56,
            fontWeight: 800,
            color: BRAND.colors.text,
            lineHeight: 1.3,
          }}
        >
          {title}
        </span>
      </div>

      {/* Description */}
      <div
        style={{
          position: 'absolute',
          top: 680,
          width: width * 0.8,
          textAlign: 'center',
          direction,
          opacity: descOpacity,
          transform: `translateY(${descY}px)`,
        }}
      >
        <span
          style={{
            fontFamily,
            fontSize: 30,
            fontWeight: 400,
            color: BRAND.colors.textSecondary,
            lineHeight: 1.5,
          }}
        >
          {description}
        </span>
      </div>

      {/* "Try this today" label */}
      <div
        style={{
          position: 'absolute',
          top: 920,
          opacity: actionLabelOpacity,
        }}
      >
        <span
          style={{
            fontFamily,
            fontSize: 26,
            fontWeight: 600,
            color: BRAND.colors.accent,
            letterSpacing: '0.05em',
          }}
        >
          {direction === 'rtl' ? ':נסה את זה היום' : 'Try this today:'}
        </span>
      </div>

      {/* Action Card */}
      <div
        style={{
          position: 'absolute',
          top: 980,
          width: width * 0.8,
          opacity: actionCardOpacity,
          transform: `scale(${actionCardScale})`,
        }}
      >
        <div
          style={{
            backgroundColor: `${BRAND.colors.accent}15`,
            border: `1.5px solid ${BRAND.colors.accent}40`,
            borderRadius: 16,
            padding: '28px 32px',
            direction,
            textAlign: direction === 'rtl' ? 'right' : 'left',
          }}
        >
          <span
            style={{
              fontFamily,
              fontSize: 30,
              fontWeight: 500,
              color: BRAND.colors.text,
              lineHeight: 1.5,
            }}
          >
            {displayedAction}
            {cursorVisible && cursorBlink && (
              <span
                style={{
                  display: 'inline-block',
                  width: 2,
                  height: 30,
                  backgroundColor: BRAND.colors.accent,
                  marginLeft: direction === 'ltr' ? 2 : 0,
                  marginRight: direction === 'rtl' ? 2 : 0,
                  verticalAlign: 'middle',
                }}
              />
            )}
          </span>
        </div>
      </div>

      {/* @kaniel watermark */}
      <div
        style={{
          position: 'absolute',
          bottom: 80,
          opacity: watermarkOpacity,
        }}
      >
        <span
          style={{
            fontFamily: 'Inter',
            fontSize: 22,
            fontWeight: 500,
            color: BRAND.colors.textSecondary,
            letterSpacing: '0.05em',
          }}
        >
          @kaniel
        </span>
      </div>
    </Background>
  );
};
