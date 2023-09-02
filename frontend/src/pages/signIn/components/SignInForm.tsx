import { Box, Stack, FormControl, Button, FormHelperText } from "@mui/material";
import AppTextField from "../../../component/input/AppTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SignInFormInput from "../../../types/SignInFormInput";
import * as yup from "yup";
import useMutateLogin from "../../../hooks/api-hooks/auth/useMutateLogin";
import AppSpinner from "../../../component/loading/AppSpinner";
import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/redux-hooks/appStoreHooks";
import { userSliceActions } from "../../../slices/userSlice";

const signInFormSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const SignInForm = () => {
  const {
    data: userResponse,
    isLoading,
    error,
    mutate,
  } = useMutateLogin<SignInFormInput>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInput>({
    resolver: yupResolver(signInFormSchema),
  });

  const dispach = useAppDispatch();

  const onSubmitForm = handleSubmit(async (data) => {
    mutate(data);
  });

  useEffect(() => {
    if (!userResponse) return;
    dispach(userSliceActions.setUserCredentials(userResponse.user));
  }, [userResponse]);
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
