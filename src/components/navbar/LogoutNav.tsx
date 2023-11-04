import { PrimaryButton } from "../common/CustomButton";
import CommonNav from "./common/CommonNav";
import CommonModal from "../common/CommonModal";
import Login from "../loginsignup/Login";
import Signup from "../loginsignup/Signup";
const LogoutNav = () => {
  return (
    <CommonNav
      section1="logo"
      section2={[
        <CommonModal
          heading={"Login"}
          key={"loginModal"}
          title={
            <PrimaryButton
              style={{ paddingLeft: "32px" }}
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
