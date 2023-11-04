"use client";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { InputField, InputFieldWithRightIcon } from "../common/InputField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { PrimaryButton } from "../common/CustomButton";
import { ifElse } from "@/constants/utils/ifElse";
const Login = () => {
  const [isShowPassword, setShowPassword] = useState(false);
  return (
    <Box
      component={"form"}
      display={"flex"}
      flexDirection={"column"}
      gap={"32px"}
    >
      <Box
        component={"div"}
        display={"flex"}
        gap={"12px"}
        flexDirection={"column"}
      >
        <InputField label="Email" type="email" width="100%" />
        <InputFieldWithRightIcon
          type={ifElse(isShowPassword, "text", "password")}
          onRightIconClick={() => setShowPassword(!isShowPassword)}
          label="Password"
          icon={ifElse(
            !isShowPassword,
            <VisibilityIcon />,
            <VisibilityOffIcon />
          )}
        />
        <Typography
          component={"text"}
          textAlign={"end"}
          sx={{ cursor: "pointer" }}
        >
          Forgot password?
        </Typography>
      </Box>
      <PrimaryButton type="submit" text={"Login"} fill={true} />

      <Box component={"div"} mx={"auto"}>
        <Typography>OR USING LOGIN</Typography>
        <Box component={"div"} display={"flex"} gap={"16px"} mt={"16px"}>
          <Box
            component={"div"}
            border={"1px solid blue"}
            width={"fit-content"}
            padding={"10px 12px"}
            borderRadius={"5px"}
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
          >
            <GoogleIcon color={"primary"} />
          </Box>
          <Box
            component={"div"}
            border={"1px solid blue"}
            width={"fit-content"}
            padding={"10px 12px"}
            borderRadius={"5px"}
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
          >
            <AppleIcon color={"primary"} />
          </Box>
        </Box>
      </Box>
      <Typography component={"p"} textAlign={"center"}>
        Don’t have an account? Signup
      </Typography>
    </Box>
  );
};

export default Login;
