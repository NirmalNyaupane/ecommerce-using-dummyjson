import { PaginateResponse } from "../genericType";

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

type paginatedPayload = { limit?: number; skip?: number };
type GetAllProductResponse = PaginateResponse<IProduct>;
type AllCategoryType = string[];

export type {
  IProduct,
  GetAllProductResponse,
  paginatedPayload,
  AllCategoryType,
};
