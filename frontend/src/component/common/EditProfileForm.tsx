import { Box, Button, FormHelperText } from "@mui/material";
import AppTextField from "../input/AppTextField";
import AppSpinner from "../loading/AppSpinner";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import User from "../../types/User";
import { UseMutateFunction } from "react-query";

type Props = {
  user: User | null | undefined;
  updateUser: UseMutateFunction<User, Error, unknown, unknown>;
  updateUserError: Error | null;
  updateUserIsLoading: boolean;
};
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
const EditProfileForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileFormSchema),
    defaultValues: {
      fullName: props.user?.name,
      email: props.user?.email,
    },
  });

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
    // console.log("body: ", body);
    if (updateDatabase) props.updateUser(body);
  });

  return (
    <Box>
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
          {props.updateUserIsLoading ? (
            <AppSpinner />
          ) : (
            <Button variant="contained" type="submit">
              Update
            </Button>
          )}

          <FormHelperText error={!!props.updateUserError}>
            {props.updateUserError?.message}
          </FormHelperText>
        </Box>
      </form>
    </Box>
  );
};

export default EditProfileForm;
