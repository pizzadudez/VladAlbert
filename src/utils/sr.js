import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal();

const sharedOptions = {
  origin: 'bottom',
  distance: '20px',
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
  fadeDown: (delay = 200) => ({
    ...sharedOptions,
    delay,
    origin: 'bottom',
  }),
  fadeRight: (delay = 200) => ({
    ...sharedOptions,
    delay,
    origin: 'right',
  }),
};

export default sr;
