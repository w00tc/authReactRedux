import React from 'react';
import {Logout} from "../Logout/Logout";
import {useMainForm} from "./MainHook";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./Main.module.css";


export const Main = (props) => {
    const {inputs, handleInputChange, handleSubmit} = useMainForm({firstName: '', lastName: ''});

    return (
        <div>
            <h1>Your First Name<br/>{props.firstName}</h1>
            <h1>Your Last Name<br/>{props.lastName}</h1>
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    value={inputs.firstName}
                    onChange={handleInputChange}
                    id="firstName"
                    label="FirstName"
                    name="firstName"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    require
                    name="lastName"
                    value={inputs.lastName}
                    onChange={handleInputChange}
                    label="LastName"
                    id="lastName"
                /><br/>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    ChangeName
                </Button>
            </form>
            <Logout/>
        </div>
    )
}
