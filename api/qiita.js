import axios, { AxiosInstance } from 'axios';

const endPoint = 'https://qiita.com/api/v2/authenticated_user/items'
const token = '3e238234a0320768a5eb47520c2cda3dd93ed977';

export const qiitaApi = {
    get: async (params) => {
        const api = await _qiitaApiInstance.create(params);
        const res = await api.get();

        return res.data;
    },
};

const _qiitaApiInstance = {
    create: async (params) => {
        return await axios.create({
            baseURL: endPoint,
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
            params
        });
    },
};

export default qiitaApi;