import { useLocation } from "react-router-dom";
import AppContainer from "../../../component/page/AppContainer";
import AppPageHeader from "../../../component/page/AppPageHeader";
import EditUserForm from "./components/EditUserForm";
import { Box } from "@mui/material";
import { UserResponse } from "../../../types/User";

const EditUserAdminPage = () => {
  const location = useLocation();

  const userJSON = new URLSearchParams(location.search).get("user");
  const user = JSON.parse(userJSON || "{}") as UserResponse["user"];
  return (
    <AppContainer>
      <AppPageHeader title="Edit User" titlePostfix={user._id} />
      <Box>
        <EditUserForm user={user} />
      </Box>
    </AppContainer>
  );
};

export default EditUserAdminPage;
