import {useDispatch, useSelector} from "react-redux";
import {unLogin} from "../../Redux/authReducer";

export const useLogout = () => {
    const isLogged = useSelector(state => state.auth.isLogged);
    const dispatch = useDispatch();
    const handleClick = event => {
        event.preventDefault();
        if(isLogged === true) {
         dispatch(unLogin());
         console.log('click');
        }
    }
    return {
        handleClick
    }
}