import {
  Box,
  FormControl,
  Button,
  FormHelperText,
  Typography,
} from "@mui/material";
import AppTextField from "../../../component/input/AppTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SignInFormInput from "../../../types/SignInFormInput";
import * as yup from "yup";
import useMutateLogin from "../../../hooks/api-hooks/auth/useMutateLogin";
import AppSpinner from "../../../component/loading/AppSpinner";

import AppNavLink from "../../../component/interactive/clickables/AppNavLink";
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

  const demoUserLogin = () => {
    mutate({
      email: "ellamaii@yahoo.com",
      password: "ela12345",
    });
  };

  const demoAdminLogin = () => {
    mutate({
      email: "demoAdmin@yahoo.com",
      password: "ela12345",
    });
  };

  return (
    <Box
      sx={{
        maxWidth: "50rem",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitForm();
        }}
      >
        <AppTextField
          id="email-address"
          label="email"
          type="email"
          {...register("email")}
          disabled={isLoading}
          useError={errors.email?.message}
          fullWidth
        />
        <AppTextField
          id="password"
          label="Password"
          type="password"
          {...register("password")}
          disabled={isLoading}
          useError={errors.password?.message}
          fullWidth
        />
        <Typography variant="caption" component={"p"} my={"0.5rem"}>
          Dont have an account?{" "}
          <AppNavLink to={RoutesPaths.REGISTER_ROUTE}>register here</AppNavLink>
        </Typography>
        <FormControl fullWidth sx={{ display: "flex", gap: 1 }}>
          <Button variant="contained" disabled={isLoading} type="submit">
            Submit
          </Button>
          <Button
            variant="contained"
            disabled={isLoading}
            type="button"
            color="success"
            onClick={demoUserLogin}
          >
            Sign in as Demo user
          </Button>
          <Button
            variant="contained"
            disabled={isLoading}
            type="button"
            color="success"
            onClick={demoAdminLogin}
          >
            Sign in as Demo admin
          </Button>
        </FormControl>
        {isLoading && <AppSpinner />}
        <FormHelperText error={!!error}>{error?.message}</FormHelperText>
      </form>
    </Box>
  );
};

export default SignInForm;
