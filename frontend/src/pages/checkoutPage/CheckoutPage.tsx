import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { Box, Breadcrumbs, useTheme } from "@mui/material";
import AppContainer from "../../component/page/AppContainer";
import { useAppSelector } from "../../hooks/redux-hooks/appStoreHooks";
import AppNavLink from "../../component/interactive/clickables/AppNavLink";
import { useEffect, useMemo, useRef } from "react";
import RoutesPaths from "../../constants/RoutePaths";

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

  const navigate = useRef(useNavigate());
  const location = useLocation();

  const theme = useTheme();

  useEffect(() => {
    const loc = location.pathname;
    const path = RoutesPaths.CHECKOUT_ROUTE;

    if (loc === path) {
      navigate.current(RoutesPaths.SHIPPING_ROUTE);
    }
  }, [location]);

  return (
    <AppContainer>
      <Box mb={"2rem"}>
        <Breadcrumbs separator={"/"}>
          {breadCrumbs.map((crumb, i) => (
            <AppNavLink
              key={crumb}
              sx={{
                color:
                  i === breadCrumbs.length - 1
                    ? theme.palette.text.primary
                    : "primary",
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
