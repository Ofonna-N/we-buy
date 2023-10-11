import { Box, Stack, Typography } from "@mui/material";
import AppContainer from "../../component/page/AppContainer";
import { useAppSelector } from "../../hooks/redux-hooks/appStoreHooks";
import useQueryProfileOrders from "../../hooks/api-hooks/orders/useQueryProfileOrders";
import EditProfileForm from "../../component/common/EditProfileForm";
import AppOrdersTable from "../../component/common/AppOrdersTable";
import { useNavigate } from "react-router-dom";
import { OrderResponse } from "../../types/Order";
import RoutesPaths from "../../constants/RoutePaths";
import AppPageHeader from "../../component/page/AppPageHeader";
import useMutateUpdateUser from "../../hooks/api-hooks/users/useMutateUpdateUser";

const ProfilePage = () => {
  const user = useAppSelector((state) => state.userSlice.userInfo);

  const {
    data: orders,
    error: orderError,
    isLoading: orderIsLoading,
  } = useQueryProfileOrders();

  const navigate = useNavigate();

  const {
    mutate: updateUser,
    error: updateUserError,
    isLoading: updateUserIsLoading,
  } = useMutateUpdateUser();

  const OrderSectionTitle = (title: string) => (
    <Box>
      <Typography variant="h4" component={"h2"} mb={"2rem"}>
        {title}
      </Typography>
    </Box>
  );

  return (
    <AppContainer>
      <AppPageHeader title="Edit Profile" />
      <Stack
        sx={{
          flexDirection: {
            flexDirection: "column",
            lg: "row",
          },
        }}
        gap={2}
      >
        <Box
          maxWidth={"50rem"}
          sx={{
            width: {
              xs: "100%",
              lg: "35%",
            },
          }}
        >
          {OrderSectionTitle("Profile")}
          <EditProfileForm
            user={user}
            updateUser={updateUser}
            updateUserError={updateUserError}
            updateUserIsLoading={updateUserIsLoading}
          />
        </Box>
        {!user?.isAdmin && (
          <Box
            flexGrow={1}
            sx={{
              overflowX: "auto",
            }}
          >
            {OrderSectionTitle("Orders")}
            <AppOrdersTable
              orders={orders}
              orderError={orderError}
              orderIsLoading={orderIsLoading}
              onRowClick={(order: OrderResponse) =>
                navigate(RoutesPaths.ORDERS_ROUTE + "/" + order._id)
              }
            />
          </Box>
        )}
      </Stack>
    </AppContainer>
  );
};

export default ProfilePage;
