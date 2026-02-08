# Your First AI Assistant - Recording Script

---

## Lesson 1 - Why You Need an AI Assistant

Okay, before we start, I want to show you something.

This morning, I woke up, made my coffee, and while my kids were eating breakfast, I got a personalized news podcast. I didn't go to any website. I didn't open any app. An AI assistant that I built prepared it for me. Every morning. Automatically.

That same assistant? It also told me what my workout is today, what to buy at the store for dinner, and which tasks are the most urgent in my business.

All of that? Without me touching a thing.

And I'm not a programmer. I'm a guy who built a solar energy business, served in a special forces unit in the Israeli military, and now lives with my family on an island in Thailand called Koh Phangan.

If I can do this, you can too. And in the next thirty minutes, you're going to build your first AI assistant.

So what even is an AI assistant?

Think about it like this. You have an employee. They're available twenty four hours a day. They don't complain. They don't forget. They don't need vacation. And they're great at, well, almost anything that involves a computer.

Writing? Excellent. Research? Excellent. Data analysis? Excellent. Organization? Excellent. Meal planning, workouts, schedules, meeting summaries? Ex. Cell. Ent.

And here's the most important part. They don't need you to have any technical skills. You talk to them. In plain English. Normal words. And they do it.

Now, there are a lot of AI tools out there. ChatGPT, Gemini, Copilot. I chose to work with Claude, made by a company called Anthropic. And there's a reason for that.

Claude understands context better than anything else I've used. When you give it information about who you are, what your business does, what your goals are, it remembers all of that and works with you over time. It doesn't just answer questions. It genuinely helps.

And in the next thirty minutes, I'm going to teach you three things. First, how to install Claude on your computer. Second, how to talk to it properly so it gives you precise answers. And third, how to build your first AI assistant, one that will save you at least an hour a day.

Let's go.

---

## Lesson 2 - Installing Claude on Your Computer

Okay, lesson two. Installation. This takes five minutes. Nothing to be scared of.

There are two ways to use Claude. The first, through the website, claude dot ai, in your browser, no installation needed. The second, through Claude Code, directly on your computer, through the terminal.

We're going to set up both. Because the website is great for quick conversations, and Claude Code? That's where the real magic happens.

Let's start with the website.

Go to claude dot ai. Click Sign Up. You can sign up with Google, with email, whatever's easiest. Go ahead and do it now, I'll wait.

Great. Once you're in, you see the chat. That's Claude. You can talk to it. Type "Hey, how are you?" and you'll see it responds. Perfect.

The free version works great for getting started. If you want more messages per day and a more powerful model, there's Pro for twenty dollars a month. But for now? Free is enough.

Now, Claude Code. And this is the part that might sound intimidating. Terminal? Command line?

Relax. I'm going to show you exactly what to click. Step by step.

For Mac users. Step one, open Terminal. Where is it? Press Command plus Space, type Terminal, hit Enter. That's it, a dark window opens. Don't panic, this is normal.

Step two, install Node dot js. This is software that Claude Code needs to run. Copy the command that appears on screen and paste it into the terminal. Hit Enter. Wait for it to finish. Takes about thirty seconds.

Step three, install Claude Code itself. Again, copy the command from the screen. npm install minus g at anthropic slash ai slash claude code. Enter. Wait. Another thirty seconds.

Step four, type claude and hit Enter. Boom. Claude Code is running on your computer. It'll ask you to sign in. Click the link, authorize, and you're done.

For Windows users. Step one, open PowerShell. Click the Start button, type PowerShell, hit Enter.

Step two, install Node dot js. Go to nodejs dot org, download the Windows version, install it like any other program. Next, Next, Finish.

Step three, close PowerShell and reopen it. Then paste the same command. npm install minus g at anthropic slash ai slash claude code. Enter. Wait.

Step four, type claude. And sign in.

Great. If you made it here, you have Claude on your computer. And now comes the fun part.

---

## Lesson 3 - How to Talk to Claude and Get Precise Answers

Most people use AI like Google. Ask a question, get an answer, move on. And that's wasting ninety percent of the potential.

Claude is not a search engine. It's an assistant. And like any good assistant, the more it knows about you, the better it helps.

So let's learn two things. How to ask properly, and how to let Claude get to know you.

Let's start with asking properly.

Here's the most important rule. Give context.

Bad example: "Write me an email." That's it. Just like that. Claude doesn't know who you are, who to write to, what tone, what about.

Now a good example: "I own a small e-commerce business selling handmade candles. I need to write an email to a supplier in China who's three weeks late on a shipment. The tone should be professional but firm."

See the difference? In the first example, Claude is guessing. In the second, it knows exactly what you need.

Here's the formula. Every time you ask Claude for something, give it four things.

One, who you are. I run a small business, I manage a team of, I'm a freelance.

Two, what you need. I need, help me with, prepare me.

Three, how you want it. In a professional tone, in simple language, in bullet points.

And four, extra context. My customer is, the budget is, the deadline is.

The more context you give, the more precise the answer. Always.

Let's try it. I'm writing to Claude: "I own a small business with three employees. I'm spending an hour a day answering customer emails. Most of them ask the same ten questions. Help me build an FAQ document I can send to customers instead of answering from scratch every time."

