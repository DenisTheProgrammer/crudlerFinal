import { Alert, StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import { Button, ButtonTray } from "../../UI/Button";
import Icons from "../../UI/Icons.js";

const ModuleView = ({module}) => 
{
    // Initialisations --------------------------
    // State ------------------------------------
    // Handlers ---------------------------------

    const onModify = () => Alert.alert("Modify Warning");

    const onDelete = () => Alert.alert("Delete Warning");

    // View ----------------------------------
    return (
        <View style={styles.container}>
            <FullWidthImage
                source={{uri : module.ModuleImage}}
                style={styles.image}
            />

            <View style = {styles.infoTray}>
                <Text style = {styles.boldText}>
                    {module.ModuleCode} {module.ModuleName}
                </Text>
                <Text style = {styles.text}>Level: {module.ModuleLevel}</Text>
                <Text style = {styles.text}>Cohort: {module.ModuleYearName}</Text>
                <Text style = {styles.text}>
                    {module.ModuleLeaderName}{" "}
                    <Text style = {styles.dimText}>(Module Leader)</Text>
                </Text>
            </View>
            <ButtonTray>
                <Button icon = {<Icons.Edit/>} label = "Modify" onClick = {onModify}/>
                <Button 
                icon = {<Icons.Delete/>}
                label= "Delete"
                styleButton={{backgroundColor : "mistyrose"}}
                styleLabel = {{color: "red"}}
                onClick = {onDelete}
                />
            </ButtonTray>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      gap: 15,
    },
    image: {
      borderRadius: 3,
    },
    infoTray: {
      gap: 5,
    },
    text: {
      fontSize: 16,
    },
    boldText: {
      fontWeight: "bold",
      fontSize: 16,
    },
    dimText: {
      color: "grey",
    },
  });

  export default ModuleView;