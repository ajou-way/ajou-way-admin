import { css } from '../../../styled-system/css';

export const layout = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  w: '100vw',
  p: '3rem 2rem',

  textStyle: 'body',
});

export const radio = css({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5',
});

export const inputField = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const saveButton = css({
  w: 'full',
  p: '2',
  rounded: 'lg',
  bg: 'blue.400',
  color: 'white',
  fontSize: 'sm',
});
