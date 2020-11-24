import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '06bb1c38-6465-4ccc-9da5-7320352d67b0'
    }
})
export const usersAPI = {
getUsers(currentPage = 1, pageSize = 10){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
        return response.data;
    });
},
follow(id){
    return instance.post(`follow/${id}`, {}).
        then(response => response.data);
},
unfollow(id){
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}).then(response => response.data);
}
};

export const authAPI = {
    getMe(){
        return instance.get(`auth/me`).then(response => {
            return response.data;
        });
    }
};