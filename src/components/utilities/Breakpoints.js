import { css } from 'styled-components';

const size = {
  xXLarge: 1600,
  xLarge: 1440,
  large: 1280,
  medium: 1024,
  small: 768,
  xSmall: 640,
  xXSmall: 500,
};

export const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
console.log('below', below);

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
console.log('above', above);
