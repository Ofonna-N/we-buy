import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AppContainer from "../component/page/AppContainer";
import AppTextField from "../component/input/AppTextField";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";

type SignInFormInput = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInFormInput>({
    resolver: yupResolver(signInFormSchema),
  });

  const onSubmitForm = handleSubmit((data) => {
    console.log(data);
    // submit
  });

  // console.log(watch("email"));

  return (
    <AppContainer>
      <Box marginBottom={"1.5rem"}>
        <Typography variant="h4">Sign In</Typography>
      </Box>
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
    </AppContainer>
  );
};

export default SignInPage;
