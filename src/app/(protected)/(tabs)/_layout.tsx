import { Redirect, Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={28}
              name="home"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={28}
              name="settings"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={28}
              name="search"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="security"
        options={{
          title: "security",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              size={28}
              name="security"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
