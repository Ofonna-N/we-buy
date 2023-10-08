import { Box, Stack, Typography } from "@mui/material";
import AppContainer from "../../component/page/AppContainer";
import { useAppSelector } from "../../hooks/redux-hooks/appStoreHooks";
import useQueryProfileOrders from "../../hooks/api-hooks/orders/useQueryProfileOrders";
import EditProfileForm from "./components/EditProfileForm";
import ProfileOrdersDisplay from "./components/ProfileOrdersDisplay";

const ProfilePage = () => {
  const user = useAppSelector((state) => state.userSlice.userInfo);

  const {
    data: orders,
    error: orderError,
    isLoading: orderIsLoading,
  } = useQueryProfileOrders();

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
        <Box
          flexGrow={1}
          sx={{
            overflowX: "auto",
          }}
        >
          {OrderSectionTitle("Orders")}
          <ProfileOrdersDisplay
            orders={orders}
            orderError={orderError}
            orderIsLoading={orderIsLoading}
          />
        </Box>
      </Stack>
    </AppContainer>
  );
};

export default ProfilePage;
