import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "63%",
  left: "50%",
  transform: "translate(-50%, -100%)",
  width: "80%",
  maxWidth: 500,
  bgcolor: "background.paper",
  border: "0px solid #0000001f",
  boxShadow: 10,
  p: 2,
  borderRadius: "20px",
};

export default function modalAlert(props) {
  const { open, handleClose, headerText, text, closeButtonText } = props;

  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {headerText}
            <hr className="bg-primary" style={{ marginBlock: 2 }} />
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, paddingLeft: "3%" }}
          >
            {text}
          </Typography>
          <Stack direction="row" justifyContent="end">
            <Button
              size="medium"
              sx={{
                marginTop: "6%",
              }}
              onClick={handleClose}
              variant="text"
              color="warning"
            >
              {closeButtonText}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
