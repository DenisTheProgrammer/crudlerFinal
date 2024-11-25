import { StyleSheet, LogBox } from 'react-native';
import Screen from "../layout/Screen.js";

import initialModules from '../../data/modules.js';
import ModuleList from "../entity/modules/ModuleList.js";
import { ButtonTray, Button } from '../UI/Button.js';
import Icons from '../UI/Icons.js';
import { useState } from 'react';

export const ModuleCrudlerScreen = ({navigation}) => {
  // Initialisations -------------------
  LogBox.ignoreLogs([`Non-serializable values were found in the navigation state`]);

  // State -----------------------------
  const [modules, setModules] = useState(initialModules);

  // Handlers --------------------------
  const handleAdd = (module) => setModules([...modules, module]);
  const handleDelete = (module) =>
  {
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
  }
  const handleModify = (updatedModule) => {
    setModules(modules.map((module) => (module.ModuleID === updatedModule.ModuleID) ? updatedModule : module));
  }

  const onAdd = (module) =>
  {
    handleAdd(module);
    navigation.goBack();
  };

  const onDelete = (module) =>
  {
    handleDelete(module);
    navigation.goBack();
  };

  const onModify = (module) =>
  {
    handleModify(module);
    navigation.popToTop();
  }


  const goToViewScreen = (module) => navigation.navigate("ModuleViewScreen", {module, onDelete, onModify});
  const goToAddScreen = () => navigation.navigate("ModuleAddScreen", {onAdd});

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