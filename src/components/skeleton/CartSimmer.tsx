import { Skeleton, Box } from "@mui/material";

const CartSimmer = () => {
  return (
    <Box
      component={"div"}
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      sx={{ padding: 0, margin: 0 }}
      
    >
      <Skeleton
        animation="wave"
        height={"170px"}
        variant="rectangular"
        sx={{ padding: 0, margin: 0, boxSizing: "border-box" }}
      />
      <Skeleton
        animation="wave"
        width={"40%"}
        height={"20px"}
        variant="rectangular"
        sx={{ padding: 0, margin: 0, boxSizing: "border-box" }}
      />
      <Skeleton
        animation="wave"
        width={"30%"}
        height={"20px"}
        variant="rectangular"
        sx={{ padding: 0, margin: 0, boxSizing: "border-box" }}
      />
    </Box>
  );
};

export default CartSimmer;
