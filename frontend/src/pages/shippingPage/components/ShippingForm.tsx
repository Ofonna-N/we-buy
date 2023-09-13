import { Box, Button, TextFieldProps } from "@mui/material";
import AppTextField from "../../../component/input/AppTextField";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppSelector } from "../../../hooks/redux-hooks/appStoreHooks";
import ShippingFormInput from "../../../types/ShippingFormInput";

const shippingFormSchema = yup.object({
  address: yup.string().required(),
  city: yup.string().required(),
  postalCode: yup.number().typeError("Postal code must be a number").required(),
  country: yup.string().required(),
});

type Props = {
  onFormSubmit: (data: ShippingFormInput) => void;
};

const ShippingForm = (props: Props) => {
  const shippingInfo = useAppSelector(
    (state) => state.shippingInfoSlice.shippingInfo
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(shippingFormSchema),
    defaultValues: {
      address: shippingInfo?.address || "",
      city: shippingInfo?.city || "",
      country: shippingInfo?.country || "",
      // postalCode: shippingInfo?.postalCode || null,
    },
  });

  // console.log("Form is valid: ", isValid);
  const inputFieldSx: TextFieldProps["sx"] = {
    marginBottom: "1rem",
  };

  const onSubmitForm = handleSubmit((data) => {
    props.onFormSubmit(data);
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
          id="address-shp"
          type="text"
          label="Address"
          fullWidth
          sx={{ ...inputFieldSx }}
          {...register("address")}
          useError={errors.address?.message}
        />
        <AppTextField
          id="city-shp"
          type="text"
          label="City"
          fullWidth
          sx={{ ...inputFieldSx }}
          {...register("city")}
          useError={errors.city?.message}
        />
        <AppTextField
          id="postal-code-shp"
          type="number"
          label="Postal Code"
          fullWidth
          sx={{ ...inputFieldSx }}
          {...register("postalCode")}
          useError={errors.postalCode?.message}
          defaultValue={shippingInfo?.postalCode}
        />
        <AppTextField
          id="country-shp"
          type="text"
          label="Country"
          fullWidth
          sx={{ ...inputFieldSx }}
          {...register("country")}
          useError={errors.country?.message}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!isValid}
        >
          Continue
        </Button>
      </form>
    </Box>
  );
};

export default ShippingForm;
