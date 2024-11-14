import { StyleSheet } from 'react-native';
import { Screen } from 'react-native-screens';

import initialUsers from "../../data/users";
import UserList from "../entity/users/UserList.js";

export const UserCrudlerScreen = ({navigation}) => {
  // Initialisations -------------------
  const users = initialUsers;
  // State -----------------------------

  // Handlers --------------------------
  const goToViewScreen = (user) => navigation.navigate("UserViewScreen", {user});

  // View ------------------------------
  return (
    <Screen>
        <UserList users = {initialUsers} onSelect = {goToViewScreen}/>
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

export default UserCrudlerScreen;