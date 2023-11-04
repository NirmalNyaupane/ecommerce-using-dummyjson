"use client";
import countries, { CountryType } from "@/constants/helper/countryCode";
import {
  Box,
  Button,
  FormLabel,
  Icon,
  Input,
  InputProps,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

const returnBoarderColor = (
  isFocus: boolean,
  errorMessage: string | undefined | null
) => {
  if (isFocus) {
    return "#1B27D9";
  }
  if (errorMessage) {
    return "red";
  }

  return "gray";
};

interface InputFieldProps extends InputProps {
  label?: string;
  formReturn?: UseFormRegisterReturn;
  errorMessage?: string;
  width?: string;
}

export const InputField = ({
  label,
  formReturn,
  errorMessage,
  width,
  ...restProps
}: InputFieldProps) => {
  const theme = useTheme();
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Box margin={"none"}>
      <FormLabel
        htmlFor={label}
        focused={false}
        sx={{
          color: "black",
        }}
      >
        {label}
      </FormLabel>
      <Input
        disableUnderline={true}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        id={label}
        {...restProps}
        sx={{
          mt: "5px",
          display: "block",
          border: `1px solid ${returnBoarderColor(isFocus, errorMessage)}`,
          borderRadius: "5px",
          paddingX: "5px",
          width: width || "50%",
        }}
      />
      <Typography component={"p"} color={"red"}>{errorMessage}</Typography>
    </Box>
  );
};

interface InputFieldWithRightIconProps extends InputFieldProps {
  erroMessage?: string;
  width?: string;
  icon?: React.ReactElement;
  onRightIconClick?: () => void;
}

export const InputFieldWithRightIcon = ({
  icon,
  errorMessage,
  label,
  width,
  onRightIconClick,
  ...restProps
}: InputFieldWithRightIconProps) => {
  const theme = useTheme();
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Box margin={"none"}>
      <FormLabel
        htmlFor={label}
        focused={false}
        sx={{
          color: "black",
        }}
      >
        {label}
      </FormLabel>

      <Box position={"relative"} width={width ? width : "100%"}>
        <Input
          disableUnderline={true}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          id={label}
          {...restProps}
          sx={{
            mt: "5px",
            display: "block",
            border: `1px solid ${returnBoarderColor(isFocus, errorMessage)}`,
            borderRadius: "5px",
            paddingX: "5px",
            width: "100%",
            position: "relative",
          }}
        />
        <Button
          variant="text"
          onClick={onRightIconClick}
          disableRipple={true}
          disableFocusRipple={true}
          disableTouchRipple={true}
          sx={{
            ":hover": {
              bgcolor: "none",
            },
            position: "absolute",
            top: 0,
            right: 0,
            color: "gray",
            cursor: "pointer",
            margin: 0,
            padding: 0,
          }}
        >
          <Icon>{icon}</Icon>
        </Button>
      </Box>
    </Box>
  );
};

export const PhoneNumberInputField = ({
  label,
  errorMessage,
  width,
  ...restProps
}: InputFieldProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  const [selectCountry, setSelectCountry] = useState<{
    code: string;
    phone: string;
  }>({
    code: "NP",
    phone: "+977",
  });
  const searchCountry = () => {
    let filterCountry = countries;

    if (searchQuery !== "") {
      filterCountry = countries.filter((singleCountry) =>
        singleCountry.label.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filterCountry;
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (data: CountryType) => {
    setSelectCountry({ code: data.code, phone: data.phone });
  };

  return (
    <Box>
      <FormLabel
        htmlFor={label}
        focused={false}
        sx={{
          color: "black",
        }}
      >
        {label}
      </FormLabel>

      <Box
        sx={{
          display: "flex",
          width: width ? width : "100%",
          alignItems: "center",
          mt: "5px",
          borderRadius: "5px",
          paddingX: "5px",
          position: "relative",
        }}
      >
        <Button
          type="button"
          variant="text"
          onClick={handleClick}
          sx={{
            width: "40px",
            paddingX: "0px",
            margin: "0px",
            py: "6px",
            border: `1px solid ${returnBoarderColor(isFocus, errorMessage)}`,
            borderRadius: "5px 0px 0px 5px",
          }}
        >
          <Image
            src={`https://flagcdn.com/w20/${selectCountry.code.toLowerCase()}.png`}
            width={20}
            height={20}
            alt="image"
          />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <InputField
              width="full"
              placeholder="Search a country"
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              ref={searchRef}
            />
          </MenuItem>

          {searchCountry().map((singleCountry) => {
            return (
              <MenuItem
                onClick={() => {
                  handleItemClick(singleCountry);
                  handleClose();
                }}
                key={singleCountry.code}
              >
                <Box sx={{ "& > img": { mr: 2, flexShrink: 0 } }}>
                  <Image
                    loading="lazy"
                    width={10}
                    height={10}
                    src={`https://flagcdn.com/w20/${singleCountry.code.toLowerCase()}.png`}
                    alt=""
                  />
                  +{singleCountry.phone} ({singleCountry.code})
                </Box>
              </MenuItem>
            );
          })}
        </Menu>

        <Input
          type="number"
          disableUnderline={true}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          id={label}
          sx={{
            paddingX: "5px",
            border: `1px solid ${returnBoarderColor(isFocus, errorMessage)}`,
            borderRadius: "0px 5px 5px 0px",
            width: "100%",
          }}
          {...restProps}
        />
      </Box>
    </Box>
  );
};
