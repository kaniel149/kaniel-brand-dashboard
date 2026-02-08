import React from 'react';
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from 'remotion';
import { Background } from '../components/Background';
import { BRAND } from '../config/brand';

export interface QuoteCardProps extends Record<string, unknown> {
  quote: string;
  author: string;
  direction: 'rtl' | 'ltr';
  fontFamily: string;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({
  quote,
  author,
  direction,
  fontFamily,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Quote marks animation (scale in)
  const quoteMarkScale = spring({
    frame: frame - 5,
    fps,
    config: {
      damping: 12,
      stiffness: 150,
      mass: 0.5,
    },
  });

  const quoteMarkOpacity = interpolate(
    frame,
    [5, 20],
    [0, 0.15],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Typewriter effect for quote text
  const charsPerFrame = 0.8;
  const typewriterStart = 20;
  const totalChars = quote.length;
  const visibleChars = Math.min(
    totalChars,
    Math.floor((frame - typewriterStart) * charsPerFrame)
  );
  const displayedText = frame >= typewriterStart ? quote.slice(0, visibleChars) : '';

  // Cursor blink
  const cursorVisible = visibleChars < totalChars && frame >= typewriterStart;
  const cursorBlink = Math.floor(frame / 8) % 2 === 0;

  // Author name fade in (after typing finishes)
  const typingEndFrame = typewriterStart + Math.ceil(totalChars / charsPerFrame);
  const authorOpacity = interpolate(
    frame - typingEndFrame,
    [0, 20],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  const authorY = interpolate(
    frame - typingEndFrame,
    [0, 20],
    [15, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Blue separator line
  const separatorWidth = interpolate(
    frame - (typingEndFrame - 10),
    [0, 25],
    [0, 200],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Subtle background pulse
  const pulsePhase = (frame % 90) / 90;
  const bgPulse = 0.15 + 0.05 * Math.sin(pulsePhase * Math.PI * 2);

  return (
    <Background variant="gradient" gradientCorner="top-right" gradientColor={BRAND.colors.accent}>
      {/* Large decorative quote marks */}
      <div
        style={{
          position: 'absolute',
          top: direction === 'rtl' ? 480 : 480,
          left: direction === 'rtl' ? 'auto' : 80,
          right: direction === 'rtl' ? 80 : 'auto',
          opacity: quoteMarkOpacity,
          transform: `scale(${quoteMarkScale})`,
        }}
      >
        <span
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 320,
            color: BRAND.colors.accent,
            lineHeight: 1,
          }}
        >
          {direction === 'rtl' ? '\u201D' : '\u201C'}
        </span>
      </div>

      {/* Quote text */}
      <div
        style={{
          position: 'absolute',
          top: '32%',
          width: width * 0.8,
          direction,
          textAlign: direction === 'rtl' ? 'right' : 'left',
        }}
      >
        <span
          style={{
            fontFamily,
            fontSize: 52,
            fontWeight: 600,
            color: BRAND.colors.text,
            lineHeight: 1.5,
            letterSpacing: direction === 'ltr' ? '-0.02em' : 'normal',
          }}
        >
          {displayedText}
          {cursorVisible && cursorBlink && (
            <span
              style={{
                display: 'inline-block',
                width: 3,
                height: 52,
                backgroundColor: BRAND.colors.accent,
                marginLeft: direction === 'ltr' ? 2 : 0,
                marginRight: direction === 'rtl' ? 2 : 0,
                verticalAlign: 'middle',
              }}
            />
          )}
        </span>
      </div>

      {/* Separator line */}
      <div
        style={{
          position: 'absolute',
          top: '68%',
          left: direction === 'rtl' ? 'auto' : width * 0.1,
          right: direction === 'rtl' ? width * 0.1 : 'auto',
          width: separatorWidth,
          height: 3,
          borderRadius: 2,
          backgroundColor: BRAND.colors.accent,
          boxShadow: `0 0 15px ${BRAND.colors.accentGlow}`,
        }}
      />

      {/* Author */}
      <div
        style={{
          position: 'absolute',
          top: '72%',
          width: width * 0.8,
          direction,
          textAlign: direction === 'rtl' ? 'right' : 'left',
          opacity: authorOpacity,
          transform: `translateY(${authorY}px)`,
        }}
      >
        <span
          style={{
            fontFamily,
            fontSize: 32,
            fontWeight: 400,
            color: BRAND.colors.textSecondary,
            letterSpacing: '0.05em',
          }}
        >
          {direction === 'rtl' ? `\u2014 ${author}` : `\u2014 ${author}`}
        </span>
      </div>
    </Background>
  );
};
