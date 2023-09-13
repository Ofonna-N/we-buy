import { Outlet } from "react-router-dom";

import { Box, Breadcrumbs } from "@mui/material";
import AppContainer from "../../component/page/AppContainer";
import { useAppSelector } from "../../hooks/redux-hooks/appStoreHooks";
import AppNavLink from "../../component/interactive/AppNavLink";
import { useMemo } from "react";

const CheckoutPage = () => {
  const checkoutSteps = useAppSelector(
    (state) => state.checkoutStepsSlice.checkoutSteps
  );
  const breadCrumbs = useAppSelector(
    (state) => state.checkoutStepsSlice.breadCrumbs
  );

  const checkoutStepsData = useMemo(() => {
    return Object.values(checkoutSteps);
  }, [checkoutSteps]);

  return (
    <AppContainer>
      <Box mb={"2rem"}>
        <Breadcrumbs separator={"/"}>
          {breadCrumbs.map((crumb, i) => (
            <AppNavLink
              sx={{
                color: i === breadCrumbs.length - 1 ? "white" : "primary",
                textDecoration: "none",
              }}
              to={checkoutStepsData.find((data) => crumb === data.label)?.path}
            >
              {crumb}
            </AppNavLink>
          ))}
        </Breadcrumbs>
      </Box>
      <Outlet />
    </AppContainer>
  );
};

export default CheckoutPage;
