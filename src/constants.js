export const COLORS = {
  white: "0 0% 100%",
  cyan: {
    1: "184 91% 17%",
    2: "185 84% 25%",
    3: "185 81% 29%",
    4: "184 77% 34%",
    5: "185 62% 45%",
    6: "185 57% 50%",
    7: "184 65% 59%",
    8: "184 80% 74%",
    9: "185 94% 87%",
    10: "186 100% 94%",
  },
  gray: {
    1: "209 61% 16%",
    2: "211 39% 23%",
    3: "209 34% 30%",
    4: "209 28% 39%",
    5: "210 22% 49%",
    6: "209 23% 60%",
    7: "211 27% 70%",
    8: "210 31% 80%",
    9: "212 33% 89%",
    10: "210 36% 96%",
  },
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
