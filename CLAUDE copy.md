# CLAUDE.md — הגדרות פרויקט MIA

## סקירה כללית
אתר עסקי לבית שמלות כלה בשם MIA, הממוקם בגן יבנה.
מטרת האתר: הנעת לקוחות ליצירת קשר טלפוני.

## Stack טכנולוגי
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Package Manager: npm
- Linting: ESLint + Prettier
- Font: Google Fonts (Cormorant Garamond + Assistant לעברית)

## מבנה תיקיות
```
mia/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # דף בית
│   ├── gallery/
│   │   └── page.tsx        # גלריית שמלות
│   ├── about/
│   │   └── page.tsx        # אודות
│   ├── blog/
│   │   ├── page.tsx        # רשימת מאמרים
│   │   └── [slug]/
│   │       └── page.tsx    # מאמר בודד
│   └── faq/
│       └── page.tsx        # שאלות נפוצות
├── components/
│   ├── ui/                 # קומפוננטות בסיס
│   ├── layout/             # Header, Footer, Nav
│   └── sections/           # סקשנים לדפים
├── lib/                    # utils, helpers
├── public/
│   └── images/             # תמונות שמלות
├── styles/
│   └── globals.css
├── CLAUDE.md
├── next.config.js
└── tailwind.config.ts
```

## פקודות חשובות
```bash
npm run dev       # הרצה מקומית על port 3000
npm run build     # בניה לפרודקשן
npm run lint      # בדיקת קוד
npm run type-check # בדיקת TypeScript
```

## כללי קוד
- כל הקבצים ב-TypeScript עם טיפוסים מלאים
- קומפוננטות ב-arrow functions עם export default
- שמות קבצים ותיקיות ב-kebab-case
- שמות קומפוננטות ב-PascalCase
- אין inline styles — רק Tailwind classes
- כל הטקסטים בעברית (dir="rtl")
- תמונות דרך next/image בלבד

## משתני סביבה
```
NEXT_PUBLIC_PHONE=0545417717
NEXT_PUBLIC_ADDRESS=סביון 9 גן יבנה
NEXT_PUBLIC_EMAIL=         # להשלים
```

## עדיפויות פיתוח
1. Mobile-first — עיצוב מובייל קודם לכל
2. Performance — תמונות מאופטמות, טעינה מהירה
3. SEO — metadata מלא בכל עמוד
4. Accessibility — alt texts, semantic HTML
