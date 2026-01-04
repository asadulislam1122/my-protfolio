# MD Asadullah Portfolio - One-Page React Website with CSS Animations

A modern, responsive one-page portfolio website built with React, JavaScript, and CSS animations, featuring scroll-triggered effects and smooth interactions.

## Features

- **CSS Animations** - Smooth scroll-triggered and interactive animations
- **Scroll-Linked Effects** - Parallax scrolling and scroll-based transformations
- **One-Page Layout** - All content on a single scrollable page
- **Smooth Scrolling Navigation** - Click nav items to scroll smoothly to sections
- **Active Section Highlighting** - Navigation shows current section while scrolling
- **Perfect Section Positioning** - Sections appear at top of screen when navigated to
- **React + Vite** - Fast development and build setup
- **Tailwind CSS** - Utility-first CSS framework with custom animations
- **Component Architecture** - Modular, reusable components
- **Dark Mode** - Built-in dark theme support
- **Responsive Design** - Mobile-first approach
- **Material Icons** - Google Material Symbols
- **Interactive Forms** - Contact form with validation and animations
- **Micro-Interactions** - Hover effects, button animations, and visual feedback

## Animation Features

### Scroll-Triggered Animations
- **Intersection Observer** - Elements animate when they enter the viewport
- **Fade & Scale** - Elements fade and scale based on scroll position
- **Staggered Animations** - Sequential element animations with delays
- **Progress Bars** - Animated skill progress bars triggered by scroll

### Interactive Animations
- **Hover Effects** - Scale, rotate, and transform on hover
- **Button Interactions** - Press animations and micro-feedback
- **Form Focus** - Input field animations on focus
- **Navigation** - Smooth transitions and active state animations

### Background Animations
- **Floating Elements** - CSS keyframe animations for background shapes
- **Breathing Effects** - Subtle scale and opacity animations
- **Morphing Shapes** - CSS border-radius animations for organic shapes
- **Parallax Effects** - JavaScript-based parallax scrolling

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx          # Animated nav with scroll-linked background
│   ├── HeroSection.jsx         # Parallax hero with staggered animations
│   ├── AboutSection.jsx        # Scroll-triggered content animations
│   ├── AboutDetailSection.jsx  # Detailed skills with progress animations
│   ├── PortfolioSection.jsx    # Project showcase with hover effects
│   ├── ServicesSection.jsx     # Service cards with interactive animations
│   └── ContactSection.jsx      # Form animations and social interactions
├── App.jsx                     # Main application component
├── main.jsx                    # React entry point
└── index.css                   # Global styles with custom CSS animations
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Animation Techniques Used

### CSS Keyframes
- `fadeIn` - Opacity transitions
- `fadeInUp` - Slide up with fade
- `fadeInLeft/Right` - Horizontal slide animations
- `fadeInScale` - Scale with fade effect
- `expandWidth/Height` - Growing line animations
- `float` - Floating movement
- `morph` - Shape morphing animations
- `pulseSlow` - Breathing effects

### JavaScript Scroll Effects
- **Intersection Observer** - Trigger animations when elements enter viewport
- **Parallax Scrolling** - Transform elements based on scroll position
- **Navigation Background** - Dynamic opacity and blur on scroll
- **Section Detection** - Active navigation highlighting

### Scroll-Linked Features
- **Navigation Background** - Changes opacity and blur on scroll
- **Hero Parallax** - Content moves at different speeds while scrolling
- **Section Reveals** - Content animates in as you scroll
- **Scroll Indicators** - Visual feedback tied to scroll position

## Sections Overview

### Hero Section (#hero)
- **Parallax scrolling** with JavaScript transforms
- **Staggered text animations** on page load
- **Floating profile image** with morphing shapes
- **Interactive social buttons** with hover animations

### About Section (#about)
- **Scroll-triggered reveals** using Intersection Observer
- **Animated statistics** with staggered delays
- **Tech stack icons** with floating animations
- **Progress line** that expands on scroll

### Skills Section (#skills)
- **Animated progress bars** triggered by scroll
- **Skill cards** with hover transformations
- **Profile image** with gradient animations
- **Interactive resume button**

### Portfolio Section (#portfolio)
- **Project cards** with hover effects
- **Image scaling** and overlay animations
- **Status badges** with color transitions
- **Staggered grid** animations

### Services Section (#services)
- **Service cards** with interactive hover states
- **Icon animations** and micro-interactions
- **Price highlighting** on hover
- **Call-to-action** animations

### Contact Section (#contact)
- **Form field animations** on focus
- **Submit button** with hover states
- **Social icons** with floating animations
- **Divider lines** that expand on scroll

## Customization

- **Animation Timing**: Adjust durations and delays in CSS keyframes
- **Scroll Triggers**: Modify `rootMargin` values in Intersection Observer
- **Parallax Speed**: Change transform multipliers in scroll handlers
- **Hover Effects**: Customize hover classes in Tailwind
- **Colors**: Modify `tailwind.config.js` for custom color scheme
- **Content**: Update component text and images

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- CSS Keyframes & Animations
- Intersection Observer API
- Material Symbols
- PostCSS
- Autoprefixer

## Performance Considerations

- **CSS Animations** - Hardware-accelerated transforms and opacity
- **Intersection Observer** - Efficient scroll-based triggers
- **Reduced Motion** - Respects user's motion preferences
- **Optimized Animations** - Uses transform and opacity for 60fps performance

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive with touch interactions
- Dark mode compatible
- Smooth scrolling support
- CSS animation support