# Recording Script - "Your First AI Assistant"

> **Total length:** ~30 minutes
> **Format:** Read-to-record (voiceover + screen recording)
> **Tone:** Casual, direct, like a friend explaining something over coffee
> **Note:** [Screen] = sections accompanied by screen recording. [Camera] = face to camera.

---

## Lesson 1: "Why You Need an AI Assistant" (4 minutes)

### [Camera - Face to camera]

Okay, before we start - I want to show you something.

This morning, I woke up, made my coffee, and while my kids were eating breakfast - I got a personalized news podcast. I didn't open any website. I didn't scroll any app. An AI assistant I built prepared it for me. Every morning. Automatically.

That same assistant? It also told me what my workout is today, what to buy at the store for dinner, and which tasks are the most urgent in my business.

All of that? Without me touching a thing.

And I'm not a programmer. I'm a guy who built a solar energy business, served in a special forces unit in the Israeli military, and now lives with my family on an island in Thailand - Koh Phangan.

If I can do this - you can too. And in the next 30 minutes, you're going to build your first AI assistant.

### [Camera]

So what even IS an "AI assistant"?

Think about it like this: you have an employee. They're available 24 hours a day. They don't complain. They don't forget. They don't need vacation. And they're great at... well, almost anything that involves a computer.

Writing? Excellent. Research? Excellent. Data analysis? Excellent. Organization? Excellent. Meal planning, workouts, schedules, meeting summaries? Ex-cel-lent.

And here's the most important part - they don't need you to have any technical skills. You talk to them. In plain English. Normal words. And they do it.

### [Camera]

Now, there are a lot of AI tools out there. ChatGPT, Gemini, Copilot... I chose to work with Claude, made by a company called Anthropic. And there's a reason for that.

Claude understands context better than anything else I've used. When you give it information about who you are, what your business does, what your goals are - it remembers all of that and works WITH you over time. It doesn't just answer questions. It genuinely helps.

And in the next 30 minutes, I'm going to teach you:
1. How to install Claude on your computer
2. How to talk to it properly so it gives you precise answers
3. And how to build your first AI assistant - one that will save you at least an hour a day

Let's go.

---

## Lesson 2: "Installing Claude on Your Computer" (7 minutes)

### [Camera]

Okay, lesson 2 - installation. This takes 5 minutes. Nothing to be scared of.

There are two ways to use Claude:
1. Through the website - claude.ai - in your browser, no installation needed
2. Through Claude Code - directly on your computer, through the terminal

We're going to set up both. Because the website is great for quick conversations, and Claude Code? That's where the real magic happens.

### Part A: The Website (2 minutes)

### [Screen - showing browser]

First, the website. Go to claude.ai.

Click "Sign Up". You can sign up with Google, with email - whatever's easiest. Go ahead and do it now, I'll wait.

Great. Once you're in - you see the chat. That's Claude. You can talk to it. Type "Hey, how are you?" and you'll see it responds. Perfect.

The free version works great for getting started. If you want more messages per day and a more powerful model, there's Pro for $20 a month. But for now? Free is enough.

### Part B: Claude Code (5 minutes)

### [Camera]

Now - Claude Code. And this is the part that might sound intimidating. "Terminal"? "Command line"?

Relax. I'm going to show you exactly what to click. Step by step.

### [Screen - Mac]

**For Mac users:**

Step 1: Open Terminal. Where is it? Press Command + Space, type "Terminal", hit Enter. That's it - a dark window opens. Don't panic, this is normal.

Step 2: Install Node.js. This is software that Claude Code needs to run. Copy this command and paste it into the terminal:

```
curl -fsSL https://fnm.vercel.app/install | bash && fnm install --lts
```

Hit Enter. Wait for it to finish. Takes about 30 seconds.

Step 3: Install Claude Code itself:

```
npm install -g @anthropic-ai/claude-code
```

Enter. Wait. Another 30 seconds.

Step 4: Launch it:

```
claude
```

Boom. Claude Code is running on your computer. It'll ask you to sign in - click the link, authorize, and you're done.

### [Screen - Windows]

**For Windows users:**

Step 1: Open PowerShell. Click the Start button, type "PowerShell", hit Enter.

Step 2: Install Node.js. Go to nodejs.org, download the Windows version, install it like any other program - Next, Next, Finish.

Step 3: Close PowerShell and reopen it. Then type:

```
npm install -g @anthropic-ai/claude-code
```

Enter. Wait.

Step 4:

```
claude
```

And sign in.

### [Camera]

Great. If you made it here - you have Claude on your computer. And now comes the fun part.

---

## Lesson 3: "How to Talk to Claude (and Get Precise Answers)" (6 minutes)

### [Camera]

Most people use AI like Google. Ask a question, get an answer, move on. And that's wasting 90% of the potential.

Claude is not a search engine. It's an assistant. And like any good assistant - the more it knows about you, the better it helps.

