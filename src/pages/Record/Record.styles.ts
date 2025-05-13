import { css } from '../../../styled-system/css';

export const layout = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  w: '100vw',
  p: '3rem 2rem',
});

export const buttonList = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  flexWrap: 'wrap',
});

export const button = css({
  p: '0.4rem 1.4rem',
  border: '1px solid',
  borderColor: 'blue.800',
  rounded: 'full',

  bg: 'white',
  color: 'blue.800',
  textStyle: 'sm',

  cursor: 'pointer',
  transition: 'all 0.2s',

  _hover: {
    bg: 'blue.100',
  },

  _active: {
    bg: 'blue.100',
  },
});

export const list = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  textStyle: 'body',
});
