import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission(getToken) {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken(token => {
      getToken(token); //tokenCallback to pass in react component so, that could use in react component
    });
  }
}

const getFcmToken = async holdFcmToken => {
  try {
    const getFcmToken = await AsyncStorage.getItem('fcmToken'); // getToken from asyncStorage
    // console.log(getFcmToken, 'old token');
    if (getFcmToken) {
      holdFcmToken(getFcmToken);
    }

    if (!getFcmToken) {
      const fcmToken = await messaging().getToken(); // generate token
      //   console.log(fcmToken, 'new token');
      AsyncStorage.setItem('fcmToken', fcmToken);
      holdFcmToken(fcmToken);
    }
    // await AsyncStorage.removeItem('fcmToken');
  } catch (err) {
    console.log(err);
  }
};
