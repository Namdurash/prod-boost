import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToStorage = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(`Error has happened on set to storage: ${e}`);
  }
};

export const getFromStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.error(`Error has happened on get from storage: ${e}`);
  }
};
