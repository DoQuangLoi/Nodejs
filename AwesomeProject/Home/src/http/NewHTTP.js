import AxiosInstance from './AxiosInstance';
import { ToastAndroid } from 'react-native';

export const getNews = async () => {
    try {
        const axiosInstance = AxiosInstance();
        const url = '/news';
        const response = await axiosInstance.get(url);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getNewsDetail = async (id) => {
    try {
        // articles/64766509ae564a0014d70ad2/detail
        const axiosInstance = AxiosInstance();
        const url = `/news/${id}`;
        const response = await axiosInstance.get(url);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }

}
// export const searchNew = async (keyword) => {
//     try {
//         // articles/64766509ae564a0014d70ad2/detail
//         const axiosInstance = AxiosInstance();
//         const url = `/articles/search?title=${keyword}`;
//         const response = await axiosInstance.get(url);
//         return response;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }
export const uploadImage = async (formData) => {
    try {
        // articles/64766509ae564a0014d70ad2/detail
        const axiosInstance = AxiosInstance('multipart/form-data');
        const url = `/media/upload`;
        const response = await axiosInstance.post(url, formData);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const upNews = async (title, content, image) => {
    try {
        // articles/64766509ae564a0014d70ad2/detail
        const axiosInstance = AxiosInstance();
        const url = `/articles`;
        const response = await axiosInstance.post(url,{title, content, image});
        if(response.error === false){
            ToastAndroid.show("Đăng tin thành công", ToastAndroid.show);
        }
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}