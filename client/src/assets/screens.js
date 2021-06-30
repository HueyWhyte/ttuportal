const size = {
  mobile: "375px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
