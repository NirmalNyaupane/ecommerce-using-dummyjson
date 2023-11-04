'use client';
import { ButtonProps, Button, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material";
import ConditionallyRender from "./ConditionallyRender";
import { ifElse } from "@/constants/utils/ifElse";
import { ButtonOwnProps } from "@mui/material/Button";
interface ButtonProp extends ButtonProps {
  text: string;
  isLoading?: boolean;
  width?: string;
  fill?: boolean;
}

export const PrimaryButton = ({
  text,
  width,
  isLoading,
  fill,
  ...restProps
}: ButtonProp) => {
  const theme = useTheme();
  return (
    <>
      <Button
        disableRipple={true}
        disableFocusRipple={true}
        disableTouchRipple={true}
        sx={{
          width: width,
          color: ifElse(!!fill, "white", theme.palette.primary.main),
          bgcolor: ifElse(!!fill, theme.palette.primary.main, "white"),
          fontWeight: 500,
          ":hover": {
            bgcolor: ifElse(!!fill, theme.palette.primary.light, null),
          },
        }}
        {...restProps}
      >
        <ConditionallyRender
          condition={isLoading || false}
          show={
            <CircularProgress
              size={20}
              sx={{
                color: "white",
              }}
            />
          }
          elseShow={text}
        />
      </Button>
    </>
  );
};

export const SecondaryButton = ({
  text,
  width,
  isLoading,
  ...restProps
}: ButtonProp) => {
  return (
    <Button
      disableRipple={true}
      disableFocusRipple={true}
      disableTouchRipple={true}
      {...restProps}
      sx={{
        width: width,
        color: "white",
        bgcolor: "#212121",
        ":hover": {
          bgcolor: "#424242",
        },
      }}
    >
      <ConditionallyRender
        condition={isLoading || false}
        show={
          <CircularProgress
            size={20}
            sx={{
              color: "white",
            }}
          />
        }
        elseShow={text}
      />
    </Button>
  );
};
