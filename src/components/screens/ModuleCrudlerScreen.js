import { StyleSheet, LogBox, Text, Alert } from 'react-native';
import Screen from "../layout/Screen.js";

import API from "../API/API.js";
import ModuleList from "../entity/modules/ModuleList.js";
import { ButtonTray, Button } from '../UI/Button.js';
import Icons from '../UI/Icons.js';
import useLoad from '../API/useLoad.js';

export const ModuleCrudlerScreen = ({navigation}) => {
  // Initialisations -------------------
  LogBox.ignoreLogs([`Non-serializable values were found in the navigation state`]);
  const modulesEndPoint = "https://softwarehub.uk/unibase/api/modules";

  // State -----------------------------
  const[modules, setModules, isLoading, loadModules ] = useLoad(modulesEndPoint);

  // Handlers --------------------------
  const onDelete = async (module) => 
  {
    const deleteEndPoint = `${modulesEndPoint}/${module.ModuleID}`;
    const result = await API.delete(deleteEndPoint, module);
    if (result.isSuccess) 
    {
      loadModules(modulesEndPoint);
      navigation.popToTop();
    }
    else
    {
      Alert.alert(result.message);
    }
  }

  const onAdd = async (module) => 
  {
    const result = await API.post(modulesEndPoint, module);
    if (result.isSuccess) 
    {
      loadModules(modulesEndPoint);
      navigation.popToTop();
    }
    else
    {
      Alert.alert(result.message);
    }
  }

  const onModify = async (module) => 
  {
    const putEndPoint = `${modulesEndPoint}/${module.ModuleID}`;
    const result = await API.put(putEndPoint, module);
    if (result.isSuccess) 
    {
      loadModules(modulesEndPoint);
      navigation.popToTop();
    }
    else
    {
      Alert.alert(result.message);
    }
  }  


  const goToViewScreen = (module) => navigation.navigate("ModuleViewScreen", {module, onDelete, onModify});
  const goToAddScreen = () => navigation.navigate("ModuleAddScreen", {onAdd});

  // View ------------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button label = "Add" icon = {<Icons.Add/>} onClick = {goToAddScreen}/>
      </ButtonTray>
      {
        isLoading && <Text>Loading records ...</Text>
      }
      <ModuleList modules = {modules} onSelect={goToViewScreen}/>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleCrudlerScreen;