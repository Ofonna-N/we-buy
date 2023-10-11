import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, FormHelperText } from "@mui/material";
import { useForm } from "react-hook-form";
import AppTextField from "../../../../component/input/AppTextField";
import * as yup from "yup";
import AppSpinner from "../../../../component/loading/AppSpinner";
import { UserResponse } from "../../../../types/User";
import useMutateUpdateUserById from "../../../../hooks/api-hooks/users/useMutateUpdateUserById";

const editUserFormSchema = yup.object({
  name: yup
    .string()
    .matches(/^[a-z 0-9]+$/i, "Name can only contain numbers or letter"),
  email: yup.string().email(),
  password: yup.string(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match"),
});

type Props = {
  user: UserResponse["user"] | undefined;
};

const EditUserForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editUserFormSchema),
    defaultValues: { name: props.user?.name, email: props.user?.email },
  });

  const {
    mutate: updateUser,
    isLoading: userIsLoading,
    error: userError,
  } = useMutateUpdateUserById(props.user?._id || "");

  const onSubmitForm = handleSubmit((data) => {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    updateUser(body);
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
          id="name"
          type="text"
          label="Name"
          fullWidth
          disabled={props.user?.isAdmin}
          inputProps={{
            readOnly: props.user?.isAdmin,
          }}
          {...register("name")}
          useError={errors?.name?.message}
        />

        <AppTextField
          id="email-e"
          type="email"
          label="Email"
          disabled={props.user?.isAdmin}
          inputProps={{
            readOnly: props.user?.isAdmin,
          }}
          fullWidth
          {...register("email")}
          useError={errors?.email?.message}
        />
        <AppTextField
          id="password-e"
          type="password"
          label="Password"
          disabled={props.user?.isAdmin}
          inputProps={{
            readOnly: props.user?.isAdmin,
          }}
          fullWidth
          {...register("password")}
          useError={errors?.password?.message}
        />
        <AppTextField
          id="confirm-password-e"
          type="password"
          label="Confirm Password"
          disabled={props.user?.isAdmin}
          inputProps={{
            readOnly: props.user?.isAdmin,
          }}
          fullWidth
          {...register("confirmPassword")}
          useError={errors?.confirmPassword?.message}
        />
        <Box>
          <Button
            variant="contained"
            type="submit"
            disabled={props.user?.isAdmin}
          >
            UPDATE
          </Button>
          {userIsLoading && <AppSpinner />}
          <FormHelperText error={!!userError}>
            {userError?.message}
          </FormHelperText>
        </Box>
      </form>
    </Box>
  );
};

export default EditUserForm;
