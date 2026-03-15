# From ChatGPT Copy-Paste to Vibe Coding with Claude Code
## A Complete Developer's Lesson — From Foundations to Mastery

> This document is a comprehensive, chronologically structured lesson that builds from foundational AI concepts through intermediate Claude Code mastery to advanced ecosystem topics. Each chapter builds on the previous one. Designed for full-stack developers transitioning from ChatGPT copy-paste workflows.
>
> Date: March 2026

---

# PART I: FOUNDATIONS — Understanding How AI Actually Works

Before touching any tool, you need to understand three foundational concepts that most developers get wrong. Without these, everything else — Claude Code, MCP, Skills — will feel like magic instead of engineering.

---

## Chapter 1: Tokens — The Atoms of AI

**Source**: Matt Pocock — "Most devs don't understand how LLM tokens work"
Video: https://www.youtube.com/watch?v=nKSk_TiR8YA

### What Is a Token?

A **token** is the basic unit of text that an AI model processes. It's not a word. It's not a character. It's something in between — a chunk of text that the model's tokenizer has learned to recognize as a meaningful unit.

### How Tokenization Works

When you send text to an AI model, the first thing that happens — before any "thinking" — is **tokenization**. The model breaks your text into tokens using a learned vocabulary:

| Input | Tokens | Count |
|-------|--------|-------|
| `hello` | `hello` | 1 |
| `unbelievable` | `un` + `believ` + `able` | 3 |
| `Hello, world!` | `Hello` + `,` + ` world` + `!` | 4 |
| `function getData()` | `function` + ` get` + `Data` + `()` | 4 |
| `const x = 42;` | `const` + ` x` + ` =` + ` 42` + `;` | 5 |

**The rule of thumb**: 1 token ≈ 4 English characters ≈ 0.75 words.

### Why Tokens Matter to You as a Developer

**1. Cost — You Pay Per Token**
Every API call costs money based on tokens consumed. There are two separate counts:
- **Input tokens**: Everything you send (your prompt, system instructions, files, conversation history)
- **Output tokens**: Everything the model generates back

Output tokens typically cost 3-5x more than input tokens. A long, verbose response costs more than a concise one.

**2. Speed — More Tokens = Slower Response**
The model generates tokens sequentially, one at a time. A 2,000-token response takes roughly twice as long as a 1,000-token response. This is why "streaming" exists — you see tokens appear as they're generated rather than waiting for the full response.

**3. Code Tokenizes Differently Than English**
This is the part most developers miss. Code is token-expensive:
- Every bracket, brace, parenthesis, semicolon = separate token
- Dots in method chains = separate tokens
- Camel case splits: `getUserById` → `get` + `User` + `By` + `Id`
- Indentation whitespace = tokens
- A 100-line TypeScript file might consume 800-1200 tokens

**4. Different Languages Have Different Token Costs**
Hebrew, Arabic, Chinese, and other non-Latin scripts consume significantly more tokens per word than English. A Hebrew sentence might cost 3-4x the tokens of its English equivalent. This matters when writing comments, documentation, or prompts in non-English languages.

### Token-Saving Strategies for Daily Work

| Strategy | How | Impact |
|----------|-----|--------|
| Write focused prompts | Be specific, not verbose | Reduces input tokens |
| Don't re-paste code | Let Claude Code read files directly | Eliminates redundant input |
| Use `/compact` | Compresses conversation history | Frees context space |
| Check `/cost` | Monitor session spending | Awareness = better habits |
| Use `/context` | See remaining capacity | Know when to compact |
| Use Haiku for simple tasks | Model selection matters | 10-50x cheaper than Opus |

### The Mental Model

Think of tokens as the **electricity bill** of AI. You don't need to count every watt, but understanding that leaving all the lights on costs money changes your behavior. Same with tokens — understanding them changes how you prompt, how you structure conversations, and which model you choose for which task.

---

## Chapter 2: The Context Window — Your AI's Working Memory

**Source**: Matt Pocock — "Most devs don't understand how context windows work"
Video: https://www.youtube.com/watch?v=-uW5-TaVXu4

### What Is the Context Window?

The **context window** is the maximum number of tokens the model can "see" at once. Think of it as the model's RAM — everything the model considers when generating its next response must fit within this window.

### The Numbers

| Model | Context Window | Approximate Capacity |
|-------|---------------|---------------------|
| Claude Opus 4.6 | **1,000,000 tokens** | ~750,000 words ≈ ~2,500 pages |
| Claude Sonnet 4.6 | **1,000,000 tokens** | ~750,000 words ≈ ~2,500 pages |
| Claude Haiku 4.5 | 200,000 tokens | ~150,000 words ≈ ~500 pages |
| GPT-4o | 128,000 tokens | ~96,000 words ≈ ~320 pages |
| Gemini 2.5 Pro | 1,000,000 tokens | ~750,000 words ≈ ~2,500 pages |

Even 1M tokens fills up during intensive sessions. And context management still matters — even with a huge window, the model performs better when context is focused and relevant rather than bloated with old history.

### What's INSIDE the Context Window

This is the critical insight. The context window is **not** just your prompt. In a Claude Code session, it includes ALL of the following simultaneously:

```
┌─────────────────────────────────────────────┐
│              CONTEXT WINDOW (200K)           │
│                                              │
│  1. System Prompt (~2-5K tokens)             │
│     └─ CLAUDE.md, settings, base instructions│
│                                              │
│  2. Conversation History (grows over time)   │
│     └─ Every message you sent                │
│     └─ Every response Claude gave            │
│                                              │
│  3. Files Read (~500-2000 tokens each)       │
│     └─ Every file Claude opened with Read    │
│     └─ Stays in context until compacted      │
│                                              │
│  4. Tool Outputs (variable)                  │
│     └─ Bash command results                  │
│     └─ Grep/Glob search results              │
│     └─ Git diffs, test outputs               │
│                                              │
│  5. Current Response (being generated)       │
│     └─ What Claude is currently writing       │
│                                              │
│  ═══════════════════════════════════════════  │
│  When full → older content gets pushed out   │
│  or must be compressed with /compact         │
└─────────────────────────────────────────────┘
```

### The RAM Analogy

Context Window is like RAM for developers:

| RAM Concept | Context Window Equivalent |
|-------------|--------------------------|
| Total RAM | 200K-1M tokens (depends on model) |
| Loaded programs | Files read, conversation history |
| Memory pressure | Context filling up → slower, less accurate |
| Memory leak | Long conversations without /compact |
| Swap/page file | /compact compresses history (lossy!) |
| Process isolation | Sub-agents work in separate context |
| Lazy loading | Skills load descriptions only, full content on-demand |

### Why Context Window Understanding Changes Everything

