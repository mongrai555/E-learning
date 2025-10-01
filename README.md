# CSMJU E-Learning Platform

A comprehensive e-learning platform for Computer Science students at Mae Jo University, built with Next.js 15, TypeScript, and custom CSS.

## Features

- **Responsive Design**: Works on all device sizes
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Multi-language Support**: Thai and English language switching
- **Course Management**: Browse and filter courses by year, semester, and difficulty
- **Video Content**: Embedded video lessons for each course
- **Admin Dashboard**: Course and user management (authentication required)

## Technology Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Custom CSS** (no external CSS frameworks)
- **React Context API** for state management
- **React Hooks** for component logic

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

```bash
npm run build
```

### Running Production Build

```bash
npm start
```

## Deployment

### Vercel Deployment

This project is configured for deployment to Vercel:

1. Push changes to the GitHub repository
2. Vercel will automatically detect and deploy the Next.js application
3. The `vercel.json` configuration file ensures proper build and routing

### Manual Deployment

To deploy manually:

1. Build the application:
   ```bash
   npm run build
   ```

2. Serve the built application:
   ```bash
   npm start
   ```

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── admin/             # Admin dashboard
│   ├── courses/           # Courses section
│   └── login/             # Authentication
├── components/            # Reusable UI components
├── contexts/              # React context providers
├── data/                  # Static data files
└── styles/                # Additional styling
```

## Customization

### Theme System

The application uses CSS variables for theming. Themes can be switched between light and dark modes:

- Light theme: Default with white background
- Dark theme: Dark background with light text

### Language Switching

The application supports Thai and English languages through a custom context provider.

## Troubleshooting

### Deployment Issues

If the deployed version looks different from the development version:

1. Ensure all theme-related CSS variables are properly defined in `globals.css`
2. Check that client-side theme preferences are properly initialized
3. Verify that the `vercel.json` configuration is correct
4. Clear browser cache and Vercel cache if needed

### Common Issues

1. **Videos not playing**: Ensure video files are in the `public` directory
2. **Theme not persisting**: Check localStorage implementation in `DarkModeToggle.tsx`
3. **Language not switching**: Verify `LanguageContext.tsx` implementation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a pull request

## License

This project is proprietary to Mae Jo University Computer Science Department.