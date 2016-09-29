const defaultArrow = {
  width: '0px',
  height: '0px',
  position: 'absolute',
};

export const arrowUp = ({ color, size }) =>
Object.assign({}, defaultArrow, {
  borderLeft: `${size}px solid transparent`,
  borderRight: `${size}px solid transparent`,
  borderBottom: `${size}px solid ${color}`,
  top: `-${size}px`,
});

export const arrowDown = ({ color, size }) =>
Object.assign({}, defaultArrow, {
  borderLeft: `${size}px solid transparent`,
  borderRight: `${size}px solid transparent`,
  borderTop: `${size}px solid ${color}`,
});

export const arrowRight = ({ color, size }) =>
Object.assign({}, defaultArrow, {
  borderTop: `${size}px solid transparent`,
  borderBottom: `${size}px solid transparent`,
  borderLeft: `${size}px solid ${color}`,
});

export const arrowLeft = ({ color, size }) =>
Object.assign({}, defaultArrow, {
  borderTop: `${size}px solid transparent`,
  borderBottom: `${size}px solid transparent`,
  borderRight: `${size}px solid ${color}`,
  left: `-${size}px`,
});
