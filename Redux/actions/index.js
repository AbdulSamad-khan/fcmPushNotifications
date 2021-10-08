export const setToken = fcmToken => {
  return {
    type: 'SET_FCMTOKEN',
    payload: fcmToken,
  };
};
