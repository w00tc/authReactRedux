import {useDispatch, useSelector} from "react-redux";
import {setUserName} from "../../Redux/authReducer";
import {useState} from "react";

export const useMainForm = (initialValues) => {
    const [inputs, setInputs] = useState(initialValues);
    const isLogged = useSelector(state => state.auth.isLogged);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if (isLogged === true) {
            dispatch(setUserName(inputs.firstName, inputs.lastName))
        }
    }
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
        handleInputChange,
        handleSubmit,
        inputs
    }
}