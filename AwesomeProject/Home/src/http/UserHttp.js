import AxiosInstance from "../http/AxiosInstance";

export const login = async (email, password) =>{
    try {
        const url = 'users/login';
        const body = {
            email: email,
            password: password,
        }
        console.log(body);

        return await AxiosInstance().post(url, body);
    } catch (error) {
        console.log(error);
    }
}

export const register = async (email, password) =>{
    try {
        const url = 'users/register';
        const body = {
            email: email,
            password: password,
        }

        return await AxiosInstance().post(url, body);
    } catch (error) {
        console.log(error);
    }
}
export const forgotPass = async (email) =>{
    try {
        const url = 'users/forgot-password';
        const body = {
            email: email,
        }

        return await AxiosInstance().post(url, body);
    } catch (error) {
        console.log(error);
    }
}
export const logout = async ()=>{
    try {
        const url = 'users/logout';
        return await AxiosInstance().post(url);
        console.log(url);
    } catch (error) {
        
    }
}
export const TT = async () => {
    try {
        const axiosInstance = AxiosInstance();
        const url = `users/update-profile`;
        const response = await axiosInstance.get(url);
        return response;
    } catch (error) {
        
    }
    
}