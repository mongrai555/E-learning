# E-Learning Website - Code Explanation

## Project Overview

This is a Next.js application built with TypeScript that implements a comprehensive e-learning platform for computer science students. The application follows modern web development practices with a focus on performance, accessibility, and user experience.

## Technology Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Custom styling without external frameworks
- **React Context API** - State management
- **React Hooks** - Component logic

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── admin/             # Admin dashboard
│   │   └── page.tsx
│   ├── courses/           # Courses section
│   │   ├── page.tsx       # Courses listing
│   │   └── [id]/         # Dynamic course detail pages
│   │       └── page.tsx
│   ├── login/             # Authentication
│   │   └── page.tsx
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
├── contexts/              # React context providers
├── data/                  # Static data files
└── styles/                # Additional styling
```

## Key Components

### 1. Home Page (`/src/app/page.tsx`)

**Purpose**: Main landing page with video background and course highlights.

**Key Features**:
- Responsive video background with overlay content
- Course recommendations (GitHub and Docker courses)
- Professor information section
- Dark/light mode toggle
- Language switch integration

**Technical Implementation**:
```typescript
// Uses CSS variables for theming
<div style={{ 
  backgroundColor: 'var(--background)',
  minHeight: 'calc(100vh - 80px)'
}}>

// Video background section
<video autoPlay loop muted playsInline>
  <source src="/bg_video.mp4" type="video/mp4" />
</video>

// Dynamic content based on language context
<h1>{t('home.title')}<br />
  <span style={{ color: 'var(--primary-light)' }}>
    {t('home.subtitle')}
  </span>
</h1>
```

### 2. Courses Page (`/src/app/courses/page.tsx`)

**Purpose**: Displays all courses in a grid layout with filtering capabilities.

**Key Features**:
- Course filtering by year, semester, and difficulty
- Grouping by academic year/semester
- Statistics dashboard
- Responsive grid layout

**Technical Implementation**:
```typescript
// State management for filters
const [selectedYear, setSelectedYear] = useState<number | null>(null);
const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

// Course filtering logic
const filteredCourses = curriculum.filter(course => {
  if (selectedYear && course.year !== selectedYear) return false;
  if (selectedSemester && course.semester !== selectedSemester) return false;
  if (selectedDifficulty && course.difficulty !== selectedDifficulty) return false;
  return true;
});

// Course grouping
const groupedCourses = filteredCourses.reduce((acc, course) => {
  const key = `Year ${course.year} Semester ${course.semester}`;
  if (!acc[key]) acc[key] = [];
  acc[key].push(course);
  return acc;
}, {} as Record<string, CourseContent[]>);
```

### 3. Course Detail Page (`/src/app/courses/[id]/page.tsx`)

**Purpose**: Detailed view of individual courses with comprehensive information.

**Key Features**:
- Dynamic routing based on course ID
- Detailed course information display
- Tools and technologies section
- Video lessons section
- Breadcrumb navigation

**Technical Implementation**:
```typescript
// Dynamic route parameter handling
interface CourseDetailPageProps {
  params: {
    id: string;
  };
}

// Course data retrieval
const course = curriculum.find(c => c.id === params.id);

// Error handling for non-existent courses
if (!course) {
  notFound();
}

// Responsive grid layout
<div className="course-main-grid gap-8">
  <div className="space-y-8"> {/* Main content */}
  <div className="space-y-6"> {/* Sidebar */}
```

### 4. Admin Dashboard (`/src/app/admin/page.tsx`)

**Purpose**: Administrative interface for managing courses and users.

**Key Features**:
- Dashboard with statistics
- Course management interface
- User management system
- Settings configuration

**Technical Implementation**:
```typescript
// Mock authentication state
const [isLoggedIn, setIsLoggedIn] = useState(false);

// Dashboard statistics calculation
const totalCourses = curriculum.length;
const beginnerCourses = curriculum.filter(c => c.difficulty === 'beginner').length;
const totalTools = [...new Set(curriculum.flatMap(c => c.tools.map(t => t.name)))].length;

// Responsive data tables
<div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200">
    {/* Table content */}
  </table>
</div>
```

### 5. Login Page (`/src/app/login/page.tsx`)

**Purpose**: User authentication interface.

**Key Features**:
- Email/password form
- Form validation
- Mock authentication
- Responsive design

**Technical Implementation**:
```typescript
// Form state management
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

