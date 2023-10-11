import { useNavigate } from "react-router-dom";
import AppUsersTable from "../../../component/common/AppUsersTable";
import AppContainer from "../../../component/page/AppContainer";
import AppPageHeader from "../../../component/page/AppPageHeader";
import useQueryAllUsers from "../../../hooks/api-hooks/users/useQueryAllUsers";
import User from "../../../types/User";

const UserListAdminPage = () => {
  const {
    data: users,
    error: userError,
    isLoading: userIsLoading,
  } = useQueryAllUsers();

  const navigate = useNavigate();

  const onNavigateToUsersPage = (user: User) => {
    const serializedData = JSON.stringify(user);
    navigate(user._id + "?user=" + serializedData, { relative: "path" });
  };

  return (
    <AppContainer>
      <AppPageHeader title="Users" />
      <AppUsersTable
        users={users}
        userError={userError}
        userIsLoading={userIsLoading}
        onRowClick={onNavigateToUsersPage}
        onEditClick={onNavigateToUsersPage}
      />
    </AppContainer>
  );
};

export default UserListAdminPage;
