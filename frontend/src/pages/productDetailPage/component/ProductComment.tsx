import { Rating, Stack, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
type Props = {
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
};

const ProductComment = (props: Props) => {
  return (
    <Stack gap={1}>
      <Stack direction={"row"} gap={1}>
        <Typography>{props.name}</Typography>
        <Rating
          name="p-rating"
          value={props.rating}
          readOnly
          precision={0.5}
          emptyIcon={
            <StarBorderIcon sx={{ opacity: 0.55 }} fontSize="inherit" />
          }
          size="small"
        />
      </Stack>
      <Typography variant="caption">{props.createdAt} </Typography>
      <Typography>{props.comment}</Typography>
    </Stack>
  );
};

export default ProductComment;
