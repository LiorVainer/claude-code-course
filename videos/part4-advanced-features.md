# חלק ד׳ — תכונות מתקדמות

> הכרתם את Claude Code — עכשיו בואו נראה מה הופך אותו מכלי לפלטפורמה שלמה

---

## Sub-Agents

> עוזרים שעובדים בצד — כשמחקר כבד ממלא 60% מהזיכרון עוד לפני שמתחילים לקודד

### עוזרים עם זיכרון נפרד

כל עוזר עובד בזיכרון משלו — קורא 30 קבצים, חוקר, ומחזיר רק סיכום קצר לשיחה הראשית

```
Context ראשי 🧠 → משימת מחקר 📤 → Sub-Agent 🔍 → סיכום קצר 📥 → Context ראשי ✅
(השיחה שלכם)    (30 קבצים)     (Context נפרד)  (200 tokens)    (נשאר נקי!)
```

### סוגי Sub-Agents מובנים

כל אחד עובד ב-Context נפרד ומחזיר רק סיכום

| סוכן | מטרה |
|------|------|
| Explore 🔎 | גילוי קריאה-בלבד — חיפוש קבצים ודפוסים. לא יכול לשנות כלום |
| Plan 📋 | תכנון מימוש — אסטרטגיה ופשרות. לא מבצע |
| **Custom 🛠️** | **סוכנים שאתם יוצרים בתיקיית הפרויקט** |

### דוגמה: סוכן מותאם אישית

יוצרים קובץ בתיקיית הפרויקט — ו-Claude יודע להפעיל אותו

```markdown
---
name: Test Writer
tools: Read, Write, Bash
---

You are a testing specialist.
1. Read the module
2. Write comprehensive tests
3. Run and verify they pass
```

---

## Hooks

> Prompts הם הסתברותיים — Hooks הם דטרמיניסטיים. תמיד מתבצעים.

### ההבדל הקריטי

| | Prompt | Hook |
|---|--------|------|
| מתבצע? | אולי — תלוי בזיכרון ה-AI | תמיד — פקודת shell |
| שליטה | הסתברותית | דטרמיניסטית |
| דוגמה | "תזכור לפרמט" | Prettier רץ אוטומטית |

### מחזור חיים של Hook

```
PreToolUse (יכול לחסום!) 🛡️ → כלי מתבצע ⚙️ → PostToolUse (הוספת פעולות) 🔧
```

### עיצוב אוטומטי — אחרי כל עריכה

```
// Auto-format after every edit
PostToolUse: "Edit|Write"
  → npx prettier --write $FILE
```

### חסימת קבצים רגישים — לפני כל עריכה

exit code 2 = BLOCK — Claude פיזית לא יכול לערוך .env

```
// Block .env changes
PreToolUse: "Edit|Write"
  → grep '.env' && exit 2

// Deterministic — not dependent on memory or prompt
```

---

## Skills — הוראות מוכנות למשימות

Skill הוא קובץ עם הנחיות למשימה ספציפית. במקום להסביר לClaude- כל פעם מחדש מה לעשות — כותבים פעם אחת ומשתמשים תמיד.

- deploy/ — תהליך העלאה לפרודקשן עם כל הבדיקות
- test/ — הרצת טסטים עם דרישות כיסוי
- pr-review/ — סקירת קוד עם צ׳קליסט קבוע
- commit/ — יצירת commit עם הודעה קונטקסטואלית

### אבל יש בעיה

אם יש לכם 50 תוספים ו-Claude טוען את כולם לזיכרון — 20% מהמקום תפוס עוד לפני שהתחלתם לעבוד. הפתרון: טוענים רק תיאור קצר, והתוכן המלא נטען רק כשצריך.

| מצב | צריכת Context |
|-----|---------------|
| טוענים הכל מראש — 50 תוספים × 200 שורות | ~40,000 tokens (20% מהזיכרון) |
| **טוענים רק כשצריך — 50 שורות תיאור בלבד** | **~500 tokens (חיסכון של 99%)** |

### רק תיאור בשורה אחת נטען

התוכן המלא נטען רק בהפעלה

```
Context: deploy — 'Deploy to production'
Context: test — 'Run tests with coverage'
...(48 more skills = 50 lines total)

User: /deploy
→ Loading full SKILL.md (200 lines)...
```

### שני סוגי Skills

