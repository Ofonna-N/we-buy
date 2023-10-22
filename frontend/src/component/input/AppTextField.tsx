import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

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
  multiline?: TextFieldProps["multiline"];
  minRows?: TextFieldProps["minRows"];
  inputProps?: TextFieldProps["inputProps"];
  defaultValue?: TextFieldProps["defaultValue"];
  disbaleBottomMargin?: boolean;
  useEndAdornment?: {
    icon: "search";
    onClick?: () => void;
  };
};

const AppTextField = React.forwardRef<HTMLInputElement, Props>(function (
  props: Props,
  ref
) {
  const {
    useError,
    fullWidth,
    useEndAdornment,
    disbaleBottomMargin,
    sx,
    ...other
  } = props;

  const EndAdornmentIcon = () => {
    switch (props.useEndAdornment?.icon) {
      case "search":
        return <SearchIcon />;
      default:
        return <SearchIcon />;
    }
  };

  return (
    <FormControl
      fullWidth={fullWidth}
      sx={{
        marginBottom: disbaleBottomMargin ? 0 : "1rem",
        ...sx,
      }}
    >
      <TextField
        {...other}
        ref={ref}
        minRows={2}
        maxRows={5}
        InputProps={{
          endAdornment: useEndAdornment ? (
            <InputAdornment position="end">
              <IconButton onClick={props.useEndAdornment?.onClick}>
                <EndAdornmentIcon />
              </IconButton>
            </InputAdornment>
          ) : undefined,
        }}
      />
      <FormHelperText error={!!useError} sx={{ marginInline: 0 }}>
        {useError}
      </FormHelperText>
    </FormControl>
  );
});

export default AppTextField;
