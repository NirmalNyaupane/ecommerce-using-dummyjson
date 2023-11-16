"use client";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import CommonModal from "../common/CommonModal";
import { PrimaryButton } from "../common/CustomButton";
import { InputField } from "../common/InputField";
import Login from "../loginsignup/Login";
import Signup from "../loginsignup/Signup";
import CommonNav from "./common/CommonNav";
import Image from "next/image";
import { useState } from "react";
import useDebounce from "@/hook/useDebounce";
import SearchProducts from "./common/SearchProducts";
const LogoutNav = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchBoxOpen, setSearchBoxOpen] = useState(false);
  const debounceQuery = useDebounce(searchQuery, 1000);

  const toggleSearchBox = () => {
    setSearchBoxOpen(!isSearchBoxOpen);
  };

  const handleSearchBoxOpen = () => {
    setSearchBoxOpen(true);
  };

  return (
    <CommonNav
      section1="logo"
      section2={
        <Box component={"div"} width={"500px"} position={"relative"}>
          <InputField
            type="text"
            width="100%"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onFocus={handleSearchBoxOpen}
            onBlur={toggleSearchBox}
          />
          <Box
            component={"span"}
            bgcolor={"primary"}
            position={"absolute"}
            top={"10px"}
            right={5}
          >
            <SearchIcon sx={{ color: "gray" }} />
          </Box>
          <SearchProducts
            isOpen={isSearchBoxOpen}
            searchQuery={debounceQuery}
          />
        </Box>
      }
      section3={[
        <CommonModal
          heading={"Login"}
          key={"loginModal"}
          title={
            <PrimaryButton
              style={{ paddingLeft: "32px", paddingRight: "32px" }}
              text={"Login"}
              key={"loginbutton"}
            />
          }
          body={<Login />}
          style={{
            paddingLeft: "32px",
            paddingRight: "32px",
          }}
        />,
        <CommonModal
          heading={"Register"}
          key={"loginModal"}
          title={
            <PrimaryButton text="Register" fill={true} key={"registerbutton"} />
          }
          scroll="body"
          body={<Signup />}
          style={{
            paddingLeft: "32px",
            paddingRight: "32px",
          }}
        />,
      ]}
    />
  );
};

export default LogoutNav;
