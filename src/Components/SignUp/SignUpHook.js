import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {register, setUserName} from "../../Redux/authReducer";

export const useSignUpForm = (initialValues) => {
    const [inputs, setInputs] = useState(initialValues);
    const token = useSelector(state => state.auth.token);
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if (token == null) {
            dispatch(register(inputs.email, inputs.password));
            dispatch(setUserName(inputs.firstName, inputs.lastName));
        }
        console.log(isAuth + " " + token);
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


export default useSignUpForm;


