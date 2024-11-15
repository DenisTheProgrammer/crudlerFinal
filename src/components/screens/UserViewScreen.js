import { StyleSheet } from "react-native";

import { Screen } from "react-native-screens";
import UserView from "../entity/users/UserView";

export const UserViewScreen = ({navigation, route}) => {
  // Initialisations -------------------
  const {user} = route.params;
  // State -----------------------------

  // Handlers --------------------------

  // View ------------------------------
  return (
    <Screen>
      <UserView user = {user}/>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserViewScreen;