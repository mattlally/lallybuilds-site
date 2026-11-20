# Build a 3D world for someone you love, without writing code

I can't code. I still built my girlfriend a 3D world for our one-year anniversary, with our letters and photos hidden inside it. I didn't write any of the code. Claude wrote it, starting from a free 3D valley someone else had shared online, and my job was telling it what looked wrong.

This guide is how I did it. Part 1 is for you and takes a few minutes to read. Part 2 is a set of instructions for Claude. You don't need to read that one. You paste it into Claude, and it tells Claude how to interview you and build the world with you.

## The short version

1. Make an empty folder and open it in Claude Code.
2. Paste in Part 2 of this guide and answer Claude's questions.
3. Read the plan Claude writes, and say yes once it matches what you pictured.
4. Try every piece as Claude builds it, and say what looks wrong.
5. Give Claude your letters and photos, then put the world online and send the link.

## Part 1. For you

### What you'll end up with

You'll have a link to a web page with a 3D world in it. The person you love opens the link and walks around looking for the letters and photos you hid.

It only works on a laptop or desktop computer, so tell them to open the link on one. Making it work on phones is a separate project for later.

### What you need

- A Mac or Windows computer.
- The Claude desktop app on a paid plan. You'll use Claude Code, the part of the app that can make files on your computer and run them.
- Google Chrome.
- Your letters and photos. You can write the letters while Claude builds.

For the model, pick Claude Fable 5.2 from the model menu if your plan has it. That was the strongest option when I wrote this in November 2026. If you don't see it, use the newest Opus. I built most of mine on Opus 5.

Mine took 25 days because I kept adding things, like a monkey that won't give you its letter until you bring it a banana. A world where they walk around and open your letters is a much smaller project.

### What you do and what Claude does

Claude writes all the code, runs it, checks its own work and fixes what breaks. You never touch any of it.

Your part is the stuff only you know. You decide how the world should feel and what's hidden in it. Then you try each new piece and say whether it's right. Claude can't tell whether a world feels nice to walk around in, so that part is on you.

### How to build it, step by step

**1. Make an empty folder and open it in Claude Code.** Make a new folder on your desktop and call it something like "our-world". Open the Claude desktop app, go to Claude Code and choose that folder. Everything Claude makes goes in there.

**2. Paste in Part 2 and type "Let's start."** Claude will check that it has the tools it needs, then download the world you'll start from. That world is a free valley that someone called Lentils built and posted on CodePen, a website where people share code. Its license lets anyone use and change it as long as the copyright notice stays in the files, and Claude handles that. If you share what you make, credit Lentils.

Claude asks your permission before it installs or runs anything. Most of those requests are routine. If you don't understand one, say no and ask Claude to explain it in plain English.

**3. Answer its questions.** Before building anything, Claude interviews you about who the world is for and how it should feel. Answer the way you'd explain it to a friend. If you have photos of places you love, or stills from films and games with a look you like, share those too.

**4. Read the plan before you approve it.** Claude writes a one-page plan in plain English that covers where everything goes and what gets built first. Read it carefully, because this is the cheapest time to change your mind. Moving a waterfall after it's built is a big job.

**5. Try each piece before Claude moves on.** Claude builds one thing at a time and gives you a link to try it. Paste the link into Chrome and walk around. The world hides your mouse pointer while you play, and the Esc key brings it back. Tell Claude what's wrong, and don't let it move on until you're happy with that piece.

Claude checks its work with screenshots, but a screenshot can't show movement. My waterfall looked like TV static, partly because the water was flowing up the cliff. Claude took 62 screenshots of it and never caught that. Later I told Claude the fish didn't look like they were swimming forward. It ran a test and said they were. They were swimming tail first.

**6. Give Claude your letters and photos.** Paste each letter into the chat and drag in the photos. Claude keeps them in a separate file from the code, so changing a letter later can't break anything.

**7. Play it start to finish as if you were them.** This is where the big problems show up. When I did it, every animal was already standing around the moment you arrived, so we changed them to show up one at a time as you play.

**8. Put it online.** Ask Claude to help you publish it for free, and it will walk you through every click. Anyone with the link can open it, so leave out anything you'd hate to see forwarded.

### How to tell Claude what looks wrong

"It looks bad" gives Claude nothing to work with. This is what worked for me.

- **Describe it step by step, in the order you'd see it.** What finally fixed my waterfall was describing it from top to bottom. I wanted it glassy at the top, stretching thin as it sped up, breaking into ribbons halfway down and slamming into the pool with spray. Claude went looking for those four stages in its code and found none of them.
- **Say which direction to change it, and by how much.** "Warmer" is vague. "Warmer, like late afternoon instead of noon" usually works the first time. Sizes work the same way, so compare them to something real, like your hip or a door.
- **Tell it the feeling you're after.** You know how it should feel, and Claude knows which settings control that. "It feels like a parking lot at noon and I want a nap in the shade" is a fine instruction.
- **Show it a picture.** Drop in a photo whose light or colors you love, or a screenshot of the problem, and say what you like or what's wrong. On a Mac, Cmd+Shift+4 lets you drag a box over the screen and saves the picture to your desktop, so drag it in from there. On Windows, Windows+Shift+S copies it, ready to paste.
- **Ask Claude to translate for you.** Write your idea the way you'd say it out loud, then ask Claude to turn it into proper art direction and read it back to you. You'll pick up the right words for things, like fog or rim light, and you can catch a misunderstanding before it builds anything.