**1. Why ChatGPT copy-paste fails**: You paste 50 lines of code. ChatGPT sees ONLY those 50 lines. It has zero knowledge of your imports, your types, your other files, your project structure, your tests. Its "context window" contains just your snippet — so its answers are generic at best, wrong at worst.

**2. Why /compact is essential**: After 30-40 interactions, your context window is filling up. Older file reads, earlier conversations — they're consuming space. `/compact` compresses this history. It's lossy (Claude summarizes rather than remembers verbatim), but it frees up space for new work.

**3. Why Sub-agents are brilliant**: When Claude launches a sub-agent, that agent works in its OWN separate context window. It can read 50 files, do complex research — and return only a 200-token summary to the main context. This is like spawning a child process that does heavy work and returns only the result.

**4. Why Skills use lazy loading**: If you have 50 Skills installed, loading all their full SKILL.md files would consume thousands of tokens. Instead, only the one-line description of each skill loads (~2% of context budget). The full skill content loads only when invoked. This is the same principle as lazy imports in JavaScript.

**5. Why CLAUDE.md should stay under 200 lines**: CLAUDE.md loads into the system prompt on EVERY interaction. A 500-line CLAUDE.md wastes tokens on every single response. Keep it focused.

### Context Window Management Commands

| Command | What It Does | When to Use |
|---------|-------------|-------------|
| `/context` | Visual display of context usage | Check periodically, especially in long sessions |
| `/compact` | Compresses conversation history | When context is >60% full, or every 30-40 interactions |
| `/cost` | Shows token usage and cost | Monitor spending |
| `/clear` | Starts fresh conversation | When you're switching to a completely different task |

---

## Chapter 3: Meet the Claude Model Family

**Source**: Anthropic — Claude Models Overview
https://platform.claude.com/docs/en/about-claude/models/overview

Now that you understand tokens and context windows, let's meet the AI models that power Claude Code. Understanding the model family helps you make smart choices about cost, speed, and capability.

### What Is Claude?

**Claude** is a family of large language models (LLMs) developed by Anthropic. Not one model — a **family**, with different members optimized for different trade-offs. Think of it like choosing between a sedan, SUV, and sports car — each excels at different things.

### The Current Generation: Claude 4.6

As of March 2026, the latest generation is **Claude 4.6**, with three tiers:

| | Claude Opus 4.6 | Claude Sonnet 4.6 | Claude Haiku 4.5 |
|:--|:--|:--|:--|
| **Role** | The genius — most intelligent | The workhorse — best balance | The sprinter — fastest |
| **Best for** | Complex architecture, ambiguous requirements, multi-file refactors, building agents | 90% of daily dev work: features, bug fixes, refactoring, code review | Simple tasks: rename variables, add imports, quick formatting |
| **Context window** | **1M tokens** (~750K words) | **1M tokens** (~750K words) | **200K tokens** (~150K words) |
| **Max output** | 128K tokens | 64K tokens | 64K tokens |
| **Speed** | Moderate | Fast | Fastest |
| **Pricing (input)** | $5 / million tokens | $3 / million tokens | $1 / million tokens |
| **Pricing (output)** | $25 / million tokens | $15 / million tokens | $5 / million tokens |
| **Knowledge cutoff** | May 2025 (reliable) | Aug 2025 (reliable) | Feb 2025 |
| **Extended thinking** | Yes | Yes | Yes |
| **API ID** | `claude-opus-4-6` | `claude-sonnet-4-6` | `claude-haiku-4-5` |

### Understanding the Trade-Offs

**Cost vs Intelligence:**
```
Haiku ($1/$5)  ──────────  Sonnet ($3/$15)  ──────────  Opus ($5/$25)
  Cheapest                   Sweet spot                   Premium
  Simple tasks               Most tasks                   Hard tasks
```

Output tokens cost 5x more than input tokens across all models. This means Claude's RESPONSES cost more than YOUR PROMPTS. A verbose 5,000-token response on Opus costs ~$0.125 — not much individually, but it adds up over a full day of coding.

**Speed vs Capability:**
- **Haiku**: Response in 1-3 seconds for simple tasks. But may miss nuance on complex problems.
- **Sonnet**: Response in 3-8 seconds. Handles nearly everything a senior developer would need.
- **Opus**: Response in 5-15 seconds. Catches edge cases and architectural issues that Sonnet might miss.

### Context Window: The Big Upgrade

Claude 4.6 Opus and Sonnet have **1 million token** context windows — that's approximately:
- 750,000 words
- 3.4 million Unicode characters
- ~2,500 pages of text
- An entire medium-sized codebase in a single context

This is 5x larger than the previous 200K window. For Claude Code users, this means you can work on larger projects without hitting context limits as quickly.

Haiku 4.5 still uses the 200K window — but for simple tasks, that's more than enough.

### Extended Thinking

All current Claude models support **extended thinking** — the ability to "think step by step" internally before responding. This produces longer, more reasoned responses for complex problems. Think of it as the model doing scratch work before giving you the final answer.

Extended thinking costs additional tokens (the thinking tokens), but produces significantly better results for:
- Complex debugging
- Architecture decisions
- Multi-step reasoning
- Code that requires understanding multiple interacting systems

### The Evolution: How We Got Here

```
Claude 3 (2024)      → First multimodal models (text + images)
Claude 3.5 (2024)    → Major quality jump, Sonnet became the daily driver
Claude 4 (May 2025)  → Top-tier coding, reasoning, honesty. Opus 4 + Sonnet 4
Claude 4.5 (2025)    → Opus 4.5 refined, Haiku 4.5 launched
Claude 4.6 (2026)    → Current gen. 1M context, 128K output, best coding ever
```

Each generation brought meaningful improvements in:
- **Coding quality**: Better understanding of complex codebases, fewer bugs
- **Reasoning**: More accurate multi-step logic
- **Context handling**: Larger windows, better recall within the window
- **Instruction following**: More reliable adherence to CLAUDE.md and skill instructions

### Practical Model Selection in Claude Code

In Claude Code, you can switch models at any time. Here's the decision framework:

| Situation | Model | Why |
|-----------|-------|-----|
| "Rename this variable across the file" | **Haiku** | Simple, well-defined, save money |
| "Add error handling to this API route" | **Sonnet** | Standard dev task, good balance |
| "Refactor the auth system to use refresh tokens" | **Sonnet** | Most refactors work well with Sonnet |
| "Design a migration strategy for our database schema" | **Opus** | Architectural thinking, many trade-offs |
| "Debug this race condition in the WebSocket handler" | **Opus** | Complex, requires deep reasoning |
| "Write tests for this utility function" | **Sonnet** | Standard task, Sonnet handles well |
| "Fix this TypeScript type error" | **Haiku** | Simple, fast, cheap |

