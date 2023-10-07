import { Box, Button, FormHelperText, Typography } from "@mui/material";
import AppContainer from "../../component/page/AppContainer";
import AppTextField from "../../component/input/AppTextField";
import { useAppSelector } from "../../hooks/redux-hooks/appStoreHooks";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useMutateUpdateUser from "../../hooks/api-hooks/users/useMutateUpdateUser";
import AppSpinner from "../../component/loading/AppSpinner";

const profileFormSchema = yup.object({
  fullName: yup
    .string()
    .matches(/^[a-z0-9\s]+$/i, "First Name can only contain numbers, letters"),

  email: yup.string().email(),
  password: yup.string(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match"),
});

const ProfilePage = () => {
  const user = useAppSelector((state) => state.userSlice.userInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileFormSchema),
    defaultValues: {
      fullName: user?.name,
      email: user?.email,
    },
  });

  const { mutate, error, isLoading } = useMutateUpdateUser();

  const onSubmitForm = handleSubmit((data) => {
    const body = {
      name: data.fullName?.trim(),
      email: data.email?.trim(),
      password: data.password?.trim(),
    };

    const values = Object.values(body);
    let updateDatabase = false;
    for (const property of values) {
      if (property) {
        updateDatabase = true;
        break;
      }
    }
    console.log("body: ", body);
    if (updateDatabase) mutate(body);
  });

  return (
    <AppContainer>
      <Box>
        <Typography variant="h4" component={"h2"} mb={"1rem"}>
          Profile
        </Typography>
      </Box>
      <Box maxWidth={"50rem"}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitForm();
          }}
        >
          <AppTextField
            type={"text"}
            id={"full-name-id"}
            label="Full Name"
            fullWidth
            {...register("fullName")}
            useError={errors.fullName?.message}
          />
          <AppTextField
            type={"email"}
            id={"email-id"}
            label="Email Address"
            fullWidth
            {...register("email")}
            useError={errors.email?.message}
          />
          <AppTextField
            type={"password"}
            id={"password-id"}
            label="Password"
            fullWidth
            {...register("password")}
            useError={errors.password?.message}
          />
          <AppTextField
            type={"password"}
            id={"confirm-password-id"}
            label="Confirm Password"
            fullWidth
            {...register("confirmPassword")}
            useError={errors.confirmPassword?.message}
          />
          <Box>
            {isLoading ? (
              <AppSpinner />
            ) : (
              <Button variant="contained" type="submit">
                Update
              </Button>
            )}

            <FormHelperText error={!!error}>{error?.message}</FormHelperText>
          </Box>
        </form>
      </Box>
    </AppContainer>
  );
};

export default ProfilePage;
