import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

interface AppModalBasicProps {
  open: boolean;
  onClose?: () => void;
  onYesClick?: () => void;
  onNoClick?: () => void;
  title: string;
  message: string;
}

const AppModalBasic: React.FC<AppModalBasicProps> = ({
  open,
  onClose,
  onYesClick,
  onNoClick,
  title,
  message,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"baseline"}
        mb={1}
      >
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" component="p">
          {message}
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: {
            justifyContent: "center",
            sm: "end",
          },
        }}
      >
        <Button variant="contained" color="primary" onClick={onYesClick}>
          Yes
        </Button>
        <Button variant="contained" color="secondary" onClick={onNoClick}>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppModalBasic;
