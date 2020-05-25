import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal();

const sharedOptions = {
  origin: 'bottom',
  distance: '0px',
  duration: 500,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor: 0.25,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
};

sr.options = {
  fadeUp: (delay = 200) => ({
    ...sharedOptions,
    delay,
    origin: 'bottom',
    distance: '20px',
  }),
  fadeRight: (delay = 200) => ({
    ...sharedOptions,
    delay,
    origin: 'right',
    distance: '20px',
  }),
  fadeLeft: (delay = 200) => ({
    ...sharedOptions,
    delay,
    origin: 'left',
    distance: '20px',
  }),
  grow: (delay = 200) => ({
    ...sharedOptions,
    delay,
    scale: 0.9,
  }),
};

export default sr;
