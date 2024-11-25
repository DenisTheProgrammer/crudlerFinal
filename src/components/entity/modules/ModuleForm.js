import { useState } from "react";
import { StyleSheet,Text,TextInput,View } from "react-native";
import Icons from "../../UI/Icons.js";
import Form from "../../UI/Form.js";
import useLoad from "../../API/useLoad.js";

const defaultModule = 
{
    ModuleID : null,
    ModuleCode : null,
    ModuleName : null,
    ModuleLevel : null,
    ModuleYearID : null,
    ModuleLeaderID : null,
    ModuleLeaderName : null,
    ModuleImageURL : null,
}

const ModuleForm = ({originalModule, onSubmit, onCancel }) => {
    // Initialisations --------------------------
    defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
    defaultModule.ModuleImageURL = "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg";

    const yearsEndPoint = "https://softwarehub.uk/unibase/api/years";

    const staffEndPoint = "https://softwarehub.uk/unibase/api/users/staff";

    const levels = [
        { label: "3 (Foundation)", value: 3 },
        { label: "4 (First Year)", value: 4 },
        { label: "5 (Second Year)", value: 5 },
        { label: "6 (Third Year)", value: 6 },
        { label: "7 (Masters)", value: 7 },
    ];

    // State -------------------------------------
    const [module, setModule] = useState(originalModule || defaultModule);
    const [years, isYearsLoading] = useLoad(yearsEndPoint);
    const [leaders, isLeadersLoading] = useLoad(staffEndPoint);

    //Handlers -----------------------------------
    const handleChange = (field, value) => setModule({...module, [field]:value});
    const handleSubmit = () => onSubmit(module);

    //View ---------------------------------------
    const submitLabel = originalModule? "Modify" : "Add";
    const submitIcon = originalModule? <Icons.Edit/> : <Icons.Add/>;

    const cohorts = years.map((year) => ({value: year.YearID, label: year.YearName}));
    const staff = leaders.map((leader) => ({value: leader.UserID, label: `${leader.UserFirstname} ${leader.UserLastname}`}));

    return(
        <Form
            onSubmit={handleSubmit}
            onCancel={onCancel}
            submitLabel = {submitLabel}
            submitIcon = {submitIcon}
        >
            <Form.InputText
                label = "Module Code"
                value = {module.ModuleCode}
                onChange = {(value)=> handleChange("ModuleCode", value)}
            />

            <Form.InputText
                label = "Module Name"
                value = {module.ModuleName}
                onChange = {(value)=> handleChange("ModuleName", value)}
            />

            <Form.InputSelect
                label = "Module Level"
                prompt= "Select Module Level ..."
                options = {levels}
                value = {module.ModuleLevel}
                onChange = {(value)=> handleChange("ModuleLevel", value)}
            />

            <Form.InputSelect
                label = "Module Cohort"
                prompt= "Select Module Cohort ..."
                options = {cohorts}
                value = {module.ModuleYearID}
                onChange = {(value)=> handleChange("ModuleYearID", value)}
                isLoading = {isYearsLoading}
            />

            <Form.InputSelect
                label = "Module Leader"
                prompt= "Select Module Leader ..."
                options = {staff}
                value = {module.ModuleLeaderID}
                onChange = {(value)=> handleChange("ModuleLeaderID", value)}
                isLoading = {isLeadersLoading}
            />

            <Form.InputText
                label = "Module Image URL"
                value = {module.ModuleImageURL}
                onChange = {(value)=> handleChange("ModuleImageURL", value)}
            />

        </Form>
    );
};

const styles = StyleSheet.create({});

export default ModuleForm;