| סוג | מופעל ע"י | דוגמה |
|-----|-----------|-------|
| Reference 📚 | Claude מזהה אוטומטית רלוונטיות | API conventions, error patterns |
| **Task 🚀** | **אתם מפעילים ידנית עם פקודה** | **deploy/, test/, pr-review/** |

### מבנה Skill

skills.sh — חנות של תוספים מוכנים. מתקינים פעם אחת, משתמשים תמיד.

```
my-skill/
├── SKILL.md          ← הוראות ליבה (נטען בהפעלה)
├── reference.md      ← חומר עזר (נטען לפי צורך)
└── scripts/
    └── validate.sh   ← מורץ כ-shell, אפס Tokens
```

### איך מתקינים תוספים חדשים?

skills.sh — קטלוג פתוח של תוספים מוכנים מהקהילה. מתקינים בפקודה אחת, ורואים את כל מה שמותקן עם skills/:

```
❯ npx skills add vercel-labs/agent-skills
  ✓ Skill installed successfully

❯ /skills
  Skills: 12 installed
  frontend-design  · ~104 tokens
  remotion-bits     · ~81 tokens
  presentation      · ~69 tokens
```

---

## MCP

> Model Context Protocol — עד עכשיו הכל היה בתוך הטרמינל, עכשיו נפתח את זה לעולם

### MCP = ה-API של AI לעולם החיצוני

פרוטוקול פתוח וסטנדרטי שנותן ל-LLMs גישה לכל כלי חיצוני — בסיסי נתונים, שירותי ענן, כלי עיצוב, דוקומנטציה מעודכנת. כמו ש-REST API מחבר שרתים לעולם, MCP מחבר AI לכלים. כל MCP server הופך לכלי שהסוכן יכול להפעיל.

### כלי MCP פופולריים

- context7 → דוקומנטציה מעודכנת לספריות — פותר hallucinations
- Figma → עיצוב ישירות לקוד
- Browser → אוטומציית דפדפן
- GitHub → PRs, Issues
- Database → שאילתות ישירות

### context7 — ה-MCP הכי חשוב

הבעיה: Claude אומן על data ישן ומציע API שהוסר. הפתרון: context7 שולף את התיעוד הנוכחי של כל ספרייה ישירות ל-Context. Claude עובד עם ה-API האמיתי.

### איך מתקינים MCP?

פקודה אחת בטרמינל — ו-Claude מקבל גישה לשירות חדש. אחרי ההתקנה, mcp/ מראה את כל השרתים המחוברים:

```
❯ npx ctx7 setup --claude
  ✓ Added stdio MCP server: context7

❯ /mcp
  Manage MCP servers — 3 servers
  context7         · ✓ connected
  github            · ✓ connected
  figma             · Δ needs authentication
```

### איפה זה נשמר?

ההגדרות נשמרות אוטומטית — ונטענות בכל סשן חדש:

| רמה | איפה נשמר | למי זה מתאים |
|-----|-----------|-------------|
| אישי | בהגדרות המשתמש שלכם | שרתים עם מפתחות אישיים |
| פרויקט | בקובץ mcp.json. בתיקיית הפרויקט | שיתוף עם כל הצוות דרך Git |
| גלובלי | בהגדרות המשתמש — לכל הפרויקטים | שירותים שתמיד צריכים |

### context7 בפעולה

פשוט מבקשים מ-Claude לבדוק תיעוד — והוא שולף את הגרסה העדכנית ישירות:

```
❯ check using context7 the latest docs of react-query
  resolve-library-id("react-query")
  ✓ Found: TanStack Query
  query-docs("/tanstack/query", "useQuery, useMutation...")
  ✓ React Query Setup with Queries, Mutations, and Invalidation
  Source: github.com/tanstack/query/.../quick-start.md
```

---

## לפני שכותבים קוד — צריך תוכנית

> למשימות קטנות אפשר פשוט לבקש. אבל כשבונים פיצ׳ר שלם, מתקנים באג מורכב, או עושים שינוי שחוצה כמה קבצים — בלי תוכנית ברורה, Claude יכול ללכת לכיוון לא נכון.

### OpenSpec — תכננו לפני שבונים

כלי שיוצר מסמך תכנון לפני כל שינוי גדול. אתם מאשרים את התוכנית, ורק אז Claude מתחיל לכתוב קוד. ככה מוודאים שהוא בונה בדיוק מה שרציתם.

- הציעו — מה רוצים לבנות ולמה
- פרטו — דרישות, מקרי קצה, גישה טכנית
- מימוש — Claude עובד לפי התוכנית המאושרת
- ארכוב — שמרו לעתיד כהיסטוריית החלטות

### איך מתחילים?

```
❯ npm install -g @fission-ai/openspec@latest
❯ openspec init
  ✓ OpenSpec initialized

❯ /opsx:propose "add dark mode to the app"
  ✓ Created proposal, specs, design, and tasks

❯ /opsx:apply
  ✓ Implementing tasks from approved spec...
```

---

## סיכום

**לסיכום — Claude Code זו פלטפורמה, לא רק כלי**

כל מה שלמדנו בחלק הזה במשפט אחד:

- Sub-Agents — עוזרים שעושים מחקר כבד בצד ומחזירים רק סיכום
- Hooks — דברים שחייבים לקרות, לא תלוי בזיכרון של ה-AI
- Skills — תוספים שנטענים רק כשצריך אותם, חוסכים זיכרון
- MCP — חיבור לכל שירות חיצוני: תיעוד, עיצוב, בסיסי נתונים
