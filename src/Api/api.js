import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.backendless.com/344D7AA6-9374-B158-FFC0-F0953B41EF00/886E87E4-7F9F-465B-9F3E-E1448CB78D8D/',
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': "Bearer WInoVRgr5dljq8TyMDJc_-FNLk_EfQbxWzE8",
        'Accept': 'application/json'
        // 'Access-Control-Allow-Headers': 'Authorization'
    }
});

export const authAPI = {
    login(login, password) {
        return instance.post(`users/login`, { login, password });
    },
    register(email, password) {
        return instance.post(`users/register`, { email, password});
    },
    logout(userToken) {
        return instance.get(`/users/logout`, {'user-token': userToken});
    }
}
