import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";

import ModuleCrudlerScreen from "./src/components/screens/ModuleCrudlerScreen";
import ModuleViewScreen from "./src/components/screens/ModuleViewScreen";
import ModuleAddScreen from "./src/components/screens/ModuleAddScreen";

import UserCrudlerScreen from "./src/components/screens/UserCrudlerScreen";
import UserViewScreen from "./src/components/screens/UserViewScreen";
import UserAddScreen from "./src/components/screens/UserAddScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//creating the module stack
const ModuleCrudlerStack = () =>
  {
    return(
      <Stack.Navigator
        initialRouteName = "ModuleCrudlerScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      >
  
        <Stack.Screen
          name = "ModuleCrudlerScreen"
          component={ModuleCrudlerScreen}
          options = {{title: "List Modules"}}
        />
        <Stack.Screen
          name = "ModuleViewScreen"
          component={ModuleViewScreen}
          options = {{title: "Module View"}}
        />
        <Stack.Screen
          name = "ModuleAddScreen"
          component={ModuleAddScreen}
          options = {{title: "Module Add"}}
        />
  
      </Stack.Navigator>
    )
  }
  
  //creating the user stack
  const UserCrudlerStack = () =>
    {
      return(
        <Stack.Navigator
          initialRouteName = "UserCrudlerScreen"
          screenOptions={{
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
          }}
        >
  
          <Stack.Screen
            name = "UserCrudlerScreen"
            component={UserCrudlerScreen}
            options = {{title: "List Users"}}
          />
          <Stack.Screen
            name = "UserViewScreen"
            component={UserViewScreen}
            options = {{title: "User View"}}
          />
          <Stack.Screen
            name = "UserAddScreen"
            component={UserAddScreen}
            options = {{title: "User Add"}}
          />
  
        </Stack.Navigator>
      )
    }


export const App = () => {
  // Initialisations -------------------

  // State -----------------------------

  // Handlers --------------------------

  // View ------------------------------
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="ModuleCrudlerStack"
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
      }}
      >
        <Drawer.Screen 
        name="ModuleCrudlerStack" 
        component={ModuleCrudlerStack} 
        options = {{title: "Module Crudler"}}
        />

        <Drawer.Screen 
        name="UserCrudlerStack" 
        component={UserCrudlerStack} 
        options = {{title: "User Crudler"}}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
