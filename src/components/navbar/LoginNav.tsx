import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, Badge } from "@mui/material";
import Link from "next/link";
import CommonMenu from "../common/CommonMenu";
import CommonNav from "./common/CommonNav";
const LoginNav = () => {
  return (
    <CommonNav
      section1="logo"
      section2={[
        <>
          <CommonMenu
            buttonElement={
              <Badge
                color="error"
                overlap="circular"
                badgeContent={5}
                sx={{
                  cursor: "pointer",
                }}
              >
                {<ShoppingCartIcon />}
              </Badge>
            }
            menuItems={<p>noting</p>}
          />

          <CommonMenu
            buttonElement={
              <Badge
                color="error"
                overlap="circular"
                badgeContent={5}
                sx={{
                  cursor: "pointer",
                }}
              >
                {<NotificationsNoneIcon />}
              </Badge>
            }
            menuItems={<p>noting</p>}
          />

          <CommonMenu
            buttonElement={<Avatar sx={{ width: 32, height: 32 }}>M</Avatar>}
            menuItems={[
              <Link
                href="/setting"
                key={"profile"}
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Profile
              </Link>,
              <Link
                href="/setting"
                key={"profile"}
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Setting
              </Link>,
              <Link
                href="/setting"
                key={"profile"}
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Favourite
              </Link>,
              <Link
                href="/setting"
                key={"profile"}
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                History
              </Link>,
              <Link
                href="/setting"
                key={"profile"}
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Signout
              </Link>,
            ]}
          />
        </>,
      ]}
    />
  );
};

export default LoginNav;
