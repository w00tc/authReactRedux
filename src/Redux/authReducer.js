import {authAPI} from "../Api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_LOGIN = 'SET_USER_LOGIN';
let initialState = {
    objectId: null,
    email: null,
    isAuthenticated: false,
    userToken: null,
    isLogged: false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_USER_LOGIN:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}


export const setAuthUserData = (objectId, email, isAuthenticated) => ({
    type: SET_USER_DATA, payload:
        {objectId, email, isAuthenticated}
});
export const setUserLogin = (userToken, isLogged) => ({
    type: SET_USER_LOGIN, payload:
        {userToken, isLogged}
})


export const register = (email1, password) => async (dispatch) => {
    let response = await authAPI.register(email1, password);
    let {objectId, email} = response.data;
    let isAuthenticated = true;
    dispatch(setAuthUserData(objectId, email, isAuthenticated))
    console.log(response.data)
}
export const login = (login, password) => async (dispatch) => {
    let response = await authAPI.login(login, password);
    let Token = "user-token";
    let isLogged = true;
    let userToken = response.data[Token]
    dispatch(setUserLogin(userToken, isLogged))
    console.log(response.data + " " + Token)

}
export const unLogin = () => async (dispatch) => {
    let Token = initialState.userToken;
    await authAPI.logout(Token);
    let isAuthenticated = true;
    dispatch(setAuthUserData(null,null, isAuthenticated))
    let isLogged = false;
    dispatch(setUserLogin(null, isLogged))
    console.log(isAuthenticated, isLogged)
}
export default authReducer;