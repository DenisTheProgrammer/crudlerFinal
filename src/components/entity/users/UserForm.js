import { useState } from "react";
import { StyleSheet,Text,TextInput,View } from "react-native";
import Icons from "../../UI/Icons.js";
import Form from "../../UI/Form.js";
import useLoad from "../../API/useLoad.js";

const defaultUser = 
{
    UserID : null,
    UserFirstname : null,
    UserLastname : null,
    UserEmail : null,
    UserRegistered : 0,
    UserLevel : null,
    UserYearID: null,
    UserUsertypeID: null,
    UserImageURL : null,
    UserUsertypeName : null,
    UserYearName : null,
}

const UserForm = ({originalUser, onSubmit, onCancel }) => {
    // Initialisations --------------------------
    defaultUser.UserID = Math.floor(100 + Math.random() * 900);
    defaultUser.UserImageURL = 'https://images.generated.photos/1zzVOGo2BC7zlIbuqtT9E03KbcRrCFw0CeIkCRH-pQo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTU2NTI4LmpwZw.jpg';

    const typesEndPoint = "http://softwarehub.uk/unibase/api/usertypes";
    const yearsEndPoint = "https://softwarehub.uk/unibase/api/years";

    const levels = [
        { value: 3, label: "3 (Foundation)" },
        { value: 4, label: "4 (First Year)" },
        { value: 5, label: "5 (Second Year)" },
        { value: 6, label: "6 (Third Year)" },
        { value: 7, label: "7 (Masters)" },
    ];

    // State -------------------------------------
    const [user, setUser] = useState(originalUser || defaultUser);

    const [users, isUsersLoading] = useLoad(typesEndPoint);
    const [years, isYearsLoading] = useLoad(yearsEndPoint);

    //Handlers -----------------------------------
    const handleChange = (field, value) => setUser({...user, [field]:value});
    const handleSubmit = () => onSubmit(user);

    //View ---------------------------------------
    const submitLabel = originalUser? "Modify" : "Add";
    const submitIcon = originalUser? <Icons.Edit/> : <Icons.Add/>;

    const cohorts = years.map((year) => ({value: year.YearID, label: year.YearName}));
    const types = users.map((user) => ({value: user.UsertypeID, label: user.UsertypeName}));

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
                label = "User Level"
                prompt= "Select User Level ..."
                options = {levels}
                value = {user.UserLevel}
                onChange = {(value)=> handleChange("UserLevel", value)}
            />

            <Form.InputSelect
                label = "User Type"
                prompt= "Select User Type ..."
                options = {types}
                value = {user.UserUsertypeID}
                onChange = {(value)=> handleChange("UserUsertypeID", value)}
            />

            <Form.InputSelect
                label = "User Year"
                prompt= "Select User Year ..."
                options = {cohorts}
                value = {user.UserYearID}
                onChange = {(value)=> handleChange("UserYearID", value)}
            />
           

        </Form>
    );
};

const styles = StyleSheet.create({});

export default UserForm;
