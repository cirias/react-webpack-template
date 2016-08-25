import { Map } from 'immutable';
import { types } from './actions';

const {
  LOAD,
  LOADED,
} = types;

export const initState = new Map({
  loading: false,
  greeting: 'Uhhhhh...',
});

export const reducer = (state, action) => {
  switch (action.type) {
    case LOAD: {
      return state.set('loading', true);
    }

    case LOADED: {
      const { greeting } = action.payload;

      return state
        .set('loading', false)
        .set('greeting', greeting);
    }

    default:
      return state;
  }
};
