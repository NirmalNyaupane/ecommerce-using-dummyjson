import { UseQueryOptions } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";

type TUseQueryCustomOptions<TData = any> = Omit<
  UseQueryOptions<any, AxiosError, AxiosResponse<TData>, any>,
  "queryKey" | "queryFn" | "initialData"
> & { initialData?: () => undefined };

type PaginateResponse<T = any> = {
  products: T[];
  total: number;
  skip: number;
  limit: number;
};

export type { TUseQueryCustomOptions, PaginateResponse };
