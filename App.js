import { Provider } from 'react-redux'
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { store } from './redux/itemStore'
import { Home } from './screens/Home'

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

let persistor = persistStore(store);

export default function App() {

  const [isLoaded] = useFonts({
    "man-bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "man-semibold": require("./assets/fonts/Manrope-SemiBold.ttf"),
    "man-medium": require("./assets/fonts/Manrope-Medium.ttf"),
    "man-regular": require("./assets/fonts/Manrope-Regular.ttf"),
  });
  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);

  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Home handleOnLayout={handleOnLayout}/>
    </PersistGate>
  </Provider>
  )
}