**The 90/9/1 Rule** (from elironginy):
- **90% Sonnet** — your daily driver for nearly everything
- **9% Opus** — for genuinely complex or ambiguous tasks
- **1% Haiku** — for trivial, well-defined operations

### Cost Awareness

A typical productive day with Claude Code:
- ~50-100 interactions
- Mix of Sonnet (90%) and occasional Opus
- Estimated cost: $2-10/day depending on task complexity
- Compare to: your hourly rate × hours saved

Use `/cost` to track spending and develop intuition for what different tasks cost.

---

# PART II: THE PROBLEM — Why ChatGPT Copy-Paste Is Broken

Now that you understand tokens, context windows, and the model family, you can see exactly WHY the ChatGPT copy-paste workflow fails. This isn't opinion — it's architecture.

---

## Chapter 4: The Copy-Paste Anti-Pattern

### What Developers Actually Do

The typical ChatGPT workflow for a full-stack developer looks like this:

```
1. Hit a bug or need a feature
2. Open ChatGPT in browser
3. Copy relevant code snippets
4. Paste into ChatGPT with a question
5. Read the response
6. Copy the suggested code
7. Paste back into your editor
8. Manually adjust imports, types, conventions
9. Run tests — something breaks
10. Go back to step 2 with more context
```

This loop repeats 5-20 times per day for most developers.

### Why It Fails — The Technical Analysis

| Problem | Root Cause (Now You Understand Why) |
|---------|-------------------------------------|
| **No project context** | ChatGPT's context window contains ONLY what you pasted. No imports, no types, no project structure, no other files. |
| **Lost between sessions** | Each new ChatGPT conversation starts with an empty context window. Yesterday's debugging session? Gone. |
| **Token waste** | You paste the same utility functions, the same types, the same config — over and over. Each paste costs tokens. |
| **Generic answers** | Without your CLAUDE.md-equivalent rules, ChatGPT doesn't know your team uses strict TypeScript, your naming conventions, or your testing patterns. |
| **No execution** | ChatGPT can ONLY generate text tokens. It cannot read your files, run your tests, execute git commands, or verify its own suggestions work. |
| **Hallucinated APIs** | ChatGPT's training data has a cutoff. It confidently suggests deprecated APIs, wrong method signatures, and non-existent functions — because it's generating tokens based on patterns, not checking live documentation. |
| **Manual integration** | Every response requires YOU to manually copy, paste, adjust indentation, fix imports, and handle the glue code. You become the "human compiler." |

### The Hidden Cost

Let's quantify it. A typical copy-paste interaction:
- **Your time**: 2-5 minutes per cycle (copy, context-set, read response, paste back, adjust)
- **Cycles per day**: 10-15 for an active developer
- **Daily cost**: 30-75 minutes of context-switching, copying, pasting, and manual integration
- **Weekly cost**: 2.5-6 hours of mechanical work that isn't thinking, designing, or building

This is the time Claude Code gives back to you.

---

## Chapter 5: What is Vibe Coding?

### The Definition

**Vibe Coding** is a development paradigm where the developer transitions from "person who types code" to "architect and supervisor who guides an AI agent." Instead of writing every line, you describe intent, review plans, approve changes, and steer direction — while the AI handles the mechanical execution.

The term was coined by Andrej Karpathy (co-founder of OpenAI, former Tesla AI director) in early 2025.

### The Core Principles

**1. Context is King**
The AI needs to understand your ENTIRE project — not a snippet. File structure, dependencies, conventions, git history, test patterns. The more context, the better the output. This is why context window management is a core developer skill now.

**2. Developer as Architect**
Your job shifts from writing code to:
- Defining requirements clearly
- Planning architecture and approach
- Reviewing AI-generated code for correctness
- Steering when the AI goes off-track
- Making judgment calls the AI can't

**3. Iterative Refinement**
Vibe coding is NOT "prompt once, get perfect code." It's a conversation:
```
You: "Add user authentication"
AI: [plans approach, shows you]
You: "Use JWT, not sessions. And we need refresh tokens."
AI: [adjusts plan, implements]
You: "The middleware looks good. But move the token validation to a shared utility."
AI: [refactors]
```

**4. Trust but Verify**
The AI will get things right 80-90% of the time. Your job is catching the 10-20% it gets wrong. This is why:
- Plan Mode exists (review before execution)
- Permission prompts exist (approve each action)
- `/simplify` exists (automated code review)
- Diffs are shown before committing

### The Spectrum of AI-Assisted Development

```
LEVEL 1: Copy-Paste          LEVEL 2: Autocomplete       LEVEL 3: Agentic
(ChatGPT)                    (GitHub Copilot)             (Claude Code)

You write everything         AI suggests next lines       AI understands full project
AI is a reference            AI is a typing assistant      AI is a junior developer
No project awareness         Single-file awareness         Full codebase awareness
Manual everything            Auto-complete in editor       Autonomous execution
You: typist                  You: faster typist            You: architect & reviewer
```

### What Changes About YOUR Job

| Before (Copy-Paste Era) | After (Vibe Coding Era) |
|--------------------------|------------------------|
| You write every line | You describe what you want |
| You debug by reading code | You ask Claude to investigate |
| You manually run tests | Claude runs them and interprets results |
| You search Stack Overflow | Claude searches your codebase + live docs |
| You write commit messages | Claude writes contextual commits |
| You onboard new devs manually | CLAUDE.md onboards AI instantly |
| You ARE the executor | You are the ARCHITECT |

---

# PART III: CLAUDE CODE — The Agentic Coding Platform

Now you understand the foundations (tokens, context window) and the problem (copy-paste is broken). Time to learn the solution.

---

## Chapter 6: The Agentic Loop — How Claude Code Actually Works

### It's Not Magic — It's Structured Tool Use

When you type a request in Claude Code, here's what actually happens:

```
┌──────────────────────────────────────────────────┐
│                THE AGENTIC LOOP                   │
│                                                   │
│   ┌─────────┐                                     │
│   │  THINK  │ ← Claude analyzes the request       │
│   └────┬────┘                                     │
│        │                                          │
│        ▼                                          │
│   ┌─────────┐                                     │
│   │  PICK   │ ← Selects the right tool            │
│   │  TOOL   │   (Read? Edit? Bash? Grep?)         │
│   └────┬────┘                                     │
│        │                                          │
│        ▼                                          │
│   ┌─────────┐                                     │
│   │ EXECUTE │ ← Runs the tool (with permission)   │
│   └────┬────┘                                     │
│        │                                          │
│        ▼                                          │
│   ┌─────────┐                                     │
│   │ OBSERVE │ ← Reads the result                  │
│   └────┬────┘                                     │
│        │                                          │
│        ▼                                          │
│   ┌─────────┐                                     │
│   │  DONE?  │──── No ──→ Back to THINK            │
│   └────┬────┘                                     │
│        │ Yes                                      │
│        ▼                                          │
│   ┌─────────┐                                     │
│   │ RESPOND │ ← Final answer to you               │
│   └─────────┘                                     │
└──────────────────────────────────────────────────┘
```

