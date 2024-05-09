import { StatusBar } from "expo-status-bar";
// import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/Welcome";
import NFTDetails from "./screens/NFTDetails";
import Home from "./screens/Home";
import Buy from "./screens/Buy";
import Login from "./screens/LoginScreen";
// import Buy1 from "./screens/Buy1";
// import "/index.css";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="light" animated={true} hidden={true} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}
        >
        <Stack.Screen name="LoginScreen" component={Login}/>
          <Stack.Screen name="BuyScreen" component={Buy} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="NFTDetails" component={NFTDetails} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          {/* <Stack.Screen name="NFT-Details" component={NFTDetails} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
