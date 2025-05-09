import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

const queryClient = new QueryClient();
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen?.hide();

    return () => {};
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{headerShown: false}} />
    </QueryClientProvider>
  );
}
