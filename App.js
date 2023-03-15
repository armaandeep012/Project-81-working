import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CreatePost from "./screens/CreatePost";
import Feed from "./screens/Feed";
import Iconicons from "react-native-vector-icons/Ionicons";
import { View, Text, Button, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveBackgroundColor: "grey",
          tabBarLabelPosition: "beside-icon",
          tabBarActiveTintColor: "black",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 30,
            marginBottom: 20,
            fontWeight: "500",
          },
          headerStyle: { backgroundColor: "black" },
          tabBarStyle: { backgroundColor: "lightgrey" },
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabelStyle: { fontWeight: "bold" },
            tabBarIcon: () => <Iconicons name="book" size={20} />,
          }}
        />
        <Tab.Screen
          name="CreatePost"
          component={CreatePost}
          options={{
            tabBarLabelStyle: {
              fontWeight: "bold",
            },
            tabBarIcon: () => <Iconicons name="md-create-sharp" size={20} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
