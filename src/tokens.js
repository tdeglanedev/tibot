// ─────────────────────────────────────────────────────────────────────────────
// TIBOT DESIGN TOKENS
// JS mirror of design-system.css — use for Figma plugins, tooling, or
// any context where CSS variables aren't accessible.
// ─────────────────────────────────────────────────────────────────────────────

export const color = {
  // Background
  bg:        "#0f0e0d",
  surface:   "#161616",
  surface2:  "#1e1e1e",

  // Border
  border:      "rgba(255, 255, 255, 0.07)",
  borderHover: "rgba(255, 255, 255, 0.14)",

  // Text
  text:      "#f0ede8",
  textMuted: "rgba(240, 237, 232, 0.45)",

  // Accent
  accent:      "#c8b89a",
  accentDim:   "rgba(200, 184, 154, 0.12)",
  accentDark:  "#0e0e0e",

  // Semantic
  success: "#4caf7d",
  error:   "#e05c5c",
};

export const font = {
  family: "'Poppins', sans-serif",

  weight: {
    light:   300,
    regular: 400,
    medium:  500,
    bold:    600,
  },

  size: {
    "2xs": "10px",  // section labels
    xs:    "11px",  // muted meta, subtitles
    sm:    "12px",  // action buttons, link pills
    "sm+": "12.5px",// suggestions
    md:    "13px",  // project title, taglines
    base:  "14px",  // form inputs
    ui:    "16px",  // textarea (iOS minimum)
    lg:    "17px",  // header title
    xl:    "18px",  // project card title
  },

  lineHeight: {
    tight:   1.2,
    snug:    1.45,
    normal:  1.6,
    relaxed: 1.65,
    loose:   1.7,
  },

  letterSpacing: {
    tight:   "-0.01em",
    wide:    "0.04em",
    wider:   "0.05em",
    widest:  "0.08em",
    label:   "0.06em",
  },
};

export const space = {
  1:  "4px",
  2:  "8px",
  3:  "10px",
  4:  "12px",
  5:  "14px",
  6:  "16px",
  7:  "20px",
  8:  "24px",
  9:  "28px",
  10: "32px",
};

export const radius = {
  sm:   "4px",
  md:   "8px",
  lg:   "16px",
  full: "9999px",
};

export const layout = {
  maxWidthConversation: "720px",
  widthSidePanel:       "360px",
  paddingContainer:     "20px",
};

export const transition = {
  fast: "0.15s",
  base: "0.2s",
  slow: "0.3s",
};

export const breakpoint = {
  mobile: "768px",
  small:  "480px",
};

// ─── COMPONENT TOKENS ────────────────────────────────────────────────────────
// Semantic groupings for component-level decisions.

export const components = {
  avatar: {
    sizeLg: "48px",  // header avatar
    sizeSm: "28px",  // message avatar
  },

  button: {
    // Filled (send, contact-send, side-panel-contact-btn, project-card-cta)
    filled: {
      background: color.accent,
      color:      color.accentDark,
      borderRadius: radius.full,
    },
    // Ghost pill (action-btn, explore-btn, header-link, suggestion)
    ghost: {
      background:   "transparent",
      border:       `1px solid ${color.border}`,
      color:        color.accent,
      borderRadius: radius.full,
    },
    // Ghost muted (cancel, side-panel-mini-btn, lang-btn inactive)
    muted: {
      background:   "transparent",
      border:       `1px solid ${color.border}`,
      color:        color.textMuted,
      borderRadius: radius.full,
    },
    // Icon circle (send-btn, mic-btn)
    icon: {
      size: "30px",
      borderRadius: radius.full,
    },
  },

  input: {
    background:   color.surface,
    border:       `1px solid ${color.border}`,
    borderFocus:  `1px solid ${color.borderHover}`,
    borderRadius: radius.md,
    color:        color.text,
    placeholderColor: color.textMuted,
  },

  card: {
    background:   color.surface2,
    border:       `1px solid ${color.border}`,
    borderRadius: radius.sm,
    imageHeight:  "160px",
  },

  sidePanel: {
    width:        "360px",
    background:   color.surface,
    border:       `1px solid ${color.border}`,
    // Mobile bottom sheet
    mobileHeight: "75vh",
    borderRadius: `${radius.lg} ${radius.lg} 0 0`,
  },

  badge: {
    // Metric pill on project cards
    background:   color.accentDim,
    border:       "1px solid rgba(200, 184, 154, 0.2)",
    color:        color.accent,
    borderRadius: radius.full,
  },

  typingDot: {
    size:      "5px",
    color:     color.textMuted,
    animation: "pulse 1.2s ease infinite",
  },
};

// ─── ANIMATION TOKENS ─────────────────────────────────────────────────────────

export const animation = {
  fadeUp:   "fadeUp 0.25s ease",
  shimmer:  "shimmer 1.5s ease infinite",
  blink:    "blink 0.7s step-end infinite",
  pulse:    "pulse 1.2s ease infinite",
  micPulse: "micPulse 1s ease infinite",
};

// ─── DEFAULT EXPORT ───────────────────────────────────────────────────────────

const tokens = { color, font, space, radius, layout, transition, breakpoint, components, animation };
export default tokens;
