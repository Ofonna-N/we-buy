import { Box, Stack, FormControl, Button } from "@mui/material";
import AppTextField from "../../../component/input/AppTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SignInFormInput from "../../../types/SignInFormInput";
import * as yup from "yup";

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

  const onSubmitForm = handleSubmit((data) => {
    console.log(data);
    // submit
  });
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
            useError={errors.email?.message}
          />
          <AppTextField
            id="password"
            label="Password"
            type="password"
            {...register("password")}
            useError={errors.password?.message}
          />

          <FormControl fullWidth>
            <Button variant="contained" onClick={onSubmitForm}>
              Submit
            </Button>
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
};

export default SignInForm;
