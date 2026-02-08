import React from 'react';
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from 'remotion';
import { Background } from '../components/Background';
import { GlowBox } from '../components/GlowBox';
import { SlideIn } from '../components/SlideIn';
import { BRAND } from '../config/brand';

export interface LessonTeaserProps extends Record<string, unknown> {
  courseTitle: string;
  lessons: string[];
  price: string;
  ctaText: string;
  direction: 'rtl' | 'ltr';
  fontFamily?: string;
}

export const LessonTeaser: React.FC<LessonTeaserProps> = ({
  courseTitle,
  lessons,
  price,
  ctaText,
  direction,
  fontFamily = 'Heebo',
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // "New Course" badge animation
  const badgeScale = spring({
    frame: frame - 5,
    fps,
    config: { damping: 10, stiffness: 200, mass: 0.4 },
  });
  const badgeOpacity = interpolate(frame, [5, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Title spring
  const titleProgress = spring({
    frame: frame - 20,
    fps,
    config: { damping: 14, stiffness: 160, mass: 0.5 },
  });
  const titleOpacity = interpolate(frame, [20, 35], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Lesson bullets stagger
  const lessonStartFrame = 55;
  const lessonStagger = 15;

  // Price tag
  const priceStart = lessonStartFrame + lessons.length * lessonStagger + 15;
  const priceScale = spring({
    frame: frame - priceStart,
    fps,
    config: { damping: 10, stiffness: 200, mass: 0.3 },
  });
  const priceOpacity = interpolate(frame - priceStart, [0, 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // CTA button
  const ctaStart = priceStart + 25;
  const ctaOpacity = interpolate(frame - ctaStart, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const ctaPulsePhase = ((frame - ctaStart) % 40) / 40;
  const ctaPulse = frame > ctaStart + 15
    ? 1 + 0.03 * Math.sin(ctaPulsePhase * Math.PI * 2)
    : 1;

  // Price glow pulse
  const priceGlowPhase = ((frame - priceStart) % 50) / 50;
  const priceGlow = frame > priceStart + 15
    ? 0.3 + 0.2 * Math.sin(priceGlowPhase * Math.PI * 2)
    : 0.3;

  return (
    <Background variant="grid" gridOpacity={0.05} gradientCorner="top-left">
      {/* "New Course" Badge */}
      <div
        style={{
          position: 'absolute',
          top: 160,
          opacity: badgeOpacity,
          transform: `scale(${badgeScale})`,
        }}
      >
        <div
          style={{
            backgroundColor: BRAND.colors.accent,
            padding: '12px 36px',
            borderRadius: 50,
            boxShadow: `0 0 25px ${BRAND.colors.accentGlow}`,
          }}
        >
          <span
            style={{
              fontFamily,
              fontSize: 24,
              fontWeight: 700,
              color: BRAND.colors.text,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {direction === 'rtl' ? 'קורס חדש' : 'NEW COURSE'}
          </span>
        </div>
      </div>

      {/* Course Title */}
      <div
        style={{
          position: 'absolute',
          top: 260,
          width: width * 0.85,
          textAlign: 'center',
          opacity: titleOpacity,
          transform: `translateX(${(1 - titleProgress) * (direction === 'rtl' ? -60 : 60)}px)`,
          direction,
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
          {courseTitle}
        </span>
      </div>

      {/* Lesson Bullets */}
      <div
        style={{
          position: 'absolute',
          top: 500,
          width: width * 0.8,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          direction,
        }}
      >
        {lessons.map((lesson, index) => {
          const bulletStart = lessonStartFrame + index * lessonStagger;

          const bulletScale = spring({
            frame: frame - bulletStart,
            fps,
            config: { damping: 14, stiffness: 170, mass: 0.4 },
          });

          const bulletOpacity = interpolate(
            frame - bulletStart,
            [0, 10],
            [0, 1],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          );

          const bulletX = interpolate(
            frame - bulletStart,
            [0, 12],
            [direction === 'rtl' ? -40 : 40, 0],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          );

          return (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                opacity: bulletOpacity,
                transform: `translateX(${bulletX}px) scale(${bulletScale})`,
                direction,
              }}
            >
              {/* Number circle */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  minWidth: 48,
                  borderRadius: '50%',
                  backgroundColor: BRAND.colors.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 15px ${BRAND.colors.accentGlow}`,
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 22,
                    fontWeight: 700,
                    color: BRAND.colors.text,
                  }}
                >
                  {index + 1}
                </span>
              </div>

              {/* Lesson name */}
              <span
                style={{
                  fontFamily,
                  fontSize: 32,
                  fontWeight: 500,
                  color: BRAND.colors.text,
                }}
              >
                {lesson}
              </span>
            </div>
          );
        })}
      </div>

      {/* Price Tag */}
      <div
        style={{
          position: 'absolute',
          bottom: 360,
          opacity: priceOpacity,
          transform: `scale(${priceScale})`,
        }}
      >
        <div
          style={{
            padding: '16px 48px',
            borderRadius: 16,
            backgroundColor: BRAND.colors.bgSecondary,
            border: `2px solid ${BRAND.colors.accent}`,
            boxShadow: `0 0 ${30 + priceGlow * 50}px rgba(0, 102, 255, ${priceGlow})`,
          }}
        >
          <span
            style={{
              fontFamily,
              fontSize: 52,
              fontWeight: 800,
              color: BRAND.colors.accent,
            }}
          >
            {price}
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <div
        style={{
          position: 'absolute',
          bottom: 220,
          opacity: ctaOpacity,
          transform: `scale(${ctaPulse})`,
        }}
      >
        <div
          style={{
            padding: '20px 64px',
            borderRadius: 60,
            backgroundColor: BRAND.colors.accent,
            boxShadow: `0 0 30px ${BRAND.colors.accentGlow}`,
          }}
        >
          <span
            style={{
              fontFamily,
              fontSize: 34,
              fontWeight: 700,
              color: BRAND.colors.text,
            }}
          >
            {ctaText}
          </span>
        </div>
      </div>
    </Background>
  );
};
