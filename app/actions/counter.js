// @flow
import type { counterStateType } from '../reducers/counter';

type actionType = {
  +type: string
};

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment() {
  console.log('[counter.js]','action','increment');
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  console.log('[counter.js]','action','decrement');
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  console.log('[counter.js]','action','incrementIfOdd');
  return (dispatch: (action: actionType) => void, getState: () => counterStateType) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  console.log('[counter.js]','action','incrementAsync');
  return (dispatch: (action: actionType) => void) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
