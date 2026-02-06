# 🏠 Local Content System

> הכל רץ מקומית דרך Claude. בלי n8n, בלי כלים חיצוניים מיותרים.

---

## 🎯 איך זה עובד

```
אתה (קניאל)          Claude                    התוצאה
    │                   │                          │
    ├── "מה הסטטוס?" ──→│ בודק PROGRESS.md ───────→│ Brief יומי
    │                   │                          │
    ├── "תן רעיונות" ──→│ סורק + יוצר ────────────→│ 5-10 רעיונות
    │                   │                          │
    ├── "כתוב תסריט" ──→│ כותב לפי brand ─────────→│ תסריט מוכן
    │                   │                          │
    ├── "תייצר voiceover"→│ ElevenLabs TTS ────────→│ MP3 מוכן
    │                   │                          │
    ├── "תערוך סרטון" ──→│ FFmpeg + Remotion ──────→│ סרטון מוכן
    │                   │                          │
    └── "תזמן" ─────────→│ getLate.dev ────────────→│ מתוזמן לפרסום
```

---

## 📁 מבנה התיקיות

```
kaniel personal brand/
│
├── CLAUDE.md              # אסטרטגיה מאסטר - מקור האמת
├── PROGRESS.md            # סטטוס live - מתעדכן כל הזמן
├── LOCAL-WORKFLOW.md      # הקובץ הזה - איך עובדים
│
├── agents/                # הוראות לסוכנים (5 agents)
│   ├── 00-orchestrator.md
│   ├── 01-trend-scanner.md
│   ├── 02-content-calendar.md
│   ├── 03-video-editor.md
│   └── 04-footage-analyzer.md
│
├── content/
│   ├── scripts/           # תסריטים (SCRIPTS.md = ספריה ראשית)
│   │   ├── SCRIPTS.md     # ← כל התסריטים במקום אחד
│   │   ├── 001-intro-ai-first.md
│   │   ├── FILMING_MASTER_LIST.md
│   │   └── SHOTS_TO_FILM.md
│   │
│   ├── raw/               # 📹 footage גולמי
│   │   └── inbox/         ← סרטונים חדשים כאן
│   │
│   ├── edited/            # סרטונים ערוכים + voiceovers + clips
│   │   ├── 001_intro_FINAL_v3.mp4  ← סרטון סופי
│   │   ├── 001_clips/              ← קליפים חתוכים
│   │   ├── 001_voiceover_v4.mp3    ← voiceover
│   │   └── ...
│   │
│   ├── catalog/           # קטלוג footage קיים
│   │   └── MASTER_CATALOG.md  ← 169 סרטונים ממופים
│   │
│   ├── voice_samples/     # דוגמאות קול
│   └── published/         # ארכיון מה שפורסם
│
├── פנמה/                  # footage פנמה (146 videos)
├── rew video/             # footage תאילנד (23 videos)
│
└── assets/
    ├── Profile images (3 versions)
    └── Brand materials
```

---

## ⚙️ Tools Pipeline

### הכלים שבאמת בשימוש:

| שלב | כלי | תפקיד | סטטוס |
|-----|-----|-------|-------|
| **מוח** | Claude | אסטרטגיה, תסריטים, עריכה, ניתוח | ✅ Primary |
| **Voiceover** | ElevenLabs | TTS עם voice clone | ✅ Premium |
| **עריכה** | FFmpeg + Remotion | חיתוך, הרכבה, קליפים | ✅ Active |
| **עריכה מהירה** | CapCut | עריכה מהפלאפון | ✅ Available |
| **תזמון** | getLate.dev | scheduling + publishing | ✅ Account active |
| **צילום** | iPhone | Camera | ✅ Ready |
| **פלטפורמה ראשית** | Instagram | Reels + Stories + Carousels | ✅ |
| **פלטפורמה משנית** | TikTok | Repurposed Reels | ✅ |

### לא צריך:
- ❌ n8n / Zapier / Make
- ❌ Premiere / DaVinci
- ❌ שום automation tool חיצוני

**Claude = האוטומציה.**

---

## 🔄 Video Production Pipeline

### איך מייצרים סרטון מ-0 עד פרסום:

```
1. SCRIPT      Claude כותב תסריט
     ↓
2. VOICEOVER   ElevenLabs מייצר MP3
     ↓
3. CLIPS       FFmpeg חותך footage מהקטלוג
     ↓
4. EDIT        Remotion/FFmpeg מרכיב הכל
     ↓
5. SUBTITLES   ElevenLabs Scribe → SRT
     ↓
6. FINAL       FFmpeg burn-in subtitles + music
     ↓
7. PUBLISH     getLate.dev → Instagram/TikTok
```

### Naming Convention:
```
[NUM]_[type]_[version].ext

Examples:
001_intro_FINAL_v3.mp4      # Final video
001_voiceover_v4.mp3         # Voiceover
001_subtitles.srt            # Subtitles
001_clips/                   # Cut clips folder
```

---

## 📱 Quick Commands

| פקודה | מה קורה |
|-------|---------|
| `מה הסטטוס?` | Brief מלא על מצב התוכן |
| `מה צריך לצלם?` | רשימת shots חסרים |
| `צילמתי סרטונים` | ניתוח החומר ב-inbox |
| `תן לי רעיונות` | 5-10 רעיונות לתוכן |
| `כתוב תסריט על X` | תסריט חדש |
| `תייצר voiceover` | ElevenLabs TTS |
| `תערוך סרטון` | FFmpeg/Remotion עריכה |
| `תזמן` | לוח זמנים + getLate.dev |
| `מה פורסם השבוע?` | סיכום פרסומים |
| `סיכום שבועי` | Analytics + insights |

---

## 🚨 Alerts System

| מצב | התראה |
|-----|-------|
| 🔴 פחות מ-2 ימים של תוכן | "דחוף! צריך לייצר תוכן היום" |
| 🟡 פחות מ-5 ימים | "כדאי לתכנן יום צילומים" |
| 🟢 7+ ימים | "מצוין! יש buffer טוב" |
| 📥 יש קבצים ב-inbox | "יש חומר חדש לניתוח" |

---

## 🎯 Weekly Rhythm

| יום | פעולה | זמן |
|-----|-------|-----|
| **ראשון** | "מה הסטטוס?" + תכנון שבוע | 15 דק |
| **שני-חמישי** | צילום כשיש זמן | גמיש |
| **שישי** | "סיכום שבועי" | 10 דק |

---

## 📍 Current Location: Koh Phangan, Thailand

### Filming Advantages:
- ☀️ אור טבעי מעולה כל השנה
- 🌴 רקעים טרופיים אותנטיים
- 🏝️ Vibe של חופש ובחירה - מתאים לברנד
- 🥊 Muay Thai content - תרבות מקומית
- 👨‍👩‍👧‍👦 חיי משפחה על האי

### Best Shooting Times:
- **Golden hour:** 06:00-07:30, 17:00-18:30
- **Shade:** 10:00-16:00 (חם מדי לשמש ישירה)
- **Night:** Good for tech/coding content with screen light

---

*Last Updated: February 6, 2026*
