import React, {useEffect} from 'react';
import {requestUserPermission} from './Util/NotificationService';
import {setToken} from './Redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';
export default () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.fcmToken);
  console.log(state);
  useEffect(() => {
    requestUserPermission(token => {
      dispatch(setToken(token)); //call action creator
    });
  }, []);
  return <></>;
};
