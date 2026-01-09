export const theme = {
  colors: {
    // Primary brand colors - green shades with better contrast
    primary: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#16a34a", // Main primary green
      600: "#15803d",
      700: "#166534",
      800: "#14532d",
      900: "#052e16",
      950: "#022c22",
    },
    // Accent colors - complementary teal/emerald shades
    accent: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981", // Main accent teal/emerald
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22",
    },
    // Neutral colors with improved contrast
    neutral: {
      50: "#ffffff", // Pure white for maximum contrast
      100: "#f8fafc",
      200: "#f1f5f9",
      300: "#e2e8f0",
      400: "#cbd5e1", // Lighter for better contrast
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617",
    },
    // Semantic colors with better contrast
    success: "#059669", // Darker for better contrast
    warning: "#d97706", // Darker for better contrast
    error: "#dc2626", // Darker for better contrast
    info: "#0891b2", // Darker for better contrast
  },
  gradients: {
    primary: "linear-gradient(135deg, #16a34a 0%, #10b981 100%)",
    secondary: "linear-gradient(135deg, #22c55e 0%, #14b8a6 100%)",
    accent: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)",
    hero: "linear-gradient(135deg, #15803d 0%, #059669 100%)",
    card: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 250, 252, 0.95) 100%)",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.08)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.08)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)",
    glow: "0 0 20px rgba(37, 99, 235, 0.4)",
  },
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "2rem",
    "3xl": "3rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
  },
};

export type Theme = typeof theme;