This loop can iterate many times for a single request. A request like "fix the failing test in auth.test.ts" might trigger:

1. **Think**: "I need to see the failing test"
2. **Read** `auth.test.ts` → sees the test
3. **Think**: "I need to understand the function being tested"
4. **Read** `auth.ts` → sees the implementation
5. **Think**: "I see the bug — the function doesn't handle null input"
6. **Edit** `auth.ts` → fixes the null check
7. **Bash** `npm test auth.test.ts` → runs the test
8. **Observe**: "All tests pass"
9. **Respond**: "Fixed the bug — the function wasn't handling null input. Added a guard clause at line 42."

That's **7 tool calls** for one request. Each one is visible to you. Each one (by default) requires your approval.

### The Tools

| Tool | What It Does | Example |
|------|-------------|---------|
| **Read** | Reads file contents | "Let me look at that file" |
| **Edit** | Makes targeted changes to existing files | "I'll fix line 42" |
| **Write** | Creates new files | "I'll create the test file" |
| **Bash** | Runs shell commands | "Let me run the tests" / "npm install" / "git status" |
| **Grep** | Searches file contents by pattern | "Let me find all usages of this function" |
| **Glob** | Finds files by name pattern | "Let me find all *.test.ts files" |
| **Agent** | Launches a sub-agent | "Let me research this in a separate context" |

### Why Understanding Tool Calls Matters

When you see Claude Code working, you're not watching "AI magic." You're watching a structured sequence of tool calls. Understanding this helps you:

1. **Understand permission prompts**: When Claude asks "Can I edit `auth.ts`?" — it's asking to use the Edit tool. You know exactly what will happen.
2. **Predict behavior**: "Claude will probably need to Read the file first, then Edit it" — you can pre-approve Read operations.
3. **Debug issues**: If Claude is stuck in a loop, you can see which tools it keeps calling and redirect it.
4. **Write better prompts**: Instead of "fix everything," you can say "read auth.ts and fix the null check on line 42" — guiding the tool selection.

---

## Chapter 7: Permissions & Safety — The Trust Model

### Philosophy: Explicit Consent by Default

Claude Code starts with **maximum safety**: every single action requires your explicit approval. This is deliberate — you should understand what Claude does before trusting it to do more autonomously.

### The Permission Flow

```
Claude wants to edit auth.ts
        │
        ▼
┌─────────────────────────┐
│   PERMISSION PROMPT     │
│                         │
│   Edit: auth.ts         │
│   [shows the diff]      │
│                         │
│   (a) Allow once        │
│   (s) Allow for session │
│   (A) Allow always      │
│   (d) Deny              │
└─────────────────────────┘
```

### Permission Levels Explained

| Level | Scope | Persists? | Use When |
|-------|-------|-----------|----------|
| **Allow once** | This specific action only | No | You want to review every change |
| **Allow for session** | This tool type for current session | Until session ends | You trust Claude for this session |
| **Allow always** | This tool type permanently | Yes (saved to settings) | You've built trust over time |
| **Deny** | Blocks this action | No | Claude is about to do something wrong |

### Pre-Configuring Permissions in settings.json

For teams, you can pre-configure what Claude is allowed to do in `~/.claude/settings.json`:

```json
{
  "permissions": {
    "allow": [
      "Bash(git *)",
      "Bash(npm test*)",
      "Bash(npm run *)",
      "Bash(tsc*)",
      "Bash(docker *)"
    ],
    "deny": [
      "Bash(rm -rf *)",
      "Bash(*DROP TABLE*)",
      "Bash(*--force*)",
      "Bash(curl * | bash)"
    ]
  }
}
```

This gives Claude autonomy in safe areas (git, tests, builds) while blocking dangerous commands.

### The --dangerously-skip-permissions Flag

This flag bypasses ALL permission prompts. Claude works fully autonomously — no approval needed for any action.

**When to use it:**
- Inside Docker containers or sandboxed environments
- On isolated feature branches with no sensitive data
- For well-scoped, repetitive tasks (e.g., "migrate all files from pattern A to pattern B")
- When you have full backups and can revert
- Real-world example: Developers have run 9-hour autonomous sessions with this flag — successfully refactoring entire codebases

**When NOT to use it:**
- Directories containing `.env` files, API keys, or credentials
- Production configurations
- Shared repositories without branch protection
- Any directory with data you can't afford to lose
- First time using Claude Code (learn the tool first!)

**The trust gradient:**
```
Day 1:    Approve every action manually
Week 1:   Allow session-level permissions for Read/Grep
Week 2:   Pre-configure safe Bash commands in settings.json
Month 1:  Allow always for most tools
Later:    --dangerously-skip-permissions in sandboxed environments
```

**Key message**: "Start with default permissions. Learn what Claude does. Then gradually trust more."

---

## Chapter 8: Modes of Operation

### Normal Mode (Default)

Claude performs actions with your approval at each step. This is where you'll spend most of your time.

### Plan Mode (`/plan` or Shift+Tab)

Claude **only plans — it does NOT execute**. It will:
- Analyze your request
- Identify relevant files
- Create a step-by-step implementation plan
- Show you what it WOULD do
- Wait for your approval before executing anything

**When to use Plan Mode:**
- Before tackling complex, multi-file changes
- When you want to understand the approach before committing
- When teaching junior developers how to think about implementation
- For architectural decisions where the "how" matters as much as the "what"

**Workflow:**
```
/plan
"Implement JWT refresh token rotation for our auth system"
→ Claude shows: files to modify, new files to create,
  approach, edge cases, testing strategy
→ You review, suggest changes
→ Approve → Claude executes the plan
```

### Fast Mode (`/fast`)

Same Claude Opus/Sonnet model, but with faster output generation. No change in quality — just speed. Toggle with `/fast`.

---

## Chapter 9: CLAUDE.md — Your Project's AI Configuration

### What Is It?

`CLAUDE.md` is a markdown file in your project root that Claude reads automatically at the start of every session. It's your project's "instruction manual" for the AI.

### What to Put In It

```markdown
# Project: MyApp

## Tech Stack
- TypeScript (strict mode, no `any`)
- React 19 + TanStack Router
- Prisma ORM + PostgreSQL
- Vitest for testing

## Conventions
- All functions must have explicit return types
- Use named exports, not default exports
- Error handling: use Result<T, E> pattern, not try-catch
- File naming: kebab-case for files, PascalCase for components

## Commands
- `npm test` — run all tests
- `npm run test:watch` — watch mode
- `npm run lint` — ESLint + Prettier check
- `npm run build` — production build

## Architecture
- /src/features/* — feature modules (each has routes/, components/, hooks/)
- /src/shared/* — shared utilities and components
- /src/server/* — API routes and server logic
```

