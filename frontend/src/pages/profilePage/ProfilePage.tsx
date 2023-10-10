import { Box, Stack, Typography } from "@mui/material";
import AppContainer from "../../component/page/AppContainer";
import { useAppSelector } from "../../hooks/redux-hooks/appStoreHooks";
import useQueryProfileOrders from "../../hooks/api-hooks/orders/useQueryProfileOrders";
import EditProfileForm from "./components/EditProfileForm";
import AppOrdersTable from "../../component/common/AppOrdersTable";
import { useNavigate } from "react-router-dom";
import { OrderResponse } from "../../types/Order";
import RoutesPaths from "../../constants/RoutePaths";

const ProfilePage = () => {
  const user = useAppSelector((state) => state.userSlice.userInfo);

  const {
    data: orders,
    error: orderError,
    isLoading: orderIsLoading,
  } = useQueryProfileOrders();

  const navigate = useNavigate();

  const OrderSectionTitle = (title: string) => (
    <Box>
      <Typography variant="h4" component={"h2"} mb={"2rem"}>
        {title}
      </Typography>
    </Box>
  );

  return (
    <AppContainer>
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
          <EditProfileForm user={user} />
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
