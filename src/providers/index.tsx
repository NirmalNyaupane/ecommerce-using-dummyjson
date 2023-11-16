"use client";
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { API_BASE_URL } from "@/constants/config";
const queryClient = new QueryClient();
const Providers = ({ children }: { children: React.ReactNode }) => {
  axios.defaults.baseURL = API_BASE_URL;
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default Providers;
