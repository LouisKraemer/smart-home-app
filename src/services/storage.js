import AsyncStorage from '@react-native-community/async-storage';

export const getToken = async () => {
  try {
    const serializedToken = await AsyncStorage.getItem('token');
    return serializedToken;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export const setToken = (token) => {
  try {
    AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log('error', error);
  }
};
