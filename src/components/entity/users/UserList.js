import { ScrollView, StyleSheet } from "react-native";
import UserItem from "./UserItem.js";

const UserList = ({users}) => {
    // Initialisations -------------------

    // State -----------------------------

    // Handlers --------------------------

    // View ------------------------------
    return (
        <ScrollView style={styles.container}>
            {users.map((user) => 
            {
                return(
                    <UserItem
                        key = {user.UserID}
                        user = {user}
                    />
                );
            })}

            
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default UserList;