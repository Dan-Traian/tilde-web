/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /^(text|bg|h|w)-/
    }
  ],
  darkMode: 'class',
  theme: {
    spacing: {
      0: '0',
      '0_5': 'var(--space0_5)',
      1: 'var(--space1)',
      '1_25': 'var(--space1_25)',
      '1_5': 'var(--space1_5)',
      2: 'var(--space2)',
      3: 'var(--space3)',
      4: 'var(--space4)',
      5: 'var(--space5)',
      6: 'var(--space6)',
      7: 'var(--space7)',
      8: 'var(--space8)',
      9: 'var(--space9)',
      10: 'var(--space10)',
      11: 'var(--space11)',
      12: 'var(--space12)',
      13: 'var(--space13)',
      negative0_5: 'var(--space-0_5)',
      negative1: 'var(--space-1)',
      negative1_5: 'var(--space-1_5)',
      negative2: 'var(--space-2)',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
      content: '1200px'
    },
    fontSize: {
      xs: ['var(--text-size-xs)', 'var(--text-line-height-xs)'],
      sm: ['var(--text-size-sm)', 'var(--text-line-height-sm)'],
      md: ['var(--text-size-md)', 'var(--text-line-height-md)'],
      lg: ['var(--text-size-lg)', 'var(--text-line-height-lg)'],
      xl: ['var(--text-size-xl)', 'var(--text-line-height-xl)'],
      'display-xs': ['var(--text-display-size-xs)', 'var(--text-display-line-height-xs)'],
      'display-sm': ['var(--text-display-size-sm)', 'var(--text-display-line-height-sm)'],
      'display-md': ['var(--text-display-size-md)', 'var(--text-display-line-height-md)'],
      'display-lg': ['var(--text-display-size-lg)', 'var(--text-display-line-height-lg)'],
      'display-xl': ['var(--text-display-size-xl)', 'var(--text-display-line-height-xl)'],
      'display-2xl': ['var(--text-display-size-2xl)', 'var(--text-display-line-height-2xl)']
    },
    borderColor: {
      white: 'var(--white)',
      default: 'var(--border-default)',
      light: 'var(--border-light)',
      hover: 'var(--border-hover)',
      dark: 'var(--dark-interface-border)',
      disabled: 'var(--border-disabled)'
    },
    backgroundColor: {
      white: 'var(--white)',
      black: 'var(--base-black)',
      background: 'var(--base-background)',
      'background-light': 'var(--base-background-light)',
      brand: {
        1: 'var(--brand-1)',
        2: 'var(--brand-2)',
        3: 'var(--brand-3)',
        4: 'var(--brand-4)'
      }
    },
    textColor: {
      white: 'var(--white)',
      primary: 'var(--grey-primary)',
      secondary: 'var(--grey-secondary)',
      tertiary: 'var(--grey-tertiary)',
      quartinary: 'var(--grey-quartinary)',
      disabled: 'var(--grey-disabled)'
    },
    gap:{
      1:'8px',
      2:'16px',
      3:'24px',
    },
    colors: {
      brand: {
        1: 'var(--brand-1)',
        2: 'var(--brand-2)',
        3: 'var(--brand-3)',
        4: 'var(--brand-4)'
      },

      transparent: 'transparent',
      border: {}
    },
    borderRadius: {
      none: '0',
      sm: 'var(--radius1)',
      md: 'var(--radius2)',
      lg: 'var(--radius3)',
      xl: 'var(--radius4)',
      full: '50%'
    },
    screens: {
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      tabletModule: '708px',
      laptopModule: '964px',
      desktopModule: '1220px'
    }
  },
  plugins: []
}
