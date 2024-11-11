import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import ModuleCrudlerScreen from "./src/components/screens/ModuleCrudlerScreen";
import UserCrudlerScreen from "./src/components/screens/UserCrudlerScreen";

const Drawer = createDrawerNavigator();

export const App = () => {
  // Initialisations -------------------

  // State -----------------------------

  // Handlers --------------------------

  // View ------------------------------
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="ModuleCrudlerScreen"
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
      }}
      >
        <Drawer.Screen 
        name="ModuleCrudlerScreen" 
        component={ModuleCrudlerScreen} 
        />

        <Drawer.Screen 
        name="UserCrudlerScreen" 
        component={UserCrudlerScreen} 
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
