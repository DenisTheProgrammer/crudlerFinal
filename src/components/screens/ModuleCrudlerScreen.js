import { StyleSheet } from 'react-native';
import { Screen } from 'react-native-screens';

import initialModules from '../../data/modules.js';
import ModuleList from "../entity/modules/ModuleList.js";

export const ModuleCrudlerScreen = ({navigation}) => {
  // Initialisations -------------------
  const modules = initialModules;

  // State -----------------------------

  // Handlers --------------------------
  const goToViewScreen = (module) => navigation.navigate("ModuleViewScreen", {module});

  // View ------------------------------
  return (
    <Screen>
        <ModuleList modules = {initialModules} onSelect={goToViewScreen}/>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModuleCrudlerScreen;