import { CreateProductRequest, LoginRequest, UpdateProductRequest } from "../types/requests"

import axios from "axios"

axios.defaults.baseURL = "btc-server-production-3ecc.up.railway.app";
axios.defaults.headers.post["Content-Type"] = "applications/json";

axios.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export const api = {
    login: async ({ email, password }: LoginRequest) => {
        try {
            const response = await axios.post('rota', { email, password });
            // console.log(response.data.token);
            localStorage.setItem('token', response.data.token);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    // CRUD PRODUTOS

    getProducts: async () => {
        try {
            const response = await axios.get('https://btc-server-production-3ecc.up.railway.app/product');
            return response.data;
        } catch (error) {
            alert(error);
        }
    },

    getProductsById: async (id: string) => {
        try {
            const response = await axios.get('/product/${id}');
            if (!response.data) {
                throw new Error("product not found");
            }
            return response.data;
        } catch (error) {
            alert(error);
        }
    },

    createProduct: async (payload: CreateProductRequest) => {
        try {
            const response = await axios.post("/product", payload);
            return response.data;
        } catch (error) {
            alert(error)
        }
    },

    updateProduct: async (payload: UpdateProductRequest) => {
        try {
            const response = await axios.patch('/product/' + payload.id, {
                name: payload.name,
                commission: payload.commission,
                score: payload.score
            });
            return response.data;
        } catch (error) {
            alert(error);
        }
    },

    deleteProduct: async (payload: string) => {
        try {
            const response = await axios.delete(`/product/${payload}`);
            return response.data;
        } catch (error) {
            alert(error);
        }
    }

}