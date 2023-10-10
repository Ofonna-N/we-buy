import { Box, Button } from "@mui/material";
import AppTextField from "../../../../component/input/AppTextField";
import Product from "../../../../types/Product";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {
  product: Product;
};
type ProductFormValues = {
  name: string;
  price: number;
  brand: string;
  countInStock: number;
  category: string;
  description: string;
};
const editProductFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  price: yup.number().required("Price is required"),
  brand: yup.string().required("Brand is required"),
  countInStock: yup.number().required("Count In Stock is required"),
  category: yup.string().required("Category is required"),
  description: yup.string().required("Description is required"),
});

const EditProductsForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editProductFormSchema),
    defaultValues: {
      name: props.product.name,
      price: props.product.price,
      brand: props.product.brand,
      countInStock: props.product.countInStock,
      category: props.product.category,
      description: props.product.description,
    },
  });

  const onSubmit = handleSubmit((data: ProductFormValues) => {
    console.log(data);
  });

  return (
    <Box maxWidth={"40rem"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <AppTextField
          label="Name"
          type={"text"}
          id={"name"}
          fullWidth
          {...register("name")}
          useError={errors.name?.message}
        />
        <AppTextField
          label="Price"
          type={"number"}
          id={"price"}
          inputProps={{ step: 0.01 }}
          fullWidth
          {...register("price")}
          useError={errors.price?.message}
        />
        <AppTextField
          label="Brand"
          type={"text"}
          id={"brand"}
          fullWidth
          {...register("brand")}
          useError={errors.brand?.message}
        />
        <AppTextField
          label="Count In Stock"
          type={"text"}
          id={"count-in-stock"}
          fullWidth
          {...register("countInStock")}
          useError={errors.countInStock?.message}
        />
        <AppTextField
          label="Category"
          type={"text"}
          id={"category"}
          fullWidth
          {...register("category")}
          useError={errors.category?.message}
        />
        <AppTextField
          label="Description"
          id={"description"}
          type="text"
          multiline
          fullWidth
          {...register("description")}
          useError={errors.description?.message}
        />

        <Box display={"flex"} justifyContent={"flex-start"}>
          <Button variant="contained" color="primary" type="submit">
            Update
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditProductsForm;
