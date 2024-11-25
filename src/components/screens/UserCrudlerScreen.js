import { StyleSheet, LogBox, Alert } from 'react-native';
import Screen from "../layout/Screen.js";
import API from '../API/API.js';

import UserList from "../entity/users/UserList.js";
import { Button, ButtonTray } from '../UI/Button.js';
import Icons from '../UI/Icons.js';
import useLoad from "../API/useLoad.js";

export const UserCrudlerScreen = ({navigation}) => {
  // Initialisations -------------------
  LogBox.ignoreLogs([`Non-serializable values were found in the navigation state`]);
  const usersEndPoint = "https://softwarehub.uk/unibase/api/users";

  // State -----------------------------
  const [users, setUsers, isLoading, loadUsers] = useLoad(usersEndPoint);
  // Handlers --------------------------
  const onDelete = async (user) => 
  {
    const deleteEndPoint = `${usersEndPoint}/${user.UserID}`;
    const result = await API.delete(deleteEndPoint, user);
    if (result.isSuccess) 
    {
      loadUsers(usersEndPoint);
      navigation.popToTop();
    }
    else
    {
      Alert.alert(result.message);
    }
  }

  const onAdd = async (user) => 
  {
    const result = await API.post(usersEndPoint, user);
    
    if (result.isSuccess) 
    {
      loadUsers(usersEndPoint);
      navigation.popToTop();
    }
    else
    {
      Alert.alert(result.message);
    }
  }

  const onModify = async (user) => 
  {
    const putEndPoint = `${usersEndPoint}/${user.UserID}`;
    const result = await API.put(putEndPoint, user);
    if (result.isSuccess) 
    {
      loadUsers(usersEndPoint);
      navigation.popToTop();
    }
    else
    {
      Alert.alert(result.message);
    }
  }  


  const goToViewScreen = (user) => navigation.navigate("UserViewScreen", {user, onDelete, onModify});
  const goToAddScreen = () => navigation.navigate("UserAddScreen", {onAdd});

  // View ------------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button label = "Add" icon = {<Icons.Add/>} onClick = {goToAddScreen} />
      </ButtonTray>
      <UserList users = {users} onSelect = {goToViewScreen}/>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default UserCrudlerScreen;