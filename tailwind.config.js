/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rolls-gold': '#C4A570',
        // Darker gold for gold text/links on LIGHT backgrounds (gray-50/white/cream),
        // where #C4A570 fails WCAG AA. #8A6D2F = 4.66:1 on gray-50. Use on light bars only.
        'rolls-gold-dark': '#8A6D2F',
        'rolls-black': '#0A0A0A',
        'rolls-silver': '#C0C0C0',
        'rolls-navy': '#1A1A2E',
        'rolls-burgundy': '#800020',
        'rolls-cream': '#F5F5DC',
      },
      fontFamily: {
        'display': ['var(--font-display)', 'Playfair Display', 'serif'],
        'body': ['var(--font-body)', 'Montserrat', 'sans-serif'],
        'arabic': ['var(--font-arabic)', 'Noto Sans Arabic', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'zoom-in': 'zoomIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}