import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{ title: "Signin Screen" }}
      />
      <Stack.Screen
        name="sign-up"
        options={{ title: "Signup Screen" }}
      />
    </Stack>
  );
}
