const intialState = {token: null};
export const fcmToken = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_FCMTOKEN':
      return {...state, token: action.payload};
    default:
      return state;
  }
};
