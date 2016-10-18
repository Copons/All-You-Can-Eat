import uuid from 'node-uuid';
import {
  GRAB_SUSHI,
  DROP_SUSHI,
  FUMBLE_SUSHI,
} from '../actions';

const initialState = [
  {
    id: uuid.v4(),
    state: 'initial',
    x: 0,
    y: 0,
  },
];

const changeSushiState = (state, actionDetails, sushiState) => state.map(sushi => {
  if (sushi.id === actionDetails.id) {
    return {
      ...sushi,
      ...actionDetails,
      state: sushiState,
    };
  }
  return sushi;
});

export default function sushiReducer(state = initialState, action) {
  const { type, ...actionDetails } = action;
  switch (type) {
    case GRAB_SUSHI:
      return changeSushiState(state, actionDetails, 'grabbed');
    case DROP_SUSHI:
      return changeSushiState(state, actionDetails, 'dropped');
    case FUMBLE_SUSHI:
      return changeSushiState(state, actionDetails, 'fumbled');
    default:
      return state;
  }
}
