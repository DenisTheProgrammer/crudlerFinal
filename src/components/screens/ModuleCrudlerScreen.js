import { StyleSheet } from 'react-native';
import { Screen } from 'react-native-screens';

import initialModules from '../../data/modules.js';
import ModuleList from "../entity/modules/ModuleList.js";
import { ButtonTray, Button } from '../UI/Button.js';
import Icons from '../UI/Icons.js';

export const ModuleCrudlerScreen = ({navigation}) => {
  // Initialisations -------------------
  const modules = initialModules;

  // State -----------------------------

  // Handlers --------------------------
  const goToViewScreen = (module) => navigation.navigate("ModuleViewScreen", {module});
  const goToAddScreen = () => navigation.navigate("ModuleAddScreen");

  // View ------------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button label = "Add" icon = {<Icons.Add/>} onClick = {goToAddScreen}/>
      </ButtonTray>
      <ModuleList modules = {modules} onSelect={goToViewScreen}/>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleCrudlerScreen;