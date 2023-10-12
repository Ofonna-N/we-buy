import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectProps,
  FormHelperText,
} from "@mui/material";

import { Control, Controller, Path } from "react-hook-form";

import { FieldValues } from "react-hook-form";

type Props<T extends FieldValues> = {
  label: SelectProps["label"];
  id: SelectProps["id"];
  required?: SelectProps["required"];
  onChange?: SelectProps["onChange"]; // assign onChange event
  onBlur?: SelectProps["onBlur"]; // assign onBlur event
  name?: keyof T; // assign name prop
  options: { value: string; label: string }[];
  useError?: string;
  sx?: SelectProps["sx"];
  control: Control<T, keyof T>;
};

const AppInputDropdown = <T extends FieldValues>(props: Props<T>) => {
  const { useError, sx } = props;

  return (
    <Controller
      name={props.name as Path<T>}
      control={props.control}
      render={({ field }) => (
        <FormControl fullWidth sx={sx}>
          <InputLabel id={`${props.id}-label`} htmlFor={props.id}>
            {props.label}
          </InputLabel>
          <Select {...field}>
            {props.options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText error={!!useError} sx={{ marginInline: 0 }}>
            {useError}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default AppInputDropdown;