### Best Practices (from elironginy)

**Keep it under 200 lines.** Remember — CLAUDE.md loads into the system prompt on EVERY interaction. Every line costs tokens. A 500-line CLAUDE.md wastes context space on every single response.

**Think of it as onboarding a senior developer.** What would they need to know on day 1? Not every detail — just the important rules, conventions, and gotchas.

**CLAUDE.md hierarchy:**
- `~/.claude/CLAUDE.md` — Global rules (applies to ALL your projects)
- `/project/CLAUDE.md` — Project-level rules
- `/project/src/CLAUDE.md` — Directory-level rules (for specific subsystems)

Rules cascade: global → project → directory. More specific rules override general ones.

---

## Chapter 10: Essential Slash Commands

These commands are your daily toolkit. Each one solves a specific workflow problem:

### /init — Project Discovery
```
/init
```
Claude scans your project structure, reads key files (package.json, tsconfig, README), understands the tech stack, and creates a CLAUDE.md. Watch the tool calls — you'll see Read, Grep, and Glob in action as Claude learns your project.

### /plan — Structured Planning
```
/plan
"Implement user profile page with avatar upload"
```
Switches to Plan Mode. Claude creates a detailed implementation plan without executing anything. Review, adjust, then approve.

### /simplify — Automated Code Review
```
/simplify
```
Reviews recently changed code for quality, reusability, and efficiency. Launches **3 parallel sub-agents** that each review independently, then consolidates findings. Fixes issues automatically.

### /context — Context Window Health Check
```
/context
```
Visual display showing how much of the 200K context window is in use. Use this to decide when to `/compact`.

### /compact — Context Compression
```
/compact
```
Compresses conversation history to free context space. Lossy — Claude summarizes rather than retaining verbatim history. Use every 30-40 interactions or when `/context` shows >60% usage.

### /commit — Smart Git Commits
```
/commit
```
Analyzes all staged and unstaged changes, generates a contextual commit message, and commits. The message reflects WHAT changed and WHY — not just "update files."

### /cost — Session Cost Monitor
```
/cost
```
Shows tokens consumed and estimated cost for the current session. Helps you understand spending patterns.

### /memory — Persistent Notes
```
/memory
```
View auto-saved memory notes. Claude saves contextual notes during work that persist across sessions — things like project decisions, debugging insights, and user preferences.

### Model Selection

See **Chapter 3** for the full Claude model family comparison with pricing, context windows, and capabilities. Quick reference:

| Model | Best For | Context | Pricing (in/out per MTok) |
|-------|----------|---------|---------------------------|
| **Haiku 4.5** | Simple, well-defined tasks | 200K | $1 / $5 |
| **Sonnet 4.6** | 90% of daily work | 1M | $3 / $15 |
| **Opus 4.6** | Complex architecture, ambiguous requirements | 1M | $5 / $25 |

**The 90/9/1 Rule** (from elironginy): Sonnet 90% of the time. Opus 9% for hard problems. Haiku 1% for trivial tasks.

---

# PART IV: ADVANCED FEATURES — Scaling Claude Code

You now understand how Claude Code works at its core. These next chapters cover the features that make it a platform, not just a tool.

---

## Chapter 11: Sub-Agents — Parallel Processing for AI

### The Problem They Solve

When Claude needs to research something complex — say, "find all files that import UserService and check if they handle the new nullable email field" — it might need to read 30+ files. Each file read consumes context window tokens. By the time it's done researching, 60% of the context is used up, leaving less room for the actual implementation.

### The Solution: Context Isolation

Sub-agents are child processes that work in their **own separate context window**. They do the heavy lifting and return only a concise summary to the main context.

```
┌─────────────────────────────┐
│     MAIN CONTEXT (200K)      │
│                              │
│  "Find all UserService       │
│   usages and check email"    │
│         │                    │
│         ▼                    │
│   [Launch Sub-Agent]         │
│         │                    │     ┌─────────────────────┐
│         ├────────────────────┼────→│  SUB-AGENT CONTEXT  │
│         │                    │     │                     │
│         │  (waiting...)      │     │  Read file1.ts ✓    │
│         │                    │     │  Read file2.ts ✓    │
│         │                    │     │  Read file3.ts ✓    │
│         │                    │     │  ... 27 more ✓      │
│         │                    │     │  Grep patterns ✓    │
│         │                    │     │                     │
│         │                    │     │  Summary: "Found 12 │
│         │                    │     │  files. 8 handle    │
│         │                    │     │  nullable email.    │
│         │                    │     │  4 need fixing:     │
│         │                    │     │  [list]"            │
│         ◄────────────────────┼─────└─────────────────────┘
│                              │
│  Result: 200-token summary   │
│  (instead of 30K tokens      │
│   from reading all files)    │
│                              │
└─────────────────────────────┘
```

### Built-in Sub-Agent Types

**Explore Agent** — Read-Only Discovery
- Searches files, reads code, understands patterns
- CANNOT modify anything — pure research
- Perfect for: "Find all API endpoints," "How does the auth flow work?"

**Plan Agent** — Implementation Planning
- Analyzes code and creates implementation strategies
- Identifies files to modify, considers trade-offs
- CANNOT modify anything — planning only

### Custom Sub-Agents

Create your own specialized agents in `.claude/agents/`:

```markdown
<!-- .claude/agents/test-writer.md -->
---
name: Test Writer
description: Creates comprehensive test suites for given modules
tools: Read, Write, Bash, Grep, Glob
---

You are a testing specialist. When given a source file:
1. Read and understand the module
2. Identify all public functions and edge cases
3. Write comprehensive tests using Vitest
4. Run the tests to verify they pass
5. Return a summary of test coverage
```

### Use Cases for Sub-Agents

| Scenario | Agent Type | Why |
|----------|-----------|-----|
| Research how auth works | Explore | Read-only, won't modify anything |
| Plan a migration strategy | Plan | Structured planning without execution |
| Write tests for 10 modules | Custom (parallel) | Each agent handles one module |
| Review code quality | /simplify (3 agents) | Parallel review from different angles |

---

## Chapter 12: Hooks — Deterministic Automation

### The Key Insight

Skills and prompts are probabilistic — you HOPE the AI remembers to format code or run tests. Hooks are **deterministic** — they ALWAYS execute, regardless of what the AI decides.

### What Are Hooks?

Shell commands that auto-execute at specific lifecycle events in Claude Code:

