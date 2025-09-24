// Theme configuration with color palette, fonts, and spacing
export interface Theme {
  colors: {
    primary: {
      darkBlue: string;
      teal: string;
      orange: string;
    };
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    text: {
      primary: string;
      secondary: string;
      accent: string;
    };
    border: {
      primary: string;
      secondary: string;
    };
  };
  fonts: {
    primary: string;
    sizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    weights: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  transitions: {
    fast: string;
    medium: string;
    slow: string;
  };
}

// Light theme configuration
export const lightTheme: Theme = {
  colors: {
    primary: {
      darkBlue: '#1e293b', // Dark blue/black from logo inspiration
      teal: '#06b6d4', // Teal/cyan color
      orange: '#f97316', // Orange accent color
    },
    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#e2e8f0',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
      accent: '#0f172a',
    },
    border: {
      primary: '#e2e8f0',
      secondary: '#cbd5e1',
    },
  },
  fonts: {
    primary: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    sizes: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      md: '1rem',      // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
    },
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
    '3xl': '4rem',  // 64px
    '4xl': '6rem',  // 96px
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  transitions: {
    fast: 'all 0.15s ease-in-out',
    medium: 'all 0.3s ease-in-out',
    slow: 'all 0.5s ease-in-out',
  },
};

// Dark theme configuration
export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    primary: {
      darkBlue: '#3b82f6', // Lighter blue for dark mode
      teal: '#22d3ee', // Brighter teal for dark mode
      orange: '#fb923c', // Softer orange for dark mode
    },
    background: {
      primary: '#0f172a',
      secondary: '#1e293b',
      tertiary: '#334155',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
      accent: '#ffffff',
    },
    border: {
      primary: '#334155',
      secondary: '#475569',
    },
  },
};

// Default theme export
export const theme = lightTheme;