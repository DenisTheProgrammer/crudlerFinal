import { useState } from "react";
import { StyleSheet,Text,TextInput,View } from "react-native";
import Icons from "../../UI/Icons.js";
import Form from "../../UI/Form.js";

const defaultUser = 
{
    UserID : null,
    UserFirstname : null,
    UserLastname : null,
    UserEmail : null,
    UserImageURL : null,
    UserType : null,
    UserYear : null,
}

const UserForm = ({originalUser, onSubmit, onCancel }) => {
    // Initialisations --------------------------
    defaultUser.UserID = Math.floor(100 + Math.random() * 900);
    defaultUser.UserImageURL = 'https://images.generated.photos/1zzVOGo2BC7zlIbuqtT9E03KbcRrCFw0CeIkCRH-pQo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTU2NTI4LmpwZw.jpg';

    const types = [
        { label: "Staff", value: "Staff" },
        { label: "Student", value: "Student" },
    ];

    const years = [
        { label: "2022-23", value: "2022-23" },
        { label: "2023-24", value: "2023-24" },
        { label: "2024-25", value: "2024-25" },
    ];

    // State -------------------------------------
    const [user, setUser] = useState(originalUser || defaultUser);

    //Handlers -----------------------------------
    const handleChange = (field, value) => setUser({...user, [field]:value});
    const handleSubmit = () => onSubmit(user);

    //View ---------------------------------------
    const submitLabel = originalUser? "Modify" : "Add";
    const submitIcon = originalUser? <Icons.Edit/> : <Icons.Add/>;

    return(
        <Form
            onSubmit={handleSubmit}
            onCancel={onCancel}
            submitLabel = {submitLabel}
            submitIcon = {submitIcon}
        >
            <Form.InputText
                label = "First Name"
                value = {user.UserFirstname}
                onChange = {(value)=> handleChange("UserFirstname", value)}
            />

            <Form.InputText
                label = "Last Name"
                value = {user.UserLastname}
                onChange = {(value)=> handleChange("UserLastname", value)}
            />

            <Form.InputText
                label = "Email Address"
                value = {user.UserEmail}
                onChange = {(value)=> handleChange("UserEmail", value)}
            />

            <Form.InputText
                label = "User Image URL"
                value = {user.UserImageURL}
                onChange = {(value)=> handleChange("UserImageURL", value)}
            />

            <Form.InputSelect
                label = "User Type"
                prompt= "Select User Type ..."
                options = {types}
                value = {user.UserType}
                onChange = {(value)=> handleChange("UserType", value)}
            />

            <Form.InputSelect
                label = "User Year"
                prompt= "Select User Year ..."
                options = {years}
                value = {user.UserYear}
                onChange = {(value)=> handleChange("UserYear", value)}
            />
           

        </Form>
    );
};

const styles = StyleSheet.create({});

export default UserForm;