```
┌──────────────────────────────────────────────┐
│              CLAUDE CODE LIFECYCLE            │
│                                              │
│  SessionStart ──→ [User sends message]       │
│                        │                     │
│                        ▼                     │
│              ┌─── PreToolUse ───┐            │
│              │  (can BLOCK!)    │            │
│              └────────┬─────────┘            │
│                       │                      │
│                       ▼                      │
│              [Tool executes]                 │
│                       │                      │
│                       ▼                      │
│              ┌─── PostToolUse ──┐            │
│              │  (can ADD steps) │            │
│              └────────┬─────────┘            │
│                       │                      │
│                       ▼                      │
│                    Stop                      │
│                       │                      │
│                       ▼                      │
│                 Notification                 │
│                                              │
└──────────────────────────────────────────────┘
```

### Hook Events

| Event | When It Fires | Can Block? | Common Use |
|-------|--------------|------------|------------|
| **PreToolUse** | Before any tool executes | Yes (exit code 2) | Block dangerous operations |
| **PostToolUse** | After any tool executes | No | Auto-format, auto-lint |
| **SessionStart** | When a session begins | No | Setup, notifications |
| **Stop** | When Claude finishes responding | No | Post-processing |
| **Notification** | When Claude needs user input | No | Desktop alerts |

### Practical Hook Examples

**1. Auto-Format with Prettier After Every Edit**
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "command": "npx prettier --write $CLAUDE_FILE_PATH"
      }
    ]
  }
}
```
Every time Claude edits or creates a file → Prettier formats it automatically. No more "Claude forgot to format."

**2. Block Modifications to Sensitive Files**
```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "command": "echo $CLAUDE_FILE_PATH | grep -qE '\\.(env|env\\.local|credentials)' && exit 2 || exit 0"
      }
    ]
  }
}
```
Exit code 2 = BLOCK the action. Claude physically cannot edit `.env` files.

**3. Block package-lock.json Changes**
```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "command": "echo $CLAUDE_FILE_PATH | grep -q 'package-lock.json' && exit 2 || exit 0"
      }
    ]
  }
}
```

**4. Desktop Notifications**
```json
{
  "hooks": {
    "Notification": [
      {
        "command": "powershell -Command \"[System.Reflection.Assembly]::LoadWithPartialName('System.Windows.Forms'); [System.Windows.Forms.MessageBox]::Show('Claude needs your input!')\""
      }
    ]
  }
}
```

### Setup
- Quick setup: `/hooks` command in CLI
- Manual setup: Edit JSON in settings files (`~/.claude/settings.json` for global, `.claude/settings.json` for project)

### Key Message
"Hooks give you **deterministic control** — things that MUST happen, not things you hope the AI remembers."

---

## Chapter 13: Skills — Dynamic Token-Saving Architecture

### The Problem

You want Claude to know about your deployment process, your API conventions, your testing patterns, your PR workflow. You could put it all in CLAUDE.md — but at 200 lines max, you'll quickly overflow. And even if you could fit it, loading ALL that knowledge into EVERY interaction wastes tokens.

### The Solution: Lazy Loading via Skills

Skills use an elegant lazy-loading architecture inspired by the same principles as code splitting in JavaScript:

```
┌─────────────────────────────────────────────────┐
│            CONTEXT WINDOW AT STARTUP             │
│                                                  │
│  System Prompt + CLAUDE.md                       │
│  ─────────────────────────────                   │
│  Skill: deploy - "Deploy to prod with checks"   │  ← 1 line
│  Skill: pr-review - "Review PRs with checklist" │  ← 1 line
│  Skill: test - "Run tests with coverage"         │  ← 1 line
│  Skill: migrate - "Database migration workflow"  │  ← 1 line
│  ... (50 more skills = 50 more lines)            │
│                                                  │
│  Total skill budget: ~2% of context window       │
│  ─────────────────────────────────────────────   │
│                                                  │
│  [REST OF CONTEXT IS FREE FOR YOUR WORK]         │
│                                                  │
└─────────────────────────────────────────────────┘

When you invoke /deploy:

┌─────────────────────────────────────────────────┐
│  Full SKILL.md for "deploy" loads NOW            │
│  (up to 500 lines of deployment instructions)    │
│  Scripts in scripts/ directory EXECUTE           │
│  Supporting files (reference.md) load if needed  │
└─────────────────────────────────────────────────┘
```

**The math**: 50 skills × 1-line descriptions = ~50 lines in context (~500 tokens). Without lazy loading, 50 skills × average 200-line SKILL.md = 10,000 lines (~40,000 tokens) — that's 20% of your entire context window wasted on instructions you're not using.

### Two Types of Skills

**Reference Skills — Background Knowledge (Auto-Invoked)**
Claude invokes these automatically when it detects relevance:
- Code conventions and patterns
- API design guidelines
- Error handling standards
- Example: You're writing a new API endpoint → Claude auto-loads your "api-conventions" skill

**Task Skills — Structured Workflows (User-Invoked)**
You invoke these explicitly with `/name`:
- `/deploy` — deployment workflow
- `/pr-review` — PR review checklist
- `/test` — testing workflow with coverage requirements
- Setting `disable-model-invocation: true` prevents Claude from loading these automatically

### Supporting Files — Smart Content Separation

```
my-skill/
├── SKILL.md              ← Core instructions (≤500 lines, loaded on invoke)
├── reference.md          ← Additional reference (loaded only if needed)
├── examples.md           ← Code examples (loaded only if needed)
└── scripts/
    ├── validate.sh       ← Executed, not loaded into context
    └── setup.sh          ← Executed, not loaded into context
```

Scripts in `scripts/` are EXECUTED by the shell, not loaded as text. This means a 1000-line validation script costs zero context tokens.

### Subagent Isolation for Skills

Skills can run in isolated sub-agents:
```yaml
---
context: fork
agent: Explore
---
```
This means the skill's work happens in a separate context window, protecting your main context from bloat.

### Key Skill Features

| Feature | What It Does |
|---------|-------------|
| `$ARGUMENTS` | Pass dynamic input: `/deploy staging` → `$ARGUMENTS = "staging"` |
| `allowed-tools` | Restrict which tools the skill can use |
| `!command` | Run shell command and inject output into prompt |
| `disable-model-invocation` | Only user can trigger (not auto-detected) |
| `user-invocable: false` | Only Claude can trigger (background knowledge) |

### Bundled Skills (Pre-Installed)

| Skill | What It Does |
|-------|-------------|
| `/batch` | Large-scale parallel changes using git worktrees |
| `/simplify` | 3 parallel agents for code review |
| `/loop` | Recurring prompt execution on a schedule |
| `/debug` | Session troubleshooting |
| `/claude-api` | Claude API reference |

### skills.sh — The Skills Marketplace

[skills.sh](https://skills.sh) is an open ecosystem catalog of community-created skills. Think of it as npm for AI workflows:

```bash
# Browse at https://skills.sh
# Install a skill:
npx skillsadd <owner/repo>

