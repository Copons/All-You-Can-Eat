import {
  GRAB_SUSHI,
  DROP_SUSHI,
  FUMBLE_SUSHI,
} from '../actions';

export const grabSushi = id => ({
  type: GRAB_SUSHI,
  id,
});

export const dropSushi = (id, x, y) => ({
  type: DROP_SUSHI,
  id,
  x,
  y,
});

export const fumbleSushi = (id, x, y) => ({
  type: FUMBLE_SUSHI,
  id,
  x,
  y,
});