So let's learn two things:
1. How to ask properly (prompting)
2. How to let Claude get to know you (CLAUDE.md)

### Part A: Asking Properly (3 minutes)

### [Screen - claude.ai open]

Here's the most important rule: **Give context.**

Bad example:
> "Write me an email"

Good example:
> "I own a small e-commerce business selling handmade candles. I need to write an email to a supplier in China who's 3 weeks late on a shipment. The tone should be professional but firm."

See the difference? In the first example, Claude is guessing. In the second - it knows exactly what you need.

### [Screen]

Here's the formula. Every time you ask Claude for something, give it:

1. **Who you are** - "I run a small business..." / "I manage a team of..." / "I'm a freelance..."
2. **What you need** - "I need..." / "Help me with..." / "Prepare me..."
3. **How you want it** - "In a professional tone" / "In simple language" / "In bullet points"
4. **Extra context** - "My customer is..." / "The budget is..." / "The deadline is..."

The more context you give - the more precise the answer. Always.

### [Screen - showing live example]

Let's try it. I'm writing to Claude:

> "I own a small business with 3 employees. I'm spending an hour a day answering customer emails. Most of them ask the same 10 questions. Help me build an FAQ document I can send to customers instead of answering from scratch every time. My business is in [your field]."

Look at what it returns... Incredible, right? A clean, professional FAQ, tailored to your business. Now copy-paste it, tweak it a bit, and you have a document that would've taken you two hours to write. Done in 30 seconds.

### Part B: CLAUDE.md - Claude's Memory (3 minutes)

### [Camera]

Now - the trick nobody teaches.

CLAUDE.md. It's a simple text file you put on your computer. And every time Claude Code starts up - it reads it. It's like your resume, but for Claude. It knows who you are, what your business does, what your goals are, what you like and what you don't.

### [Screen - opening a text file]

Let's create one right now.

Open any text editor. Notes, Notepad, whatever you have. And save a file called CLAUDE.md in your main folder.

Inside, write:

```markdown
# Who I Am
- Name: [Your name]
- Occupation: [What you do]
- Business: [Short description of your business]

# What Matters to Me
- [Thing 1]
- [Thing 2]
- [Thing 3]

# How I Like My Answers
- In simple, clear language
- With practical examples
- In bullet points when possible

# My Goals
- [Goal 1]
- [Goal 2]
```

### [Camera]

That's it. Simple as that. Filled it in? Great.

From now on, every time you open Claude Code in that folder - it already knows who you are. No need to explain yourself over and over. It already "knows" you.

And that's the difference between using AI... and having a **personal assistant** that knows you.

---

## Lesson 4: "Build Your First Assistant" (10 minutes)

### [Camera]

Okay, we made it to the best part. Now we build.

I'm going to show you 3 types of assistants. Pick one - the one that's most relevant to you right now - and we'll build it together. By the end of this lesson, you'll have a working AI assistant.

The three options:
- **Morning Assistant** - prepares your news summary + daily schedule + tasks
- **Fitness Assistant** - workout planning + nutrition + tracking
- **Business Assistant** - task management + writing emails + organization

Pick one. Got it? Good. I'll walk through all three, and you follow along with the one you chose.

### Option A: Morning Assistant (3 minutes)

### [Screen - Claude Code open]

Open Claude Code. Type:

```
claude
```

And now, talk to it. Like this:

> "I want you to be my morning assistant. Every morning I want you to prepare:
>
> 1. A summary of the 5 most important headlines from my country and the world
> 2. The weather in [your city]
> 3. A list of my 3 most important tasks for today
> 4. A reminder of one thing I said I wanted to do this week
>
> Present everything in a clean, short format."

### [Screen - showing the response]

Look at what it did. Boom. News summary, weather, tasks - all organized, all clean.

Now, here's the trick: you can save this instruction. Every morning just open Claude Code and say: "Good morning, give me my daily summary" - and it already knows what to do, because your CLAUDE.md defines it.

Let's add this to your CLAUDE.md:

```markdown
# Morning Routine
Every morning when I say "good morning" or "morning summary":
- 5 top news headlines (national and world)
- Weather in [city]
- 3 main tasks for today
- Weekly reminder
```

Saved? You now have a morning assistant.

### Option B: Fitness Assistant (3 minutes)

### [Screen - Claude Code open]

For the fitness assistant, write:

> "I want you to be my personal trainer. Here's my info:
> - Height: [X] cm / [X] ft
> - Weight: [X] kg / [X] lbs
> - Goal: [lose weight / build muscle / general fitness / get stronger]
> - Experience: [beginner / intermediate / advanced]
> - Equipment available: [gym / home / dumbbells / nothing]
> - Time for training: [X] minutes, [X] times per week
>
> Build me a workout plan for the week, and tell me what to eat today."

### [Screen - showing response]

Look at that - a full workout plan. Personalized. With sets, reps, rest times. And a meal plan for the day.

Add to your CLAUDE.md:

