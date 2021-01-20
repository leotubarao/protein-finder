const breakpoint = {
  xs: {
    max: '575.98px',
  },
  sm: {
    min: '576px',
    max: '767.98px',
  },
  md: {
    min: '768px',
    max: '991.98px',
  },
  lg: {
    min: '992px',
    max: '1199.98px',
  },
  xl: {
    min: '1200px',
  },
};

const colors = {
  green: '#0B5742',
  red: '#c53030',
  grays: {
    g0: '#3a3a3a',
    g1: '#cbcbd6',
    g2: '#a8a8b3',
    g3: '#737380',
    g4: '#6c6c80',
    g5: '#3d3d4d',
  },
  white: '#FFF',
};

const { innerWidth } = window;
const { clientWidth } = document.body;

const sizeScroll = innerWidth - clientWidth;

export { breakpoint, colors, sizeScroll };
