import { ScrollView, StyleSheet } from "react-native";
import ModuleItem from "../modules/ModuleItem.js";

const ModuleList = ({modules}) => {
    // Initialisations -------------------

    // State -----------------------------

    // Handlers --------------------------

    // View ------------------------------
    return (
        <ScrollView style={styles.container}>
            {modules.map((module) => 
            {
                return(
                    <ModuleItem
                        key = {module.ModuleCode}
                        module = {module}
                    />
                );
            })}

            
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default ModuleList;