import {
  GetAllProductResponse,
  IProduct,
  paginatedPayload,
} from "@/types/apiTypes/getAllProductAPI.type";
import axios, { AxiosResponse } from "axios";

//This return all products
const getAllProductAPI = async ({
  ...payload
}: paginatedPayload): Promise<AxiosResponse<GetAllProductResponse, any>> => {
  return await axios.get("/products", {
    params: payload,
  });
};

//This return product based on search query
const getProductBySearchApi = async ({
  ...payload
}: paginatedPayload): Promise<AxiosResponse<GetAllProductResponse, any>> => {
  return await axios.get("/products/search", {
    params: payload,
  });
};

//get single product by id
const getItemByIdApi = async (
  id: string
): Promise<AxiosResponse<IProduct, any>> => {
  return await axios.get(`/product/${id}`);
};

export { getAllProductAPI, getItemByIdApi, getProductBySearchApi };

