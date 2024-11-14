import { StyleSheet, Text, View } from "react-native";

const UserItem = ({user}) =>
{
    // Initialisations -------------------

    // State -----------------------------

    // Handlers --------------------------

    // View ------------------------------
    return (
        <View style={styles.item}>
            <Text style = {styles.text}>
                {user.UserID} {user.UserFirstname} {user.UserLastname}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
      paddingVertical: 15,
      borderTopWidth: 1,
      borderColor: "lightgray",
    },
    text: {
      fontSize: 20,
      padding: 10,
    },
  });

  export default UserItem;