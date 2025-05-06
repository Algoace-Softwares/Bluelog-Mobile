import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return <Redirect href="/sign-in" />;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="details" />
    </Stack>
  );
}
