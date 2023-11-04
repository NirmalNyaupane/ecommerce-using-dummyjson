import { PrimaryButton } from "@/components/common/CustomButton";
import { Box, Divider } from "@mui/material";
import Link from "next/link";
import React, { ReactElement, ReactNode } from "react";
import Image from "next/image";
import ConditionallyRender from "@/components/common/ConditionallyRender";

interface props {
  section1: "logo" | JSX.Element | ReactElement | ReactNode;
  section2?: ReactNode | JSX.Element | ReactElement | ReactNode;
  section3?: JSX.Element[] | ReactElement[] | ReactNode[];
  section4?: JSX.Element[] | ReactElement[] | ReactNode[];
}
const CommonNav = ({ section1, section2, section3, section4 }: props) => {
  return (
    <>
      <Box
        component={"nav"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
        padding={"10px, 128px, 10px, 128px"}
      >
        <ConditionallyRender
          condition={section1 === "logo"}
          show={
            <Box component={"div"}>
              <Link href={"/"}>
                <Image src="./logo.svg" height={50} width={150} alt="logo" />
              </Link>
            </Box>
          }
          elseShow={section1}
        />

        <ConditionallyRender
          condition={!!section2}
          show={
            <Box component={"div"} display={"flex"} gap={"24px"}>
              {Array.isArray(section2)
                ? section2.map((singleElement) => {
                    return singleElement as JSX.Element;
                  })
                : section2}
            </Box>
          }
        />

        <ConditionallyRender
          condition={!!section3}
          show={
            <Box component={"div"} display={"flex"} gap={"24px"}>
              {Array.isArray(section3)
                ? section3.map((singleElement) => {
                    return singleElement as JSX.Element;
                  })
                : section3}
            </Box>
          }
        />
        <ConditionallyRender
          condition={!!section4}
          show={
            <Box component={"div"} display={"flex"} gap={"24px"}>
              {Array.isArray(section4)
                ? section4.map((singleElement) => {
                    return singleElement as JSX.Element;
                  })
                : section4}
            </Box>
          }
        />
      </Box>
      <Divider
        sx={{
          height: "0.5px",
          bgcolor: "#E2E8F0",
        }}
      />
    </>
  );
};

export default CommonNav;