# The skill's slash commands are immediately available
```

Categories include: development tools, design/UI, cloud/DevOps, productivity, testing, documentation, and more.

### Bottom Line
"Skills are like npm packages for AI — install once, load only when needed, save tokens automatically."

---

## Chapter 14: MCP — Model Context Protocol

### What Is MCP?

MCP (Model Context Protocol) is a standard protocol that extends Claude Code with **external tools and data sources**. Without MCP, Claude can only read local files and run local commands. With MCP, Claude connects to the outside world.

Think of MCP like USB for AI — a standardized way to plug in new capabilities.

```
┌──────────────────────────────────────────────┐
│               CLAUDE CODE                     │
│                                               │
│  Built-in: Read, Edit, Write, Bash, Grep...  │
│                                               │
│  ──── MCP CONNECTION LAYER ─────              │
│  │                              │             │
│  ▼                              ▼             │
│ ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│ │ context7 │  │  Figma   │  │  Notion  │    │
│ │   MCP    │  │   MCP    │  │   MCP    │    │
│ │          │  │          │  │          │    │
│ │ Live     │  │ Design   │  │ Read/    │    │
│ │ library  │  │ → Code   │  │ write    │    │
│ │ docs     │  │ 1:1      │  │ docs     │    │
│ └──────────┘  └──────────┘  └──────────┘    │
│                                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ Browser  │  │ Database │  │  Custom  │   │
│  │ Auto MCP │  │   MCP    │  │   MCP    │   │
│  │          │  │          │  │          │   │
│  │ Web      │  │ Query    │  │ Your     │   │
│  │ testing  │  │ & modify │  │ internal │   │
│  │ & scrape │  │ data     │  │ tools    │   │
│  └──────────┘  └──────────┘  └──────────┘   │
└──────────────────────────────────────────────┘
```

### context7 MCP — Live Documentation (Solves Hallucination)

**The problem**: You ask Claude to use React Query. Claude was trained on data from months ago. React Query's API may have changed since then. Claude confidently generates code using a deprecated method — and you waste 30 minutes debugging why it doesn't work.

**The solution**: context7 MCP fetches the CURRENT documentation for any library directly into Claude's context:

```
You: "Use React Query to add data fetching to this component"

Without context7:
  Claude uses training data → might suggest useQuery({ queryKey, queryFn })
  with outdated options or deprecated patterns

With context7:
  Claude calls context7 → fetches latest React Query docs →
  uses the current API with correct types and patterns
```

This is arguably the single most important MCP for daily development work.

### Figma MCP — Design to Code

Translates Figma designs directly to production code with 1:1 visual fidelity:
- Reads Figma component structure
- Maps design tokens to CSS/Tailwind
- Generates component code matching the design
- Connects Figma design components to your code components

**Video walkthrough**: https://www.youtube.com/watch?v=Cq-7lFMNESk

### Other Notable MCPs

| MCP | Purpose |
|-----|---------|
| **Browser Automation** | Control Chrome — testing, scraping, form filling |
| **Notion** | Read and write Notion documents |
| **Database MCPs** | Query and modify databases directly |
| **GitHub MCP** | Interact with repos, issues, PRs |
| **NotebookLM MCP** | Create notebooks, add sources, generate artifacts |

### Key Message
"Claude Code is not just a chatbot — it's a **platform**. MCP connects it to your Figma designs, live documentation, databases, and anything else you need."

---

## Chapter 15: Spec Driven Development (SDD) with OpenSpec

### The Problem

Vibe coding is powerful — but without structure, it can produce inconsistent results. When requirements live only in chat history, the AI has no clear target. You might get a great implementation one day and a mess the next.

"Vibe coding without specs is like building without blueprints."

### What Is SDD?

Spec Driven Development creates alignment between your intent and AI execution through **structured specs BEFORE writing code**. It's not waterfall — it's a fast, iterative specification process that gives the AI a clear target.

### OpenSpec — The Tool

[OpenSpec](https://github.com/Fission-AI/OpenSpec) implements SDD as a CLI tool + Claude Code skills:

### The 4-Phase Workflow

```
┌───────────┐    ┌───────────┐    ┌───────────┐    ┌───────────┐
│  PROPOSE  │───→│  SPECIFY  │───→│ IMPLEMENT │───→│  ARCHIVE  │
│           │    │           │    │           │    │           │
│ "I want   │    │ Detailed  │    │ Execute   │    │ Document  │
│  to build │    │ spec with │    │ according │    │ & store   │
│  X"       │    │ edge      │    │ to the    │    │ for       │
│           │    │ cases &   │    │ approved  │    │ future    │
│           │    │ types     │    │ spec      │    │ reference │
└───────────┘    └───────────┘    └───────────┘    └───────────┘
```

Each change gets an organized folder structure:
```
.openspec/
├── proposals/
│   └── user-profile-avatar.md
├── specs/
│   └── user-profile-avatar.md
├── tech-designs/
│   └── user-profile-avatar.md
└── checklists/
    └── user-profile-avatar.md
```

### Installation & Usage

```bash
# Install
npm install -g @fission-ai/openspec@latest
openspec init

# Use in Claude Code
/opsx:propose "Add avatar upload to user profile"
```

### Why SDD Matters for Teams

- Works across 20+ AI assistants — no IDE lock-in
- Specs survive across sessions (unlike chat history)
- Junior devs can propose features; seniors review specs
- AI has a clear, structured target instead of a vague prompt
- Iterative refinement, not rigid waterfall — you can update specs as you learn

---

# PART V: PRACTICAL MASTERY — Making It Work in Real Life

---

## Chapter 16: Practical Tips from the Field

**Source**: elironginy — https://elironginy.substack.com/p/claude-code-15

### 1. CLAUDE.md Discipline
Keep it under 200 lines. Every line costs tokens on every interaction. Put detailed instructions in Skills instead — they load on-demand.

### 2. Token Management is a Skill
- Run `/cost` to see session spending
- Run `/context` to check remaining capacity
- Run `/compact` every 30-40 interactions
- Switch to Haiku for simple tasks
- Use sub-agents for heavy research (protects main context)

### 3. Model Selection Strategy
- **Haiku**: Renaming variables, adding imports, simple formatting → cheap and fast
- **Sonnet**: Feature development, bug fixes, refactoring, code review → best balance
- **Opus**: Complex architecture, ambiguous requirements, multi-file refactors → maximum capability

### 4. Security Best Practices
- Always review community skill code before installing from skills.sh
- Use hooks to block access to sensitive files (.env, credentials)
- Start with default permissions — learn what Claude does before trusting more
- Pre-configure permission allowlists for team repositories

### 5. Remote Control
- Generate a QR code from Claude Code → scan with your phone → control the session from your phone
- Claude runs on YOUR machine, not in the cloud — your code never leaves your computer
- Use `tmux` for persistent sessions that survive terminal closure

### 6. Beyond Code
Claude Code isn't just for writing code. It handles:
- CSV analysis and data processing
- Media file management
- Documentation generation
- Automation scripts
- Git workflow management
- DevOps tasks (Docker, CI/CD)

---

## Chapter 17: Your First Day — Getting Started

### Step 1: Install (2 minutes)
```bash
npm install -g @anthropic-ai/claude-code
```

### Step 2: Initialize (5 minutes)
```bash
cd your-project
claude
/init
```
Watch the tool calls. Claude will Read your package.json, scan your file structure, and create CLAUDE.md. This is the agentic loop in action.

### Step 3: Explore (5 minutes)
```bash
# Check context usage
/context

