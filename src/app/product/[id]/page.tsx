"use client";
import { PrimaryButton } from "@/components/common/CustomButton";
import { InputField } from "@/components/common/InputField";
import ProductSlider from "@/components/product/ProductSlider";
import findPriceBeforeDiscount from "@/constants/helper/findPriceBeforeDiscount";
import { getItemByIdApi } from "@/services/productService";
import { Box, Button, Icon, Rating, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import ShareIcon from "@mui/icons-material/Share";
const Product = ({ params }: { params: { id: string } }) => {
  const { data: product, isLoading } = useQuery({
    queryKey: ["get-single-product"],
    queryFn: () => getItemByIdApi(params.id),
    enabled: !!params && !!params.id,
  });
  if (isLoading) {
    return <p>loading.........</p>;
  }

  return (
    <Box component={"div"} display={"flex"} gap={2} my={2}>
      {/* Product slider */}
      <Box component={"div"} width={"40%"}>
        <ProductSlider image={product?.data.images || []} />
      </Box>

      {/* Product details part */}
      <Box component={"div"} display={"flex"} flexDirection={"column"} gap={1}>
        <Typography fontSize={"22px"} fontWeight={400}>
          {product?.data.description}
        </Typography>
        <Box
          component={"span"}
          display={"flex"}
          alignContent={"center"}
          gap={5}
        >
          <Rating
            name="half-rating-read"
            defaultValue={product?.data.rating}
            precision={0.25}
            style={{
              fontSize: "20px",
            }}
            readOnly
          />
          <Icon
            component={ShareIcon}
            sx={{
              color: "gray",
              border: "1px solid gray",
              fontSize: "14px",
              borderRadius: "50%",
              padding: "5px",
              cursor: "pointer",
            }}
          />
        </Box>
        <Typography color={"primary"}>Brand: {product?.data.brand}</Typography>
        <Typography fontSize={"24px"} fontWeight={500} color={"primary"}>
          $ {product?.data.price}
        </Typography>
        <Box component={"span"} display={"flex"} gap={1}>
          <Typography
            component={"span"}
            color={"gray"}
            style={{ textDecoration: "line-through" }}
          >
            ${" "}
            {findPriceBeforeDiscount(
              product?.data.price || 0,
              product?.data.discountPercentage || 0
            ).toFixed(2)}
          </Typography>
          <Typography>-{product?.data.discountPercentage}%</Typography>
        </Box>

        <Box
          component={"div"}
          display={"flex"}
          alignItems={"center"}
          gap={2}
          mb={2}
        >
          <Box>Quantity</Box>
          <Box
            component={"div"}
            display={"flex"}
            alignContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            <Button sx={{ bgcolor: "#E2E1DF" }}>-</Button>
            <InputField
              type="number"
              width="20%"
              defaultValue={1}
              minRows={1}
            />

            <Button sx={{ bgcolor: "#E2E1DF" }}>+</Button>
          </Box>
        </Box>
        <PrimaryButton text={"Add to cart"} fill width="200px" />
      </Box>
    </Box>
  );
};

export default Product;
