import { KeyboardAvoidingView, ScrollView, StyleSheet,Text,TextInput,View,Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icons from "./Icons";
import { Button, ButtonTray } from "./Button";

const Form = ({children, onSubmit, onCancel, submitLabel,submitIcon}) => {
    // Initialisations -------------------
    // State -----------------------------
    // Handlers --------------------------
    // View ------------------------------
    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios"? "padding" : "height"} //tells the app to add padding when the keyboard comes up on ios
        style={styles.formContainer}
        keyboardVerticalOffset={Platform.OS === "ios"?100:0} //specifies how much the view should be offset vertically when the keyboard is displayed
        >
            <ScrollView contentContainerStyle={styles.formItems}>
                {children}
            </ScrollView>

            <ButtonTray>
                <Button
                    label={submitLabel}
                    icon={submitIcon}
                    onClick={onSubmit}
                />
                <Button
                    label="Cancel"
                    icon={<Icons.Close/>}
                    onClick={onCancel}
                />
            </ButtonTray>
        </KeyboardAvoidingView>
    );
};

const InputText = ({label, value, onChange}) => {
    // Initialisations -------------------
    // State -----------------------------
    // Handlers --------------------------
    // View ------------------------------
    return (
        <View style={styles.item}>
            <Text style={styles.itemLabel}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.itemTextInput}
            />
        </View>
    );
}

const InputSelect = ({label, prompt, options, value, onChange, isLoading = false}) => {
    // Initialisations -------------------
    // State -----------------------------
    // Handlers --------------------------
    // View ------------------------------
    return (
        <View style={styles.item}>
            <Text style={styles.itemLabel}>{label}</Text>
            {
                isLoading
                ?(<View style={styles.itemLoading}>
                    <Text style={styles.itemLoadingText}>Loading Records...</Text>
                    </View>)
                :(<Picker
                    mode = "dropdown"
                    selectedValue={value}
                    onValueChange={onChange}
                    style = {styles.itemPickerStyle}
                >
                    <Picker.Item 
                        label={prompt} 
                        value={null}
                        style = {styles.itemPickerPromptStyle}
                    />
                    {options.map((option, index) => (
                        <Picker.Item key={index} label={option.label} value={option.value} />
                    ))}
                </Picker>
            )}
        </View>
    );
};

//compose components
Form.InputText = InputText;
Form.InputSelect = InputSelect;

//Styles
const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        gap: 10,
    },
    formItems: {
        gap: 5,
    },
    itemLabel: {
        color: "grey",
        fontSize: 16,
        marginBottom: 5,
    },
    itemLoading: {
        height: 50,
        backgroundColor: "mistyrose",
        justifyContent: "center",
        paddingLeft: 10,
      },
      itemLoadingText: {
        fontSize: 16,
        color: "gray",
      },
    itemTextInput: {
        height: 50,
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor: "white",
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "lightgray",
    },
    itemPickerStyle: {
        //height: 50,
        backgroundColor: "whitesmoke",
    },
    itemPickerPromptStyle: {
        color: "gray",
    },
  });
  
  export default Form;