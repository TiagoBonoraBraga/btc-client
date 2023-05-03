import {
  CreateClientRequest,
  CreateProductRequest,
  LoginRequest,
  UpdateProductRequest,
} from "../types/requests";

import axios from "axios";

axios.defaults.baseURL = 'https://btc-server-production-3ecc.up.railway.app/';
//axios.defaults.baseURL = "http://localhost:3333"
axios.defaults.headers.post["Content-Type"] = "application/json";
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
      const response = await axios.post("/user", { email, password });
      // console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  // CRUD PRODUTOS

  getProducts: async () => {
    try {
      const response = await axios.get("/product");
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  /* getProductsById: async (id: string) => {
    try {
      const response = await axios.get("/product/${id}");
      if (!response.data) {
        throw new Error("product not found");
      }
      return response.data;
    } catch (error) {
      alert(error);
    }
  }, */

  createProduct: async (ProductPayLoad: CreateProductRequest, setShowError: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      const response = await axios.post('/product', ProductPayLoad);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      const message = error;
      setShowError(true);
      setError(message);
    }
  },

  updateProduct: async (updatedProductPayload: UpdateProductRequest) => {
    try {
      const response = await axios.patch(
        `/product/${updatedProductPayload.id}`,
        {
          id: updatedProductPayload.id,
          name: updatedProductPayload.name,
          description: updatedProductPayload.description, // corrigido aqui
          commission: updatedProductPayload.commission,
          score: updatedProductPayload.score,
          price: updatedProductPayload.price,
        }
      );
      console.log(response.data);
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
  },

  //crud clientes

  getClients: async () => {
    try {
      const response = await axios.get("/client");
      return response.data;
    } catch (error) {
      alert(error);
    }
  },
  createClient: async (clientPayLoad: CreateClientRequest, setShowError: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      console.log(clientPayLoad);
      const response = await axios.post('/client', clientPayLoad);
      console.log(response)
      return response.data;
    } catch (error: any) {
      const message = error;
      setShowError(true);
      setError(message);
      alert(error.message);
    }
  },
};
function setError(message: any) {
  throw new Error("Function not implemented.");
}