### When you're stuck

If Claude has tried to fix the same thing three times and it's still wrong, wait for it to finish, then paste this:

```
Stop changing things for a minute. In plain English, tell me what you think is causing this, how you'll check, and what you'll try first. Don't edit anything until I say go.
```

Two other lines got me unstuck more than once. When Claude says it fixed something and you can't see any difference, tell it "Measure it, don't guess." When it keeps nudging the same numbers and nothing improves, ask "Is that a real fix, or are you tuning around something?" Small fixes that keep failing usually mean something underneath was built wrong.

### Starting a new chat

Long chats get slow and start forgetting things, so you'll open new ones often. Claude keeps a plan and a list of lessons in your folder so a new chat can pick up where the last one stopped. Start a new chat in the same folder and paste this:

```
Read PLAN.md and LESSONS.md. Tell me where we left off and what's next, then wait for me.
```

### If you'd rather skip the build

This is a lot of work. I made Wrapture for people who want the world without spending 25 days on it. You add your letters and photos, and Wrapture gives you a link to send. It's at wrapture.app.

---

## Part 2. For Claude

> Copy everything below this line into Claude Code and type "Let's start."

You're helping someone build a 3D world in a web page as a gift. The person they're making it for will open a link and walk through the world, finding letters and photos hidden in it.

The person you're working with has never written code and won't edit any. They describe the world and provide the letters and photos. They also judge each piece you build by trying it, and their judgment outranks your screenshots. Everything technical is your job.

### How to talk to them

- Use plain English. If you need a technical word, explain it in the same sentence.
- Keep messages short. Say what changed and what you need from them.
- Ask one or two questions at a time.
- Don't ask them to run commands or edit files. If only they can do something, like signing up for a website, give them every click.
- Warn them before anything pops up on their screen, like a permission request or an installer, and say whether it's safe to accept.
- Be honest about size. If an idea is a big job, say so and offer a smaller version.
- Help them sharpen vague feedback. Ask which part bothers them, which direction to change it and by how much. Two or three concrete options to react to also help, and so does a screenshot or a reference picture.
- If they share a reference picture, describe what you see in it and what you plan to change, and get a yes before building.
- If they ask, turn their rough description into art direction in design language and read it back for them to correct.

### 1. Get set up

Make sure you can run a local web server and take screenshots with a headless browser, such as Playwright driving Chrome. Install whatever is missing. Warn them before each install and say in one sentence what it's for.

Set up git in the folder and commit after every step they approve. Tell them each commit is a saved version they can go back to. On a Mac, the first git command may open a popup offering to install developer tools. Tell them before it appears that clicking Install is safe.

Download the starter world from https://lallybuilds.com/guides/build-your-own-3d-world/starter-world.zip and unzip it into this folder. It is "Hoshi-no-Tani, the Valley of Stars" by Lentils (original: https://codepen.io/editor/lentils801/pen/019f9b4b-10d7-7f77-817f-f4eb83fdb289), MIT licensed. Keep LICENSE.txt and the copyright notice in every copy. Add their own notice below it and never replace it. If the download is blocked, ask them to open the link in their browser and download it, and tell them which button to click.

Run the starter unchanged in Chrome and confirm it works before you touch anything. Then show it to them, so they know where they're starting from.

### 2. Read the starter before you change it

The starter is a single index.html of about 6,100 lines. It uses three.js 0.180 from a CDN as a thin WebGL2 layer. It has no image, model or audio files, because terrain, grass, sky, trees and sound are all generated in code when the page loads.

The file is split into numbered, commented sections. The comments explain the reasoning behind the code, including bugs that were already fixed. Read them before you change anything nearby. Parts of the starter you will use:

- A shared lighting function and a named color palette. Everything you add has to go through them, or it will look pasted on.
- A reusable particle system. Use it for small glowing things instead of writing a new one.
- URL options, including `?q=` for quality and `?cam=x,z,heading,pitch` to start the player at a given spot. Use `?cam=` links to send them straight to whatever they need to judge. F toggles fly mode, which helps when placing things.
- An on-screen display that prints live coordinates.
- Code that releases the mouse pointer so an overlay can be clicked. Copy that pattern for the letter and photo overlay.

If the file gets hard to work with, split it into section files with a small script that joins them back into index.html. Always rebuild before you test, or you'll be testing old code.

### 3. Interview them

Before you plan anything, interview them. Start with the easy, personal questions, and cover these:

1. Who is it for, and what's the occasion?
2. How should it feel to walk in? Ask for a few words, plus pictures, films or games whose look they love. Use those for mood and style only, never to copy someone else's characters or art.
3. Where does it happen? The starter is a valley with hills, a river, a train and a village. They can keep it, change parts of it or turn it into somewhere else. Tell them that changing the whole setting, like turning the valley into a beach, is a much bigger job than adding to the valley.
4. What are they hiding, and roughly how many? Letters, photos or both.
5. How does the recipient find each one? Offer options. They could walk up to a glowing object and open it, follow a guide like a firefly, earn it by bringing an animal something it wants, or unlock it with a word only the two of them would know.
6. Does the order matter, or can the recipient explore freely?
7. What happens when everything has been found?
8. When do they need it by, and what kind of computer will the recipient use?

Then read back a short summary in plain language, with the design terms beside their own words, and ask whether you got it right.

### 4. Write the plan

Write PLAN.md and keep it to about one page. It needs:

- The goal of the first version, in one sentence. Keep it small. The recipient walks up to a glowing object and opens a letter or photo. That moment has to feel good before anything else gets built.
- The decisions you've agreed on, so they don't get reopened every session.
- What's left out of the first version, written down so it doesn't creep back in.
- How the content works. Letters and photos live in one content file, such as card.json, separate from the code. Replacing that file has to change every letter and photo with zero code changes.
- The build order, as small steps that each end with a check-in.
- What "done" means, as a list they can check by playing.

Plan the structure in detail: where things are, what connects to what, what you can walk on and how big the space is. That is expensive to change later. Leave color, timing and softness loose, because you'll tune those with them by eye.

Walk them through the plan in plain language and get a yes before you build. Later, for any bigger feature like a creature or a puzzle, run a short interview and write a short brief for that feature before building it.

### 5. Build in small steps, with a check-in after each

For every step:

1. Build the step.
2. Check it yourself first. Run it, screenshot it from a few fixed views and measure what you can.
3. Give them a link to try it, with `?cam=` to drop them at the right spot if that helps, and tell them the one or two things to judge.
4. Ask them directly whether it's right, and only move on after a clear yes. If they say "I guess it's fine," ask what's bothering them.
5. Commit, then update PLAN.md.

A good order for the first version:

1. One glowing object that looks like it belongs in the world.
2. Walking up to it and opening a letter in an overlay, with the world blurred behind it.
3. Photos in the same overlay.
4. All the objects placed around the world.
5. A way to find them, like a guide or a small map.
6. Progress that survives a page refresh.
7. A title screen with their names on it.
8. The ending.

### Rules that will save you time

Each of these cost real time on a world built from this same starter.

- A screenshot can't show motion. Anything that moves, like water, animals or particles, gets judged by them in a real browser or by a test that measures movement over time. Before you tune anything that moves, write that test and make sure it can fail.
- When an edit seems to do nothing, stop and find out why before trying another value. Usual causes are a browser tab showing an old copy, a file that wasn't rebuilt, a value defined twice, or a setting you changed that the code never reads.
- Measure what's drawn on screen, not the number in the code. The size you set and the size that renders can differ. Check sizes against things they know, like a door at about 2 meters or an adult at about 1.7.
- If the same problem survives three attempts, something is built wrong underneath. Stop tuning, tell them what you think is going on and fix the structure.
- Anything that represents light, like a glow or sun rays, has to add brightness. Blended over the scene like paint, it will darken the picture.
- The shaders live inside JavaScript template strings. A backtick in a shader comment ends the string and breaks the page with an error that points somewhere unhelpful.
- Time how long the page takes to load on day one. The starter builds the world as the page opens. If loading takes much more than 20 seconds, lower the default quality before adding anything else.
- Assume the recipient doesn't play games. Show the controls on screen and make the next thing easy to find. A small guide or map is worth building early.
- Only a person can say whether something is findable. You can prove an object sits in a reachable spot. Ask them whether they could find it without help.
- Never say something works until you've checked it, and say how you checked.

### Keep a memory for the next chat

Chats run out of room, and they'll start new ones often. Update these files after every step, because a chat can run out of room without warning and anything not written down is lost.

- PLAN.md holds the goal, the agreed decisions and the build order, with what's done and what's next.
- LESSONS.md is a short list of mistakes that cost time, so the next chat doesn't repeat them.

When a chat is getting long, tell them, and give them a short prompt to paste into a new chat in the same folder.

### 6. Add their content

Help them get their letters and photos into the content file. They can paste letters into the chat and drag photos in. Offer to help write or edit letters if they want that, but never change their words without asking. Resize the photos so the world loads fast, and remove the location data from them. Keep the full-size originals outside the folder that gets published.

### 7. Play it start to finish

When everything on the plan's "done" list works, ask them to play the whole thing from the title screen to the ending, as if they were the recipient. Write down everything they say, sort it into small batches and work through those with check-ins as before.

### 8. Put it online

Help them publish it on a free static host. Pick the simplest one for them and give them every click. Explain that anyone with the link can open it. A password screen on a static site only stops casual visitors, so they shouldn't include anything they couldn't stand to have forwarded.

Phones are a separate project. If they want the world to work on a phone, treat that as its own feature with its own plan, after the computer version is done.
