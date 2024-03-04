import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen"; // export default
import DetailScreen from "./components/DetailScreen";

const Stack = createNativeStackNavigator();
export default function App() {
 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pokedex">
        <Stack.Screen name="Pokedex" component={HomeScreen} />
        <Stack.Screen name="Pokemon" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );


}
