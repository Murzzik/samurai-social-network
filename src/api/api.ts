import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ec564be2-4883-4b20-b0b6-0ca24544ea07',
    },
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data);
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`)
            .then(res => res.data);
    },
    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(res => res.data);
    },
    getUserProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data);
    },
    authME() {
        return instance.get(`auth/me`).then(res => res.data);
    },
};