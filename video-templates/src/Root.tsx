import React from 'react';
import { Composition } from 'remotion';
import { loadFont as loadInter } from '@remotion/google-fonts/Inter';
import { loadFont as loadHeebo } from '@remotion/google-fonts/Heebo';

import { HookReel } from './compositions/HookReel';
import { FrameworkExplainer } from './compositions/FrameworkExplainer';
import { QuoteCard } from './compositions/QuoteCard';
import { LessonTeaser } from './compositions/LessonTeaser';
import { DailyTip } from './compositions/DailyTip';

// Load Google Fonts - only the weights we need
// API: loadFont(style, options)
loadInter('normal', {
  weights: ['400', '500', '600', '700', '800'],
  ignoreTooManyRequestsWarning: true,
});
loadHeebo('normal', {
  weights: ['400', '500', '600', '700', '800'],
  ignoreTooManyRequestsWarning: true,
});

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Template 1: HookReel - Kinetic typography for reel hooks */}
      <Composition
        id="HookReel"
        component={HookReel}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          hookText: '\u05D4\u05E1\u05D5\u05DB\u05E0\u05D9\u05DD \u05DE\u05D5\u05DB\u05E0\u05D9\u05DD. \u05D0\u05EA\u05D4 \u05DE\u05D5\u05DB\u05DF?',
          accentWord: '\u05DE\u05D5\u05DB\u05E0\u05D9\u05DD',
          direction: 'rtl' as const,
          fontFamily: 'Heebo',
        }}
      />

      {/* Template 1b: HookReel English variant */}
      <Composition
        id="HookReel-EN"
        component={HookReel}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          hookText: 'The agents are ready. Are you?',
          accentWord: 'ready',
          direction: 'ltr' as const,
          fontFamily: 'Inter',
        }}
      />

      {/* Template 2: FrameworkExplainer - Animated framework diagram */}
      <Composition
        id="FrameworkExplainer"
        component={FrameworkExplainer}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: '\u05D4\u05E4\u05E8\u05D9\u05D9\u05DE\u05D5\u05D5\u05E8\u05E7',
          stages: [
            { label: '\u05D4\u05D9\u05E9\u05E8\u05D3\u05D5\u05EA', color: '#FF3B3B', emoji: '\uD83D\uDD34' },
            { label: '\u05D1\u05D9\u05D8\u05D7\u05D5\u05DF', color: '#FFB800', emoji: '\uD83D\uDFE1' },
            { label: '\u05E9\u05E4\u05E2', color: '#00C851', emoji: '\uD83D\uDFE2' },
          ],
          highlightStage: 1,
          direction: 'rtl' as const,
          fontFamily: 'Heebo',
          bottomText: '\u05D0\u05D9\u05E4\u05D4 \u05D0\u05EA\u05D4?',
        }}
      />

      {/* Template 2b: FrameworkExplainer English */}
      <Composition
        id="FrameworkExplainer-EN"
        component={FrameworkExplainer}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: 'The Framework',
          stages: [
            { label: 'SURVIVAL', color: '#FF3B3B', emoji: '\uD83D\uDD34' },
            { label: 'SECURITY', color: '#FFB800', emoji: '\uD83D\uDFE1' },
            { label: 'ABUNDANCE', color: '#00C851', emoji: '\uD83D\uDFE2' },
          ],
          highlightStage: 1,
          direction: 'ltr' as const,
          fontFamily: 'Inter',
          bottomText: 'Where are you?',
        }}
      />

      {/* Template 3: QuoteCard - Animated quote for reels/stories */}
      <Composition
        id="QuoteCard"
        component={QuoteCard}
        durationInFrames={180}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          quote: '\u05DB\u05DC \u05DE\u05D4 \u05E9\u05D0\u05E0\u05D7\u05E0\u05D5 \u05E6\u05E8\u05D9\u05DB\u05D9\u05DD \u05D6\u05D4 \u05DC\u05D1\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05E1\u05D1\u05D9\u05D1\u05D4 \u05D4\u05E0\u05DB\u05D5\u05E0\u05D4 \u05DC\u05E2\u05E6\u05DE\u05E0\u05D5 \u05D5\u05DC\u05E1\u05D5\u05DB\u05E0\u05D9\u05DD',
          author: 'Kaniel Tordjman',
          direction: 'rtl' as const,
          fontFamily: 'Heebo',
        }}
      />

      {/* Template 3b: QuoteCard English */}
      <Composition
        id="QuoteCard-EN"
        component={QuoteCard}
        durationInFrames={180}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          quote: 'All we need is to build the right environment for ourselves and for agents',
          author: 'Kaniel Tordjman',
          direction: 'ltr' as const,
          fontFamily: 'Inter',
        }}
      />

      {/* Template 4: LessonTeaser - Course promotion reel */}
      <Composition
        id="LessonTeaser"
        component={LessonTeaser}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          courseTitle: '\u05D4\u05E2\u05D5\u05D6\u05E8 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05DC\u05DA',
          lessons: [
            '\u05DE\u05D4 \u05D6\u05D4 AI \u05D5\u05DC\u05DE\u05D4 \u05E2\u05DB\u05E9\u05D9\u05D5',
            '\u05D4\u05EA\u05E7\u05E0\u05EA Claude',
            '\u05D4\u05E4\u05E8\u05D5\u05DE\u05E4\u05D8 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05E9\u05DC\u05DA',
            '\u05D1\u05E0\u05D9\u05D9\u05EA \u05D4\u05E2\u05D5\u05D6\u05E8 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF',
            '\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4 \u05D9\u05D5\u05DE\u05D9\u05EA',
          ],
          price: '97\u20AA',
          ctaText: '\u05D4\u05EA\u05D7\u05DC \u05DC\u05DC\u05DE\u05D5\u05D3',
          direction: 'rtl' as const,
          fontFamily: 'Heebo',
        }}
      />

      {/* Template 4b: LessonTeaser English */}
      <Composition
        id="LessonTeaser-EN"
        component={LessonTeaser}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          courseTitle: 'Your First AI Assistant',
          lessons: [
            'What is AI & why now',
            'Installing Claude',
            'Your first prompt',
            'Building your assistant',
            'Daily automation',
          ],
          price: '$27',
          ctaText: 'Start Learning',
          direction: 'ltr' as const,
          fontFamily: 'Inter',
        }}
      />

      {/* Template 5: DailyTip - Quick AI tip */}
      <Composition
        id="DailyTip"
        component={DailyTip}
        durationInFrames={210}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          tipNumber: 1,
          category: 'AI FIRST',
          categoryEmoji: '\uD83E\uDD16',
          title: '\u05EA\u05DF \u05DC-AI \u05DC\u05E2\u05E9\u05D5\u05EA \u05D0\u05EA \u05D4\u05D1\u05D5\u05E7\u05E8',
          description: '\u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05D2\u05DC\u05D5\u05DC \u05D7\u05D3\u05E9\u05D5\u05EA \u05D9\u05D3\u05E0\u05D9\u05EA, \u05D1\u05E0\u05D4 \u05E1\u05D5\u05DB\u05DF \u05E9\u05DE\u05DB\u05D9\u05DF \u05DC\u05DA \u05E1\u05D9\u05DB\u05D5\u05DD \u05D1\u05D5\u05E7\u05E8 \u05DE\u05D5\u05EA\u05D0\u05DD \u05D0\u05D9\u05E9\u05D9\u05EA',
          actionText: '\u05E4\u05EA\u05D7 \u05D0\u05EA Claude \u05D5\u05EA\u05D1\u05E7\u05E9 \u05DE\u05DE\u05E0\u05D5 \u05DC\u05E1\u05DB\u05DD \u05D0\u05EA 5 \u05D4\u05D7\u05D3\u05E9\u05D5\u05EA \u05D4\u05D7\u05E9\u05D5\u05D1\u05D5\u05EA \u05D1\u05D9\u05D5\u05EA\u05E8 \u05D4\u05D9\u05D5\u05DD',
          direction: 'rtl' as const,
          fontFamily: 'Heebo',
        }}
      />

      {/* Template 5b: DailyTip English */}
      <Composition
        id="DailyTip-EN"
        component={DailyTip}
        durationInFrames={210}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          tipNumber: 1,
          category: 'AI FIRST',
          categoryEmoji: '\uD83E\uDD16',
          title: 'Let AI handle your morning',
          description: 'Instead of manually scrolling news, build an agent that prepares a personalized morning briefing',
          actionText: 'Open Claude and ask it to summarize the 5 most important news stories today',
          direction: 'ltr' as const,
          fontFamily: 'Inter',
        }}
      />
    </>
  );
};
