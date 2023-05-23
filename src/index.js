import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import BuscarProduto from "./screens/BuscarProduto";
import HomeScreen from "./screens/HomeScreen";
import BuscarAnimal from "./screens/BuscarAnimal";
import BuscarCarro from "./screens/BuscarCarro";
import BuscarCor from "./screens/BuscarCor";
import BuscarFruta from "./screens/BuscarFruta";
import BuscarPessoa from "./screens/BuscarPessoa";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="BuscarProduto" component={BuscarProduto} />
        <Stack.Screen name="BuscarAnimal" component={BuscarAnimal} />
        <Stack.Screen name="BuscarCarro" component={BuscarCarro} />
        <Stack.Screen name="BuscarCor" component={BuscarCor} />
        <Stack.Screen name="BuscarFruta" component={BuscarFruta} />
        <Stack.Screen name="BuscarPessoa" component={BuscarPessoa}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
