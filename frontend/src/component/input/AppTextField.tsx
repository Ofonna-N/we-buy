import {
  FormControl,
  FormHelperText,
  TextField,
  TextFieldProps,
} from "@mui/material";
import React from "react";

type Props = {
  fullWidth?: boolean;
  type: TextFieldProps["type"];
  label?: TextFieldProps["label"];
  value?: TextFieldProps["value"];
  id: TextFieldProps["id"];
  onChange?: TextFieldProps["onChange"]; // assign onChange event
  onBlur?: TextFieldProps["onBlur"]; // assign onBlur event
  name?: TextFieldProps["name"]; // assign name prop
  // ref?: TextFieldProps["ref"]; // assign ref prop
  focused?: TextFieldProps["focused"];
  useError?: string;
  disabled?: TextFieldProps["disabled"];
  sx?: TextFieldProps["sx"];
};

const AppTextField = React.forwardRef<HTMLInputElement, Props>(function (
  props: Props,
  ref
) {
  const { useError, fullWidth, ...other } = props;
  return (
    <FormControl fullWidth={fullWidth}>
      <TextField {...other} ref={ref} />
      <FormHelperText error={!!useError} sx={{ marginInline: 0 }}>
        {useError}
      </FormHelperText>
    </FormControl>
  );
});

export default AppTextField;