Look at what it returns. Incredible, right? A clean, professional FAQ, tailored to your business. Now copy-paste it, tweak it a bit, and you have a document that would've taken you two hours to write. Done in thirty seconds.

Now, the trick nobody teaches. CLAUDE dot md.

It's a simple text file you put on your computer. And every time Claude Code starts up, it reads it. It's like your resume, but for Claude. It knows who you are, what your business does, what your goals are, what you like and what you don't.

Let's create one right now.

Open any text editor. Notes, Notepad, whatever you have. And save a file called CLAUDE dot md in your main folder.

Inside, write:

Who I am. Your name, your occupation, a short description of your business.

What matters to me. List two or three things that are important to you.

How I like my answers. In simple, clear language. With practical examples. In bullet points when possible.

My goals. What you want to achieve.

That's it. Simple as that. Filled it in? Great.

From now on, every time you open Claude Code in that folder, it already knows who you are. No need to explain yourself over and over. It already knows you.

And that's the difference between using AI and having a personal assistant that knows you.

---

## Lesson 4 - Build Your First Assistant

Okay, we made it to the best part. Now we build.

I'm going to show you three types of assistants. Pick one, the one that's most relevant to you right now, and we'll build it together. By the end of this lesson, you'll have a working AI assistant.

The three options. A morning assistant, that prepares your news summary and daily tasks. A fitness assistant, that plans your workouts and nutrition. And a business assistant, that manages your tasks and writes your emails.

Pick one. Got it? Good. I'll walk through all three, and you follow along with the one you chose.

Let's start with the morning assistant.

Open Claude Code, type claude, and now talk to it. Like this:

"I want you to be my morning assistant. Every morning I want you to prepare a summary of the five most important headlines from my country and the world, the weather in my city, a list of my three most important tasks for today, and a reminder of one thing I said I wanted to do this week. Present everything in a clean, short format."

Look at what it did. Boom. News summary, weather, tasks. All organized, all clean.

Now, here's the trick. You can save this instruction inside your CLAUDE dot md file. Just add a section for morning routine, and write "Every morning when I say good morning, prepare me news headlines, weather, my top three tasks, and a weekly reminder."

Saved? You now have a morning assistant.

Now, the fitness assistant.

Write to Claude: "I want you to be my personal trainer. Here's my info." And then give it your height, weight, goal, experience level, what equipment you have available, and how much time you have for training. Then ask: "Build me a workout plan for the week, and tell me what to eat today."

Look at that. A full workout plan. Personalized. With sets, reps, rest times. And a meal plan for the day.

Add the details to your CLAUDE dot md. Height, weight, goal, how many times per week, equipment, food preferences. And write "When I say workout, give me today's workout. When I say what should I eat, give me a tailored meal plan."

And now, the business assistant. This one saves the most time.

Write to Claude: "I want you to be my business assistant." And give it your industry, business size, who your customers are, and what your main challenge is. Then ask it to do something specific. Write me a professional email, summarize a meeting, organize my task list for the week by priority, analyze my sales, or prepare a quote for a project. Pick one.

See that? A professional email. Tailored. In your tone. In ten seconds.

Add to your CLAUDE dot md your business details, and write "When I say email, help me write a business email. When I say tasks, organize my priorities. When I say quote, help me build a proposal."

Hear that? Three assistants. You picked one. You built it. It works.

And now the most important point. Use it tomorrow morning. Not next week. Tomorrow. Open Claude, say "good morning" or "what's my workout" or "write me an email," and see how it feels.

Because the moment you realize you saved twenty minutes on something that would've taken you an hour? You're hooked. In the best way.

---

## Lesson 5 - Where to Go From Here

Last one. And maybe the most important.

You built one assistant. Great. But this is just the beginning.

What we just did? It's like you got your first smartphone and opened one app. Now imagine what happens when you add more.

Here's what you can build.

Personal assistants. A news assistant that creates a personalized podcast every morning. A fitness assistant for workouts, nutrition, and tracking. A nutrition assistant with a weekly meal plan and grocery list. A learning assistant that summarizes books, articles, and podcasts. A travel assistant that plans customized trips.

Business assistants. An email assistant that writes, summarizes, and organizes. A management assistant for tasks, priorities, and tracking. A sales assistant for quotes, follow-ups, and CRM. A content assistant for posts, stories, and ideas. A customer assistant for FAQs, responses, and support.

Family assistants. A calendar assistant that organizes the family's week. An events assistant that plans birthdays and gatherings. A home assistant for household management and maintenance.

Every assistant you add? Another thirty to sixty minutes saved per day. Three assistants? You get two hours back. Five? You get half your day back.

And you're not working harder. You're working smarter. Because there's someone handling the things you don't need to do yourself.

Look, I know what's going through your head right now. "Damn, this actually works. Why didn't I start sooner?"

And you're right. Most people will sit on the fence for another year. You? You already started. You already built something. You already saved time.

I'm Kaniel. I rebuilt my entire life around AI assistants. From Koh Phangan, Thailand, with my wife and our three kids. And if I, after four hundred days of reserve military duty, after losing my brother, after my business was in survival mode, if I managed to build this? You absolutely can.

The next step? Use the assistant you built. Tomorrow morning. And see what happens.

And if you want to go further, I have a four-week bootcamp where I personally guide you through building a complete system of AI assistants. The link is below.

Thanks for being here. Now go build.
