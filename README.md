# Elevate Animation Project

A stunning React animation featuring a synchronized sequence of a starburst icon, animated triangle with gradient fill, and bold "ELEVATE" text. Built with React.js, Framer Motion, and Tailwind CSS.

## ✨ Features

- **Interactive Animation Trigger**: Click the "Play Animation" button to start the sequence
- **Synchronized Elements**: All animation elements are perfectly timed and coordinated
- **Smooth Transitions**: Powered by Framer Motion for buttery-smooth animations
- **Responsive Design**: Works seamlessly across different screen sizes
- **Modern UI**: Clean, dark theme with gradient accents

## 🎬 Animation Sequence

1. **Starburst Icon**: Animates from off-screen with scaling, rotation, and opacity effects
2. **Triangle Shape**: Features a dynamic gradient fill animation that sweeps across the shape
3. **ELEVATE Text**: Bold typography with fade-in/fade-out effects
4. **Synchronized Movement**: All elements move upward together in the final phase

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd growthx assignment
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- **[React.js](https://nextjs.org/)** 
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library for React
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

## 🎨 Customization

### Animation Timing

You can adjust the animation timing by modifying the `transition` objects in the components:

\`\`\`tsx
// In animation.tsx
transition={{
  delay: 1.8,        // Start delay
  duration: 1,       // Animation duration
  ease: "easeInOut", // Easing function
}}
\`\`\`

### Colors and Styling

The project uses Tailwind CSS classes. Key styling elements:

- **Background**: `bg-black` - Dark background
- **Text**: `text-white` - White text color
- **Button**: Gradient from purple to blue
- **Triangle**: White stroke with black gradient fill

## 🎯 Animation Controls

### Trigger Function

The animation is controlled by the `triggerAnimation` function:

\`\`\`tsx
const triggerAnimation = () => {
  setIsAnimating(false)
  setTimeout(() => {
    setKey((prev) => prev + 1)
    setIsAnimating(true)
  }, 100)
}
\`\`\`

### Animation States

- `isAnimating`: Controls whether the animation sequence is active
- `key`: Forces component re-render for animation replay
- `gradientPosition`: Controls the triangle's gradient fill progress

## 🔧 Advanced Features

### Memory Management

The triangle component includes proper cleanup to prevent memory leaks:

- Clears intervals on component unmount
- Resets animation state between plays
- Uses refs to track animation status

### Performance Optimization

- Uses `useAnimationControls` for precise animation control
- Implements conditional rendering to avoid unnecessary re-renders
- Optimized SVG rendering with proper viewBox settings

## 📱 Responsive Design

The animation is fully responsive and adapts to different screen sizes:

- Flexible container sizing
- Scalable SVG elements
- Responsive typography
- Mobile-friendly button placement

## 🎪 Animation Sequence Details

### Phase 1: Starburst (0-2.7s)
- Enters from top-left corner
- Scales from 0.5x to 1.5x
- Rotates 180 degrees
- Fades in and out

### Phase 2: Triangle (0-4s)
- Fades in gradually
- Gradient sweeps from bottom-left to top-right
- Maintains visibility throughout sequence

### Phase 3: Text (2-3.7s)
- "ELEVATE" text fades in
- Holds visibility
- Fades out at sequence end

### Phase 4: Upward Movement (1.8-2.8s)
- All elements move up 50px
- Synchronized timing
- Smooth easing

## 🐛 Known Issues

- Animation may not replay correctly if triggered rapidly (intentional debounce)
- SVG rendering may vary slightly across different browsers

## 🔮 Future Enhancements

- [ ] Multiple animation presets
- [ ] Speed control slider
- [ ] Loop animation option
- [ ] Sound effects integration
- [ ] Animation timeline visualization
- [ ] Export animation as video/GIF

## Loom Recording
(https://drive.google.com/file/d/1keJZ91aDL2mADpa0-0E7ttDMJP-Si64W/view?usp=sharing)

---

**Made with ❤️ and lots of ☕**
