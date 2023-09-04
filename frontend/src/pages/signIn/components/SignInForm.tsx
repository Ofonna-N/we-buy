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

import AppNavLink from "../../../component/interactive/AppNavLink";
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
          console.log("submited!");
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
          sx={{
            marginBottom: "1rem",
          }}
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
        <FormControl fullWidth>
          <Button variant="contained" disabled={isLoading} type="submit">
            Submit
          </Button>
        </FormControl>
        {isLoading && <AppSpinner />}
        <FormHelperText error={!!error}>{error?.message}</FormHelperText>
      </form>
    </Box>
  );
};

export default SignInForm;
