import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: "#92bee8ff",
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          paddingHorizontal: 10,
        },
      }}
    >
      <Tabs.Screen
        name="care"
        options={{
          title: "care",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="play"
        options={{
          title: "play",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="play" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          tabBarIcon: ({ color }) => (
            <Entypo name="user" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
