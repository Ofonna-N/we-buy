import { Box, Button, FormHelperText, Typography } from "@mui/material";
import AppTextField from "../../../component/input/AppTextField";
import AppNavLink from "../../../component/interactive/AppNavLink";
import RoutesPaths from "../../../constants/RoutePaths";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AppSpinner from "../../../component/loading/AppSpinner";
import useMutateRegister from "../../../hooks/api-hooks/auth/useMutateRegister";

const registerFormSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .matches(/^[a-z0-9]+$/i, "First Name can only contain numbers or letter"),
  lastName: yup
    .string()
    .required()
    .matches(/^[a-z0-9]+$/i, "Last Name can only contain numbers or letter"),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords don't match"),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerFormSchema) });

  const { mutate, isLoading, error } = useMutateRegister();

  const onSubmitForm = handleSubmit((data) => {
    const fullName = `${data.firstName} ${data.lastName}`;

    const body = {
      name: fullName,
      email: data.email,
      password: data.password,
    };
    // console.log("Submited Form: ", body);
    mutate(body);
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
        }}
      >
        <AppTextField
          id="first-name-r"
          type="text"
          label="First Name"
          fullWidth
          {...register("firstName")}
          useError={errors?.firstName?.message}
        />
        <AppTextField
          id="last-name-r"
          type="text"
          label="Last Name"
          fullWidth
          {...register("lastName")}
          useError={errors?.lastName?.message}
        />
        <AppTextField
          id="email-r"
          type="email"
          label="Email"
          fullWidth
          {...register("email")}
          useError={errors?.email?.message}
        />
        <AppTextField
          id="password-r"
          type="password"
          label="Password"
          fullWidth
          {...register("password")}
          useError={errors?.password?.message}
        />
        <AppTextField
          id="comfirm-password-r"
          type="password"
          label="Confirm Password"
          fullWidth
          {...register("confirmPassword")}
          useError={errors?.confirmPassword?.message}
        />
        <Typography component={"p"} variant="caption" marginY={"0.5rem"}>
          Already have an account?{" "}
          <AppNavLink to={RoutesPaths.SIGN_IN_ROUTE}>Sign in here</AppNavLink>
        </Typography>
        <Box>
          <Button variant="contained" type="submit">
            Register
          </Button>
          {isLoading && <AppSpinner />}
          <FormHelperText error={!!error}>{error?.message}</FormHelperText>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterForm;
