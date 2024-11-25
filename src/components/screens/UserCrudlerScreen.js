import { StyleSheet, LogBox } from 'react-native';
import Screen from "../layout/Screen.js";

import initialUsers from "../../data/users";
import UserList from "../entity/users/UserList.js";
import { Button, ButtonTray } from '../UI/Button.js';
import Icons from '../UI/Icons.js';
import { useState } from 'react';

export const UserCrudlerScreen = ({navigation}) => {
  // Initialisations -------------------
  LogBox.ignoreLogs([`Non-serializable values were found in the navigation state`]);

  // State -----------------------------
  const [users, setUsers] = useState(initialUsers);
  // Handlers --------------------------
  const handleAdd = (user) => setUsers([...users, user]);
  const handleDelete = (user) =>
  {
    setUsers(users.filter((item) => item.UserID !== user.UserID));
  }
  const handleModify = (updatedUser) => {
    setUsers(users.map((user) => (user.UserID === updatedUser.UserID) ? updatedUser : user));
  }

  const onAdd = (user) =>
  {
    handleAdd(user);
    navigation.goBack();
  }

  const onDelete = (user) =>
  {
    handleDelete(user);
    navigation.goBack();
  }

  const onModify = (user) =>
  {
    handleModify(user);
    navigation.popToTop();
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