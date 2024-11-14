import { StyleSheet } from 'react-native';
import { Screen } from 'react-native-screens';

import initialUsers from "../../data/users";
import UserList from "../entity/users/UserList.js";

export const UserCrudlerScreen = () => {
  // Initialisations -------------------
  const users = initialUsers;
  // State -----------------------------

  // Handlers --------------------------

  // View ------------------------------
  return (
    <Screen>
        <UserList users = {initialUsers}/>
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