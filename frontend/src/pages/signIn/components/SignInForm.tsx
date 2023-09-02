import { Box, Stack, FormControl, Button, FormHelperText } from "@mui/material";
import AppTextField from "../../../component/input/AppTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SignInFormInput from "../../../types/SignInFormInput";
import * as yup from "yup";
import useMutateLogin from "../../../hooks/api-hooks/auth/useMutateLogin";
import AppSpinner from "../../../component/loading/AppSpinner";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import RoutesPaths from "../../../constants/RoutePaths";

const signInFormSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInput>({
    resolver: yupResolver(signInFormSchema),
  });

  const { isLoading, error, mutate } = useMutateLogin<SignInFormInput>();

  const onSubmitForm = handleSubmit(async (data) => {
    mutate(data);
  });
  const navigate = useNavigate();
  const location = useLocation();
  const params = useMemo(() => {
    return new URLSearchParams(location.search);
  }, [location]);

  const redirectParam = params.get("redirect");

  useEffect(() => {
    if (redirectParam) navigate(RoutesPaths.HOME_ROUTE);
  }, [redirectParam]);

  return (
    <Box
      sx={{
        maxWidth: "50rem",
      }}
    >
      <form>
        <Stack gap={3}>
          <AppTextField
            id="email-address"
            label="email"
            type="email"
            {...register("email")}
            disabled={isLoading}
            useError={errors.email?.message}
          />
          <AppTextField
            id="password"
            label="Password"
            type="password"
            {...register("password")}
            disabled={isLoading}
            useError={errors.password?.message}
          />

          <FormControl fullWidth>
            <Button
              variant="contained"
              disabled={isLoading}
              onClick={onSubmitForm}
            >
              Submit
            </Button>
          </FormControl>
          {isLoading && <AppSpinner />}
          <FormHelperText error={!!error}>{error?.message}</FormHelperText>
        </Stack>
      </form>
    </Box>
  );
};

export default SignInForm;
