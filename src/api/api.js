import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": 'c48994a0-7d49-41c5-b138-a988d170f446'
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
},
getUsersProfile(userId){
    return profileAPI.getUsersProfile(userId);
}
};

export const profileAPI = {
    getUsersProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status',  {status})
    },

};

export const authAPI = {
    getMe(){
        return instance.get(`auth/me`).then(response => {
            return response.data;
        });
    }
};