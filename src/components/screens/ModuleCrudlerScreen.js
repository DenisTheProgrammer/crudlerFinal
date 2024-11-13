import { StyleSheet, Text, View } from 'react-native';
import { Screen } from 'react-native-screens';

import initialModules from '../../data/modules.js';
import ModuleList from "../entity/modules/ModuleList.js";

export const ModuleCrudlerScreen = () => {
  // Initialisations -------------------
  const modules = initialModules;

  // State -----------------------------

  // Handlers --------------------------

  // View ------------------------------
  return (
    <Screen>
        <ModuleList modules = {initialModules}/>
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