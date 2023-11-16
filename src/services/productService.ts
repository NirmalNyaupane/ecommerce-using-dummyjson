import axios, { AxiosResponse } from "axios";
import { GetAllProductResponse } from "@/types/apiTypes/getAllProductAPI.type";
import { paginatedPayload } from "@/types/apiTypes/getAllProductAPI.type";
import { UseInfiniteQueryResult } from "@tanstack/react-query";

const getAllProductAPI = async ({
  ...payload
}: paginatedPayload): Promise<AxiosResponse<GetAllProductResponse, any>> => {
  return axios.get("/products", {
    params: payload,
  });
};

const getProductBySearchApi = async ({
  ...payload
}: paginatedPayload): Promise<AxiosResponse<GetAllProductResponse, any>> => {
  return axios.get("/products/search", {
    params: payload,
  });
};

export { getAllProductAPI, getProductBySearchApi};