# Ask about your project
"What does this project do? What are the main components?"

# Make a small change, then review
/simplify
```

### Step 4: Plan Mode (5 minutes)
```bash
/plan
"Add input validation to the login form"
# Review the plan, adjust, approve, watch it implement
```

### Step 5: Set Up Your Team (10 minutes)
- Create CLAUDE.md with your team's standards
- Set up hooks for auto-formatting and file protection
- Configure permissions in settings.json
- Share the notebook and this guide with your team

### Three Things to Try Monday Morning
1. **Install + /init + /context** — see Claude learn your project
2. **Plan mode + /simplify for your next ticket** — plan, implement, review
3. **Try OpenSpec**: `openspec init` → `/opsx:propose "your next feature"`

---

# APPENDICES

---

## Appendix A: Recommended Learning Resources

### YouTube Videos

| Topic | Creator | Video Title | Why Watch |
|-------|---------|-------------|-----------|
| Tokens explained | Matt Pocock | "Most devs don't understand how LLM tokens work" | Foundation — must understand before using any AI tool |
| Context Windows explained | Matt Pocock | "Most devs don't understand how context windows work" | Foundation — explains why context management matters |
| MCP explained | Fireship | "I gave Claude root access to my server... MCP explained" | Fast, clear MCP overview from top tech channel |
| Claude Code in practice | Theo (t3dotgg) | "I'm addicted to Claude Code (i get it now)" | Honest developer perspective, very relatable |
| AI in Terminal | NetworkChuck | "AI in the Terminal" (Claude Code, Gemini CLI, Codex) | Beginner-friendly, high production quality, tool comparison |
| Figma MCP | — | Figma MCP Setup | Design-to-code workflow demo |

### Official Documentation
- Claude Code Docs: https://code.claude.com
- Explore Claude Code: https://www.exploreclaudecode.com
- Skills Directory: https://skills.sh
- OpenSpec: https://github.com/Fission-AI/OpenSpec

### Community Resources
- Community guide: https://github.com/zebbern/claude-code-guide
- elironginy's practical guide: https://elironginy.substack.com/p/claude-code-15
- Permissions deep dive: https://www.ksred.com/claude-code-dangerously-skip-permissions-when-to-use-it-and-when-you-absolutely-shouldnt/

---

## Appendix B: Key Messages for the Lecture

| Message | One-Liner |
|---------|-----------|
| **The shift** | "Stop copy-pasting from ChatGPT. Start working with an AI that understands your entire codebase." |
| **Your role** | "You're not replacing yourself. You're promoting yourself from typist to architect." |
| **MCP** | "It's not just a chatbot — it's a platform. MCP connects Claude Code to your Figma designs, live docs, databases, and anything else you need." |
| **Skills** | "skills.sh = npm for AI workflows. Install once, use everywhere." |
| **SDD** | "Vibe coding without specs is like building without blueprints. OpenSpec gives your AI a clear target." |
| **Tokens** | "Understanding tokens and context window is like understanding RAM and CPU — you can code without knowing them, but you'll be 10x better when you do." |
| **Permissions** | "Start with default permissions. Learn what Claude does. Then gradually trust more." |
| **Hooks** | "Hooks give you deterministic control — things that MUST happen, not things you hope the AI remembers." |

---

## Appendix C: All Sources Used in This Research

### NotebookLM Notebook
- URL: https://notebooklm.google.com/notebook/e7bb17c5-7712-482d-ae23-af5f901482b9
- Public sharing: Enabled

### Sources Added to Notebook
1. https://www.exploreclaudecode.com — Comprehensive features reference
2. https://github.com/zebbern/claude-code-guide — Community guide with practical tips
3. https://anthropic.skilljar.com/claude-code-in-action — Official training material
4. https://claude.com/blog/category/announcements — Latest announcements
5. https://skills.sh — Skills ecosystem catalog
6. https://github.com/Fission-AI/OpenSpec — Spec Driven Development tool
7. https://code.claude.com/docs/en/discover-plugins — Plugins documentation
8. https://code.claude.com/docs/en/hooks-guide — Hooks guide
9. https://www.ksred.com/claude-code-dangerously-skip-permissions-when-to-use-it-and-when-you-absolutely-shouldnt/ — Permissions guide
10. https://www.youtube.com/watch?v=Cq-7lFMNESk — Figma MCP video
11. https://code.claude.com/docs/en/sub-agents — Sub-agents documentation
12. https://elironginy.substack.com/p/claude-code-15 — Hebrew practical guide
13. https://code.claude.com/docs/en/skills — Skills documentation
14. https://platform.claude.com/docs/en/about-claude/models/overview — Claude Models Overview

### Video References
- Matt Pocock: "Most devs don't understand how LLM tokens work" — https://www.youtube.com/watch?v=nKSk_TiR8YA
- Matt Pocock: "Most devs don't understand how context windows work" — https://www.youtube.com/watch?v=-uW5-TaVXu4

### Generated Artifacts
- `the-ai-architect-slides.pdf` — Main Hebrew slide deck
- `the-architects-terminal-slides.pdf` — Alternative Hebrew slide deck
- `vibe-coding-spectrum-infographic.png` — Evolution spectrum infographic
- `tool-comparison-infographic.png` — Tool comparison infographic
- `agentic-development-guide-infographic.png` — Full Hebrew agentic guide
- `subagents-and-tips-infographic.png` — Sub-agents + tips infographic
- `skills-dynamic-token-saving-infographic.png` — Skills architecture infographic
- `vibe-coding-audio-deep-dive.mp3` — Hebrew audio podcast
- `claude-code-english-podcast.mp3` — English audio podcast
- `claude-code-exercises.md` — Hands-on exercise guide
- `claude-code-research-deep-dive.md` — This document
