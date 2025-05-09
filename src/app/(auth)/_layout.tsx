import {Stack} from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack initialRouteName='OnBoardingScreen'>
      <Stack.Screen name='OnBoardingScreen' options={{title: 'OnBoarding Screen'}} />
      <Stack.Screen name='ForgotPasswordScreen' options={{title: 'Forgot Password Screen'}} />
      <Stack.Screen name='SignInScreen' options={{title: 'Signin Screen'}} />
      <Stack.Screen name='SignUpScreen' options={{title: 'Signup Screen'}} />
      <Stack.Screen name='ConfirmSignUpScreen' options={{title: 'Confirm SignUp Screen'}} />
      <Stack.Screen name='ResetPasswordScreen' options={{title: 'Reset Password Screen'}} />
    </Stack>
  );
}
