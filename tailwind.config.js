
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border:      "hsl(var(--border))",
        input:       "hsl(var(--input))",
        ring:        "hsl(var(--ring))",
        background:  "hsl(var(--background))",
        foreground:  "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT:    "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT:    "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT:             "hsl(var(--sidebar-background))",
          foreground:          "hsl(var(--sidebar-foreground))",
          primary:             "hsl(var(--sidebar-primary))",
          "primary-foreground":"hsl(var(--sidebar-primary-foreground))",
          accent:              "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border:              "hsl(var(--sidebar-border))",
          ring:                "hsl(var(--sidebar-ring))",
        },
        // Brand-specific tokens
        sage: {
          DEFAULT: "hsl(var(--sage))",
          dark:    "hsl(var(--sage-dark))",
          deep:    "hsl(var(--sage-deep))",
          glow:    "hsl(var(--sage-glow))",
        },
        warm: {
          DEFAULT: "hsl(var(--warm-white))",
          muted:   "hsl(var(--warm-muted))",
        },
        "dark-base":    "hsl(var(--dark-base))",
        "dark-mid":     "hsl(var(--dark-mid))",
        "dark-surface": "hsl(var(--dark-surface))",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans:  ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "fade-in-up": {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.94)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "fade-in-up":     "fade-in-up 0.7s ease-out both",
        "fade-in":        "fade-in 0.5s ease-out both",
        "scale-in":       "scale-in 0.4s ease-out both",
        shimmer:          "shimmer 3s linear infinite",
      },
      backgroundImage: {
        "gradient-hero":    "linear-gradient(160deg, hsl(150 40% 3%) 0%, hsl(150 32% 7%) 45%, hsl(152 28% 5%) 100%)",
        "gradient-section": "linear-gradient(180deg, hsl(150 32% 5%) 0%, hsl(150 26% 8%) 50%, hsl(150 32% 5%) 100%)",
        "gradient-dark":    "linear-gradient(135deg, hsl(150 38% 4%) 0%, hsl(153 30% 9%) 50%, hsl(150 35% 4%) 100%)",
        "gradient-footer":  "linear-gradient(180deg, hsl(150 35% 6%) 0%, hsl(150 40% 3%) 100%)",
        "sage-shimmer":     "linear-gradient(90deg, transparent, hsl(153 23% 61% / 0.3), transparent)",
      },
      boxShadow: {
        "sage-glow":   "0 0 40px hsl(153 30% 45% / 0.2), 0 0 80px hsl(153 30% 45% / 0.08)",
        "sage-card":   "0 4px 24px hsl(153 30% 45% / 0.1), inset 0 1px 0 hsl(153 25% 55% / 0.1)",
        "image-depth": "0 20px 60px hsl(150 40% 3% / 0.6)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 
