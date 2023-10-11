import { useNavigate } from "react-router-dom";
import AppUsersTable from "../../../component/common/AppUsersTable";
import AppContainer from "../../../component/page/AppContainer";
import AppPageHeader from "../../../component/page/AppPageHeader";
import useQueryAllUsers from "../../../hooks/api-hooks/users/useQueryAllUsers";
import User from "../../../types/User";
import useBasicConfirmationDialog from "../../../hooks/useBasicConfirmationDialog";
import useMutateDeleteUser from "../../../hooks/api-hooks/users/useMutateDeleteUser";

const UserListAdminPage = () => {
  const {
    data: users,
    error: userError,
    isLoading: userIsLoading,
  } = useQueryAllUsers();

  const { mutate: deleteUser } = useMutateDeleteUser();
  const navigate = useNavigate();
  const setConfirmationDialog =
    useBasicConfirmationDialog().setBasicConfirmationDialogState;
  const closeConfirmationDialog =
    useBasicConfirmationDialog().clearBasicConfirmationDialogState;

  const onNavigateToUsersPage = (user: User) => {
    const serializedData = JSON.stringify(user);
    navigate(user._id + "?user=" + serializedData, { relative: "path" });
  };

  const onDeleteUser = (user: User) => {
    setConfirmationDialog({
      open: true,
      title: "Delete User",
      content: "Are you sure you want to delete this user?",
      onConfirm: () => {
        // deleteProduct(product._id);
        deleteUser(user._id);
        closeConfirmationDialog();
      },
      onCancel: () => {
        closeConfirmationDialog();
      },
    });
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
        onDeleteClick={onDeleteUser}
      />
    </AppContainer>
  );
};

export default UserListAdminPage;
