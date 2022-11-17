
const theme = {
  primaryColor: "#fff",
  breakpoints: {
    mobile: "540px",
    tablet: "768px",
    desktop: "1024px",
  },
} as const;

export type Theme = typeof theme;
export default theme;