// Form submission handler
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Mock authentication logic
  if (email && password) {
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/admin');
  } else {
    setError('Please fill in all fields');
  }
};
```

## Core Components

### CourseCard Component (`/src/components/CourseCard.tsx`)

**Purpose**: Reusable card component for displaying course information.

**Key Features**:
- Responsive design
- Dynamic difficulty badges
- Year/semester indicators
- Tool previews

**Technical Implementation**:
```typescript
// Dynamic styling based on course properties
const getYearColor = (year: number) => {
  switch (year) {
    case 1: return 'badge-year-1';
    case 2: return 'badge-year-2';
    default: return 'badge-year-default';
  }
};

// Conditional rendering based on language
<h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
  {language === 'th' ? course.title : course.titleEn}
</h3>
```

### Language Switch (`/src/components/LanguageSwitch.tsx`)

**Purpose**: UI component for switching between Thai and English.

**Key Features**:
- Toggle switch design
- Flag-based styling
- Smooth transitions
- Persistent state

**Technical Implementation**:
```typescript
// Context integration
const { language, setLanguage } = useLanguage();

// Toggle functionality
<div onClick={() => setLanguage(language === 'th' ? 'en' : 'th')}>

// Dynamic styling based on current language
<div style={{
  left: language === 'th' ? '4px' : 'calc(100% - 28px)'
}}>
```

### Dark Mode Toggle (`/src/components/DarkModeToggle.tsx`)

**Purpose**: UI component for switching between light and dark themes.

**Key Features**:
- Toggle switch with sun/moon icons
- Persistent theme preference
- Glowing effects
- Smooth transitions

**Technical Implementation**:
```typescript
// Theme persistence
useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    setIsDarkMode(true);
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}, []);

// Theme switching
const toggleDarkMode = () => {
  const newMode = !isDarkMode;
  setIsDarkMode(newMode);
  document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
  localStorage.setItem('theme', newMode ? 'dark' : 'light');
};
```

## Data Management

### Curriculum Data (`/src/data/curriculum.ts`)

**Purpose**: Centralized storage of all course information.

**Structure**:
```typescript
interface CourseContent {
  id: string;
  title: string;
  titleEn: string;
  year: number;
  semester: number;
  description: string;
  descriptionEn?: string;
  fullDescription: string;
  fullDescriptionEn: string;
  objectives: string[];
  objectivesEn: string[];
  topics: string[];
  topicsEn: string[];
  tools: Tool[];
  prerequisites?: string[];
  credits?: number;
  duration?: string;
  image?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}
```

### Language Context (`/src/contexts/LanguageContext.tsx`)

**Purpose**: Global state management for language preferences.

**Implementation**:
```typescript
// Translation system
const translations = {
  th: {
    'nav.home': 'หน้าหลัก',
    'nav.courses': 'คอร์สเรียน',
    // ... more translations
  },
  en: {
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    // ... more translations
  }
};

// Translation function
const t = (key: string): string => {
  return translations[language][key as keyof typeof translations['th']] || key;
};
```

## Styling System

### CSS Variables (`/src/app/globals.css`)

**Purpose**: Theme management through CSS custom properties.

**Implementation**:
```css
/* Light theme variables */
:root {
  --background: #ffffff;
  --foreground: #000000;
  --card-background: #ffffff;
  --primary-light: #60a5fa;
}

/* Dark theme variables */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ffffff;
    --card-background: #1a1a1a;
  }
}

/* Explicit theme overrides */
html[data-theme="dark"] {
  --background: #0a0a0a;
  --foreground: #ffffff;
}
```

## Responsive Design

**Implementation**:
```css
/* Mobile-first approach */
.grid-1 { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }

/* Responsive breakpoints */
@media (min-width: 768px) {
  .md-grid-2 { grid-template-columns: repeat(2, 1fr); }
  .md-flex { display: flex; }
}

@media (min-width: 1024px) {
  .lg-grid-3 { grid-template-columns: repeat(3, 1fr); }
}
```

## Performance Optimizations

1. **Code Splitting**: Next.js automatic code splitting
2. **Image Optimization**: Using native `<img>` tags with proper sizing
3. **Lazy Loading**: Component-level lazy loading
4. **Minified Assets**: Production build optimization
5. **Caching**: localStorage for user preferences

## Accessibility Features

1. **Semantic HTML**: Proper heading hierarchy
2. **Keyboard Navigation**: Focus management
3. **Screen Reader Support**: ARIA labels
4. **Color Contrast**: WCAG compliant color schemes
5. **Reduced Motion**: `prefers-reduced-motion` support

## Deployment

The application is configured for deployment on Vercel with:
- Automatic Next.js detection
- TypeScript compilation
- Static asset optimization
- Serverless function deployment

## Future Enhancements

1. **Backend Integration**: API connection for dynamic data
2. **User Progress Tracking**: Learning progress management
3. **Quiz System**: Interactive assessments
4. **Video Streaming**: Integrated video player
5. **Social Features**: Discussion forums and collaboration tools