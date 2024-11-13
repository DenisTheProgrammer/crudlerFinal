import { StyleSheet, Text, View } from "react-native";

const ModuleItem = ({module}) =>
{
    // Initialisations -------------------

    // State -----------------------------

    // Handlers --------------------------

    // View ------------------------------
    return (
        <View style={styles.item}>
            <Text style = {styles.item}>
                {module.ModuleCode} {module.ModuleName}
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

  export default ModuleItem;