"use client";
import {
  Box,
  CSSObject,
  CircularProgress,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import Slider from "./Slider";
import Link from "next/link";
import ProductCard from "../card/ProductCard";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getAllProductAPI } from "@/services/productService";
import { getAllCategoryApi } from "@/services/categoryService";
import { ITEMS_PER_PAGE } from "@/constants";
import CartSimmer from "../skeleton/CartSimmer";
import ConditionallyRender from "../common/ConditionallyRender";
import Error from "next/error";

const HomePage = () => {
  // API to fetch all products in a infinite scroll
  const {
    data,
    isLoading: productsLoading,
    fetchNextPage,
    isError,
    error,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["fetch-all-products"],
    queryFn: ({ pageParam }) =>
      getAllProductAPI({ limit: 10, skip: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.data.skip * ITEMS_PER_PAGE + ITEMS_PER_PAGE >=
      lastPage.data.total
        ? null
        : lastPage.data.skip + 1,
  });

  const customScrollbarStyle: CSSObject = {
    "&::-webkit-scrollbar": {
      height: "6px",
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
    },
    ":hover::-webkit-scrollbar-thumb": {
      backgroundColor: "gray.200",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
  };

  //It handles the infinie scroll
  const handelInfiniteScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      fetchNextPage();
    }
  };

  //api to fetch all category
  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ["get-all-category"],
    queryFn: getAllCategoryApi,
  });

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box
        component="div"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={4}
      >
        <Box
          component="ul"
          width={"20%"}
          borderRadius={"10px"}
          sx={{
            boxShadow: "1px 1px 5px 2px rgba(213, 213, 213, 0.8)",
            ...customScrollbarStyle,
          }}
          py={2}
          overflow={"auto"}
          maxHeight={"400px"}
          minHeight={"350px"}
          textTransform={"uppercase"}
        >
          {categories?.data.map((singleCategory) => {
            return (
              <ListItem
                key={singleCategory}
                sx={{
                  paddingX: "0",
                }}
              >
                <Link
                  href={`/${singleCategory}`}
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  {singleCategory}
                </Link>
              </ListItem>
            );
          })}
        </Box>
        <Slider />
      </Box>
      <ConditionallyRender
        condition={isError}
        show={<Error statusCode={500} title={error?.message} />}
        elseShow={
          <>
            <Typography component={"h2"} fontSize={"24px"} my={3}>
              Just For you
            </Typography>

            <Box
              component={"div"}
              display={"grid"}
              gridTemplateColumns={"repeat(auto-fill,minmax(250px,1fr))"}
              rowGap={2}
              columnGap={2}
            >
              <ConditionallyRender
                condition={productsLoading}
                show={Array(10)
                  .fill(0)
                  .map((_, index) => {
                    return <CartSimmer key={(index + 9) * 15} />;
                  })}
                elseShow={data?.pages.map((singlePage) => {
                  return singlePage.data.products.map((singleProduct) => {
                    return (
                      <Link
                        href={`/product/${singleProduct.id}`}
                        key={singleProduct.id}
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <ProductCard
                          imageLink={singleProduct.thumbnail}
                          heading={singleProduct.title}
                          price={String(singleProduct.price)}
                        />
                      </Link>
                    );
                  });
                })}
              />
            </Box>
            {isFetchingNextPage && (
              <Box
                component={"div"}
                my={2}
                display={"flex"}
                justifyContent={"center"}
              >
                <CircularProgress />
              </Box>
            )}
          </>
        }
      />
    </>
  );
};

export default HomePage;
