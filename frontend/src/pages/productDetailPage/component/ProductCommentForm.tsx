import { Box, Stack, Button } from "@mui/material";
import AppInputDropdown from "../../../component/input/AppInputDropdown";
import AppTextField from "../../../component/input/AppTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CommentReveiw from "../types/CommentReveiw";

type Props = {
  onSubmit: (data: CommentReveiw) => void;
};

const commentFormSchema = yup.object().shape({
  rating: yup.string().required("Rating is required"),
  comment: yup.string().required("Comment is required"),
});

const ProductCommentForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(commentFormSchema),
    defaultValues: {
      rating: "",
      comment: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    props.onSubmit(data);
    // console.log(data);
  });

  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <Stack spacing={2}>
          <AppInputDropdown
            control={control}
            label={"Rating"}
            id={"rating"}
            name="rating"
            useError={errors.rating?.message}
            options={[
              { value: "", label: "Select..." },
              { value: "1", label: "1 - Poor" },
              { value: "2", label: "2 - Fair" },
              { value: "3", label: "3 - Good" },
              { value: "4", label: "4 - Very Good" },
              { value: "5", label: "5 - Excellent" },
            ]}
          />
          <AppTextField
            type={"text"}
            id={"comment"}
            multiline
            minRows={3}
            useError={errors.comment?.message}
            {...register("comment")}
          />

          <Button variant="contained" color="info" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ProductCommentForm;
