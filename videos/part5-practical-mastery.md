# חלק ה׳ — שליטה מעשית

> מספיק תיאוריה — עכשיו בואו נהפוך את הכל לפעולות ליום ראשון בעבודה

---

## היום הראשון שלכם

### שלב 1: התקנה

CLI-first — הטרמינל נותן שליטה וגמישות מלאה

```
❯ npm i -g @anthropic-ai/claude-code
  ✓ Installed
```

יש גם אפליקציית Desktop וגישה מהדפדפן — אבל הטרמינל נותן את השליטה המלאה

### שלב 2: אתחול

תצפו ב-Tool Calls — הלולאה האג׳נטית בפעולה

```
❯ cd my-project && claude
  Welcome to Claude Code!

❯ /init
  📖 Reading package.json...
  📂 Scanning file structure...
  ✓ Created CLAUDE.md
```

### שלב 3: גלו את הפרויקט

```
❯ /context
  Context: 12% used (24K / 200K tokens)

❯ "What does this project do? What are the main components?"
  📖 Reading src/...
  "This is a React app with..."
```

### שלב 4: המשימה הראשונה

תכננו לפני שמבצעים

```
❯ /plan
  "Add input validation to the login form"
  → Files to modify, approach, edge cases
  → Review, adjust, approve → Claude executes
```

### שלב 5: סקירה עם simplify/

הפקודה מפעילה 3 סוכני משנה במקביל שסוקרים את הקוד שלכם מזוויות שונות:

```
❯ /simplify
  🤖 Launching 3 parallel review agents...
  ✓ Agent 1: code quality — no issues
  ✓ Agent 2: reusability — extracted shared validator
  ✓ Agent 3: efficiency — simplified regex
```

### למה זה שווה זהב?

במקום לקרוא כל שורה בעצמכם — 3 סוכנים עוברים על הקוד במקביל ומחזירים סיכום ממוקד:

- סוכן 1 — איכות: בודק באגים, טיפול בשגיאות, מקרי קצה חסרים
- סוכן 2 — שימוש חוזר: מוצא קוד כפול ומציע לחלץ לפונקציות משותפות
- סוכן 3 — יעילות: מזהה ביצועים גרועים ומפשט לוגיקה מסובכת

כל סוכן עובד בזיכרון נפרד. אתם מקבלים סקירת קוד מקצועית בשניות — לא בימים.

---

## הרגלי עבודה יומיומיים

> הדברים שיהפכו אתכם ממשתמשים למקצוענים

### ניהול Context

כשעוברים 60% — הריצו /compact. כמו לפנות RAM

```
❯ /context
  Context: 78% used (156K/200K)

❯ /compact
  ✓ Compressed: 156K → 62K tokens
  94K tokens freed!
```

### CLAUDE.md — גדלו אורגנית

התחילו עם 20 שורות. הוסיפו כלל כל פעם ש-Claude טועה. אחרי שבוע יהיה לכם CLAUDE.md מדויק. אל תנסו לכתוב הכל ביום הראשון.

### עקבו אחרי שימוש

הפקודה usage/ מראה כמה מהמנוי שלכם השתמשתם השבוע, ומתי הוא מתאפס:

```
❯ /usage
  Current session:            5% used
  Current week (all models):  13% used
  Current week (Sonnet only): 1% used
  Resets Mar 20, 7pm
```

### טיפ: תנו ל-Claude לראיין אתכם

לפני משימה מורכבת, אמרו: "מה השאלות שלך לפני שאתה מתחיל?"
Claude ישאל שאלות הבהרה — ה-output יהיה טוב יותר כבר מהניסיון הראשון.

### טעויות נפוצות

סשן Kitchen Sink — מערבבים משימות לא קשורות בסשן אחד. Context מתמלא בזבל.
→ הפתרון: /clear בין משימות

לולאת תיקונים — Claude טועה, מתקנים, טועה שוב, מתקנים שוב. Context מזוהם.
→ הפתרון: אחרי 2 כישלונות — /clear + prompt טוב יותר שמשלב את מה שלמדתם

---

## אבטחה — כללי אצבע

- בדקו קוד של Skills לפני התקנה — skills.sh הוא קוד פתוח, תקראו אותו
- השתמשו ב-Hooks לחסימת .env — דטרמיניסטי, לא תלוי ב-AI
- התחילו עם הרשאות ברירת מחדל — תלמדו מה Claude עושה לפני שסומכים
- הגדירו allowlist לצוות — ב-settings.json, מותרים וחסומים

---

## טיפ בונוס: חסכו Tokens אוטומטית

הפלאגין context-mode מונע מ-Claude לטעון נתונים גולמיים לזיכרון. במקום זה, הוא שומר אותם בצד ומחזיר רק סיכום קצר — חיסכון של עד 98% בזיכרון.

```
❯ /plugin marketplace add mksglu/context-mode
  ✓ Plugin installed

❯ /plugin install context-mode@context-mode
  ✓ MCP server + hooks configured
  Context savings: 4.6x (78% reduction)
```

---

## Remote Control — שליטה מהטלפון

סורקים QR, שולטים בסשן מרחוק. הכל רץ על המחשב שלכם — הטלפון הוא רק חלון

```
❯ rc
  📱 Scan QR code to control from your phone
  Session running locally — code never leaves your machine
```

---

## מעבר לקוד

תפסיקו לחשוב על זה רק ככלי קוד — זה עוזר אישי שחי בטרמינל

- ניתוח נתונים — "יש לי CSV עם 10,000 שורות. תמצא חריגות ותייצר גרפים"
- יצירת תיעוד — Claude עובר על כל הקבצים, מבין הקשר, וכותב תיעוד
- Git workflow — commits קונטקסטואליים, PRs, branch management
- DevOps — Docker, CI/CD, infrastructure scripts
- אוטומציות — סקריפט שמשנה שמות ל-500 קבצים? Claude כותב ומריץ

---

## שלושה דברים ליום שני בבוקר

1. התקינו + /init + /context — ראו איך Claude לומד את הפרויקט
2. /plan לטיקט הבא + /simplify לסקירה — תכננו, בצעו, בדקו
3. נסו OpenSpec: openspec init → /opsx:propose

---

## הסיכום של כל הסדרה

### חמישה חלקים, מסע אחד

```
יסודות 🧠 → הבעיה ❓ → Claude Code 🛠️ → תכונות מתקדמות 🔌 → שליטה מעשית 🚀
```

### אתם לא מחליפים את עצמכם

אתם מקדמים את עצמכם ממקלידנים לארכיטקטים

### עכשיו לכו תבנו משהו מדהים.

הסרטון הזה נוצר כולו באמצעות Claude Code
