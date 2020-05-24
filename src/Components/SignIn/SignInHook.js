import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../Redux/authReducer";

export const useSignInForm = (initialValues) => {
    const [inputs, setInputs] = useState(initialValues);
    const isLogged = useSelector(state => state.auth.isLogged);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if (isLogged === false) {
            dispatch(login(inputs.login, inputs.password));
        }
    }
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
        handleSubmit,
        handleInputChange,
        inputs
    };

}



