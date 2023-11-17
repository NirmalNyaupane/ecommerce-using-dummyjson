import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@mui/material";
import Image from "next/image";
interface props {
  imageLink: string;
  heading: string;
  price: string;
}

export default function ProductCard({ imageLink, heading, price }: props) {
  return (
    <Card>
      <CardActionArea sx={{ height: 300 }}>
        <Box
          component={"div"}
          height="180"
          sx={{
            objectFit: "cover",
            borderRadius: "5px",
          }}
        >
          <Image
            src={imageLink}
            alt="product image"
            height={180}
            width={300}
            style={{
              objectFit: "cover",
            }}
            loading="lazy" 
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            fontSize={"18px"}
            fontWeight={600}
          >
            $ {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
