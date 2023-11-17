"use client";
import { Box, Skeleton, Typography } from "@mui/material";
import React, { memo } from "react";
import Image from "next/image";
import ConditionallyRender from "@/components/common/ConditionallyRender";
import { useQuery } from "@tanstack/react-query";
import { getProductBySearchApi } from "@/services/productService";
import { useRouter } from "next/navigation";
const SearchProducts = ({
  searchQuery,
  isOpen,
}: {
  searchQuery: string;
  isOpen: boolean;
}) => {
  const { data: resultProducts, isLoading } = useQuery({
    queryKey: ["search-products", searchQuery],
    queryFn: () => getProductBySearchApi({ q: searchQuery }),
    enabled: searchQuery !== "" || !!searchQuery,
  });

  const router = useRouter();
  return (
    <ConditionallyRender
      condition={isOpen && searchQuery !== ""}
      show={
        <Box
          component={"div"}
          height={400}
          position={"absolute"}
          bgcolor={"white"}
          top={"45px"}
          width={"100%"}
          zIndex={9}
          py={3}
          overflow={"auto"}
          alignItems={"center"}
          boxShadow={"1px 2px 5px 2px rgba(172, 172, 172,0.5)"}
          borderRadius={"5px"}
        >
          <ConditionallyRender
            condition={isLoading}
            show={Array(8)
              .fill(0)
              .map((_, ind) => {
                return (
                  <Box
                    component={"div"}
                    display={"flex"}
                    gap={2}
                    mx={2}
                    border={isLoading ? "none" : "1px solid blue"}
                    padding={1}
                    my={1}
                    key={ind * 3}
                    borderRadius={"5px"}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    <Skeleton variant="rectangular" width={40} height={40} />
                    <Box width={"90%"}>
                      <Box fontSize={"15px"} fontWeight={500}>
                        <Skeleton
                          variant="rectangular"
                          width={"100%"}
                          height={"15px"}
                        />
                      </Box>
                      <Box
                        fontSize={"18px"}
                        fontWeight={500}
                        color={"blue"}
                        my={1}
                      >
                        <Skeleton
                          variant="rectangular"
                          width={"100%"}
                          height={"15px"}
                        />
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            elseShow={
              <>
                {resultProducts?.data.products.length === 0 && (
                  <Typography
                    component={"p"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    height={"100%"}
                    fontSize={"18px"}
                    fontWeight={500}
                  >
                    No items found
                  </Typography>
                )}
                {resultProducts?.data?.products?.map((singleProduct, ind) => {
                  return (
                    <Box
                      component={"div"}
                      display={"flex"}
                      gap={2}
                      mx={2}
                      border={"1px solid blue"}
                      padding={1}
                      my={1}
                      key={singleProduct.id}
                      borderRadius={"5px"}
                      onMouseDown={() =>
                        router.push(`/product/${singleProduct.id}`)
                      }
                      sx={{
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        src={singleProduct.thumbnail}
                        width={40}
                        height={40}
                        alt="searchlogo"
                      />
                      <Box>
                        <Box fontSize={"15px"} fontWeight={500}>
                          {singleProduct.title}
                        </Box>
                        <Box fontSize={"18px"} fontWeight={500} color={"blue"}>
                          $ {singleProduct.price}
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </>
            }
          />
        </Box>
      }
    />
  );
};

export default memo(SearchProducts);
