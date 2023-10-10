import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AppBackButton = () => {
  const navigate = useNavigate();

  return (
    <Button variant="contained" onClick={() => navigate(-1)}>
      Back
    </Button>
  );
};

export default AppBackButton;