```markdown
# Fitness & Nutrition
- Height: [X], Weight: [X], Goal: [X]
- Training [X] times per week, [X] minutes
- Equipment: [what you have]
- Allergies/food preferences: [X]
When I say "workout" - give me today's workout
When I say "what should I eat" - give me a tailored meal plan
```

### Option C: Business Assistant (4 minutes)

### [Screen - Claude Code open]

The business assistant - this one saves the most time. Write:

> "I want you to be my business assistant. Here's the info about my business:
> - Industry: [what your business does]
> - Size: [how many employees / solo]
> - Customers: [who your customers are]
> - Main challenge: [what bugs you most about your business]
>
> Now, help me with the following:
> [Pick one]
> - Write a professional email to [who]
> - Summarize this meeting from these notes: [paste summary]
> - Organize my task list for the week by priority
> - Analyze my sales from last month
> - Prepare a quote for [project]"

### [Screen - showing response]

See that? A professional email. Tailored. In your tone. In 10 seconds.

Now add to your CLAUDE.md:

```markdown
# My Business
- Industry: [X]
- Customers: [X]
- Services: [X]
- Communication tone: [professional / friendly / formal]

When I say "email" - help me write a business email
When I say "tasks" - organize my priorities
When I say "quote" - help me build a proposal
```

### [Camera]

Hear that? Three assistants. You picked one. You built it. It works.

And now the most important point: **Use it tomorrow morning.** Not next week. Tomorrow. Open Claude, say "good morning" or "what's my workout" or "write me an email" - and see how it feels.

Because the moment you realize you saved 20 minutes on something that would've taken you an hour? You're hooked. In the best way.

---

## Lesson 5: "Where to Go From Here - The Full Map" (3 minutes)

### [Camera]

Last one. And maybe the most important.

You built one assistant. Great. But this is just the beginning.

What we just did? It's like you got your first smartphone and opened one app. Now imagine what happens when you add more.

### [Screen - showing visual list]

Here's what you can build:

**Personal Assistants:**
- News assistant - personalized podcast every morning
- Fitness assistant - workouts + nutrition + tracking
- Nutrition assistant - weekly meal plan + grocery list
- Learning assistant - summarizes books, articles, podcasts
- Travel assistant - plans customized trips

**Business Assistants:**
- Email assistant - writes, summarizes, organizes
- Management assistant - tasks, priorities, tracking
- Sales assistant - quotes, follow-ups, CRM
- Content assistant - posts, stories, ideas
- Customer assistant - FAQ, responses, support

**Family Assistants:**
- Calendar assistant - organizes the family's week
- Events assistant - plans birthdays, gatherings
- Home assistant - household management, maintenance

### [Camera]

Every assistant you add? Another 30-60 minutes saved per day. Three assistants? You get 2 hours back. Five? You get half your day back.

And you're not working harder. You're working smarter. Because there's someone handling the things you don't need to do yourself.

### [Camera - Closing]

Look, I know what's going through your head right now.

"Damn, this actually works. Why didn't I start sooner?"

And you're right. Most people will sit on the fence for another year. You? You already started. You already built something. You already saved time.

I'm Kaniel. I rebuilt my entire life around AI assistants. From Koh Phangan, Thailand, with my wife and our three kids. And if I - after 400 days of reserve military duty, after losing my brother, after my business was in survival mode - if I managed to build this? You absolutely can.

The next step? Use the assistant you built. Tomorrow morning. And see what happens.

And if you want to go further - I have a 4-week bootcamp where I personally guide you through building a complete system of AI assistants. Link below.

Thanks for being here. Now go build.

---

## Technical Summary

| Lesson | Topic | Length | Format |
|--------|-------|--------|--------|
| 1 | Why you need an AI assistant | 4 min | Camera |
| 2 | Installing Claude | 7 min | Camera + Screen |
| 3 | How to talk to Claude | 6 min | Camera + Screen |
| 4 | Build your first assistant | 10 min | Camera + Screen |
| 5 | Where to go from here | 3 min | Camera + Screen |
| **Total** | | **30 min** | |

## Recording Instructions

### Equipment:
- iPhone 16/17 (camera)
- Computer with screen recording (QuickTime / OBS)
- Microphone (even the iPhone mic works)

### How to record:
1. **Camera sections:** Film yourself talking. Clean background or Koh Phangan scenery. Natural light.
2. **Screen sections:** Record your screen with QuickTime (Mac) or OBS (Windows). Read the text while performing the actions on screen.
3. **Editing:** Cut both parts together in CapCut or Remotion.

### Tone:
- Casual. Like you're explaining something to a friend.
- Don't read - **talk**. If you need to, read it once and then speak from memory.
- If you get stuck - restart the sentence. You edit later.
- Smile. Be energetic. You're in Koh Phangan, life is good.

### Screen Recording Tips:
- Increase font size to 150% so it's visible on mobile
- Clean your desktop before recording
- Use a clean Claude window (no other tabs)
- When typing - type slowly so viewers can see what you're writing
