import { Box, Skeleton } from "@mui/material";

const ProductShimmer = () => {
  return (
    <Box component={"div"} display={"flex"} gap={2}>
      <Box component={"div"} width={"40%"}>
        <Skeleton
          animation="wave"
          height={"300px"}
          variant="rectangular"
          sx={{ padding: 0, margin: 0, boxSizing: "border-box" }}
        />
      </Box>
      <Box
        width={"50%"}
        component={"div"}
        display={"flex"}
        flexDirection={"column"}
        gap={1}
      >
        <Skeleton
          animation="wave"
          height={"40px"}
          variant="rectangular"
          sx={{ padding: 0, margin: 0, boxSizing: "border-box" }}
        />
        <Skeleton
          animation="wave"
          height={"30px"}
          width={"30%"}
          variant="rectangular"
          sx={{ padding: 0, margin: 0, boxSizing: "border-box" }}
        />
        <Skeleton
          animation="wave"
          height={"30px"}
          width={"30%"}
          variant="rectangular"
          sx={{ padding: 0, margin: 0, boxSizing: "border-box" }}
        />
        <Skeleton
          animation="wave"
          height={"20px"}
          width={"25%"}
          variant="rectangular"
          sx={{ padding: 0, margin: 0, boxSizing: "border-box" }}
        />
        <Skeleton
          animation="wave"
          height={"20px"}
          width={"25%"}
          variant="rectangular"
          sx={{ padding: 0, margin: 0, boxSizing: "border-box" }}
        />
        <Skeleton
          animation="wave"
          height={"30px"}
          width={"35%"}
          variant="rectangular"
          sx={{ padding: 0, margin: 0, boxSizing: "border-box" }}
        />
        <Skeleton
          animation="wave"
          height={"30px"}
          width={"30%"}
          variant="rectangular"
          sx={{ padding: 0, margin: 0, boxSizing: "border-box", mt: 3 }}
        />
      </Box>
    </Box>
  );
};

export default ProductShimmer;
