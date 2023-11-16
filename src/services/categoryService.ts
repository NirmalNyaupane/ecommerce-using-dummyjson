import axios, { AxiosResponse } from "axios";
import { AllCategoryType } from "@/types/apiTypes/getAllProductAPI.type";
export const getAllCategoryApi = async (): Promise<
  AxiosResponse<AllCategoryType, any>
> => {
  return await axios.get("/products/categories");
};
