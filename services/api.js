import axios from 'axios';

const API = axios.create({
    baseURL: 'https://689cd541ce755fe697872fa9.mockapi.io/api/v1', 
    timeout: 8000
});

export async function getBrands() {
    try {
        const { data } = await API.get('/brands');
        return { data, error: null };
    } catch (error) {
        console.warn('getBrands error', error?.message);
        return { data: [], error };
    }
}

export async function getBrandById(id) {
    try {
        const { data } = await API.get(`/brands/${id}`);
        return { data, error: null };
    } catch (error) {
        console.warn('getBrandById error', error?.message);
        return { data: null, error };
    }
}
