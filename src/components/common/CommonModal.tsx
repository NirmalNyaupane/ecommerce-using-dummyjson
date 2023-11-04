"use client";
import CloseIcon from "@mui/icons-material/Close";
import { Breakpoint, IconButton } from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions, { DialogActionsProps } from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { useState } from "react";

interface ModalProps {
  title: JSX.Element;
  heading?: JSX.Element | React.ReactNode | string | number;
  body?: JSX.Element | React.ReactNode | string | number | null;
  footer1?: JSX.Element;
  footer2?: JSX.Element;
  buttonBg?: string;
  size?: Breakpoint;
  scroll?: "body" | "paper";
  style?: React.CSSProperties;
}

export default function CommonModal({
  title,
  heading,
  body,
  footer1,
  footer2,
  size,
  scroll,
  style
}: ModalProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <div onClick={handleClickOpen}>{title}</div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={size}
        scroll={scroll}
      >
        <DialogTitle
          id="alert-dialog-title"
          fontWeight={600}
          fontSize={"20px"}
          textTransform={"capitalize"}
        >
          {heading}
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers style={style}>{body}</DialogContent>
        <DialogActions>
          <div>{footer1}</div>
          <div>{footer2}</div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
