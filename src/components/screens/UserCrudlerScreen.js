import { StyleSheet } from 'react-native';
import Screen from "../layout/Screen.js";

import initialUsers from "../../data/users";
import UserList from "../entity/users/UserList.js";
import { Button, ButtonTray } from '../UI/Button.js';
import Icons from '../UI/Icons.js';

export const UserCrudlerScreen = ({navigation}) => {
  // Initialisations -------------------
  const users = initialUsers;
  // State -----------------------------

  // Handlers --------------------------
  const goToViewScreen = (user) => navigation.navigate("UserViewScreen", {user});
  const goToAddScreen = () => navigation.navigate("UserAddScreen");

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