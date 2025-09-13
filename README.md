# Kanji Buddy - Kanji Learning Application

## Overview

Kanji Buddy is a modern web application designed to help users learn and master Japanese Kanji characters. Built with cutting-edge web technologies, it offers an intuitive and engaging learning experience for students of all levels.

## 🚀 Tech Stack

- Frontend Framework: React 18
- Build Tool: Vite
- Styling:
  - Tailwind CSS (for utility-first styling)
  - Material-UI (MUI) (for component library and theming)
- Routing: React Router v6
- Icons: Material-UI Icons
- State Management: React Hooks (useState, useContext)

## 🚀 FeaturesInteractive Kanji Learning:

- Study Kanji characters with detailed information including meanings, and readings
- Spaced Repetition System: Smart review scheduling based on the proven spaced repetition technique
- Progress Tracking: Monitor your learning progress with detailed statistics and analytics
- Responsive Design: Works seamlessly on desktop, tablet, and mobile devices
- User Authentication: Secure login and personalized learning experience

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd kanji-buddy
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 📦 Project Structure

```text
kanji-buddy/
├── public/
│ └── favicon.ico
├── src/
│ ├── components/
│ │ ├── SidebarMenu.jsx
│ │ └── (other components)
│ ├── pages/
│ │ ├── Dashboard.jsx
│ │ ├── Login.jsx
│ │ ├── KnowledgeBank.jsx
│ │ └── (other pages)
│ ├── theme.js
│ ├── App.jsx
│ └── main.jsx
├── package.json
└── vite.config.js
```

## 🎨 Customization

The application uses a custom teal color theme defined in `theme.js`:

```js
const tealTheme = createTheme({
  palette: {
    primary: {
      main: '#008080',
      light: '#4fb3bf',
      dark: '#005354',
      contrastText: '#ffffff',
    },
    // ... other theme settings
  },
});
```

You can customize the color scheme by modifying these values in the theme configuration.

## 📱 Responsive Design

The application features a responsive sidebar that:

- Expands fully on desktop devices
- Collapses to a compact icon-only view when space is limited
- Transforms into a mobile drawer on small screens
- Maintains accessibility across all device sizes

## 🔮 Future Enhancements

- Kanji quiz and testing system
- Stroke order animation and practice
- Vocabulary building with example sentences
- Integration with popular kanji dictionaries
- Social features and learning communities
- Offline learning capability

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Japanese language educators and students for their feedback
- The React, Vite, Tailwind CSS, and Material-UI communities
- Contributors and supporters of the project

Kanji Buddy - Making Kanji learning enjoyable and effective! 🇯🇵✨
