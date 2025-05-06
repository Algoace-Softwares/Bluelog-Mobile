import { IMAGES, SVG } from "../assets";
import { en } from "../labels";
import BottomTab from "../routes/BottomTab";
import {
  ConfirmSignupScreen,
  ForgotChangePassScreen,
  ForgotPasswordScreen,
  HomeScreen,
  LoginScreen,
  OnBoardingScreen,
  ProfileScreen,
  SettingScreen,
  SignupScreen,
} from "../screens";
import ContactScreen from "../screens/ContactScreen/ContactScreen";

/*
 ** Authentication screen
 */
export const authScreens = [
  {
    id: 1,
    screenName: "OnBoardingScreen",
    component: OnBoardingScreen,
  },
  {
    id: 2,
    screenName: "ConfirmSignupScreen",
    component: ConfirmSignupScreen,
  },
  {
    id: 3,
    screenName: "LoginScreen",
    component: LoginScreen,
  },
  {
    id: 4,
    screenName: "ForgotPasswordScreen",
    component: ForgotPasswordScreen,
  },
  {
    id: 5,
    screenName: "SignupScreen",
    component: SignupScreen,
  },
  {
    id: 6,
    screenName: "ForgotChangePassScreen",
    component: ForgotChangePassScreen,
  },
  {
    id: 7,
    screenName: "ContactScreen",
    component: ContactScreen,
  },
];

/*
 ** Home stack screen
 */
export const homeScreen = [
  {
    id: 1,
    screenName: "BottomTab",
    component: BottomTab,
  },
  {
    id: 2,
    screenName: "SettingScreen",
    component: SettingScreen,
  },
];

/*
 **  Bottom tab screens
 */

export const TabScreens = [
  {
    name: "HomeScreen",
    component: HomeScreen,
    tabBarIcon: SVG.HomeIcon,
    tabBarLabel: en.home,
  },

  {
    name: "Profilescreen",
    component: ProfileScreen,
    tabBarIcon: SVG.ProfileIcon,
    tabBarLabel: en.profile,
  },
];

export const onBoardingData = [
  {
    id: 1,
    path: IMAGES.onBoarding1,
  },
  { id: 2, path: IMAGES.onBoarding2 },
  { id: 3, path: IMAGES.onBoarding3 },
];
