import {
  Button,
  ButtonProps,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";

type Props = {
  title: string;
  infoItems: React.ReactNode[];
  divider?: boolean;
  useActionButton?: {
    label: string;
    onClick?: ButtonProps["onClick"];
    disabled?: ButtonProps["disabled"];
  };
};

const OrderSummaryCard = (props: Props) => {
  return (
    <Paper component={List} sx={{ alignSelf: "flex-start" }}>
      <ListItem divider sx={{ paddingY: 2 }}>
        <Typography variant="h4">Order Summary</Typography>
      </ListItem>
      {props.infoItems.map((info, i) => (
        <ListItem
          key={i}
          divider={props.divider && i !== props.infoItems.length - 1}
          sx={{ justifyContent: "space-between" }}
        >
          {info}
        </ListItem>
      ))}
      {props.useActionButton && (
        <ListItem>
          <Button
            variant="contained"
            fullWidth
            disabled={props.useActionButton?.disabled}
            onClick={props.useActionButton?.onClick}
          >
            {props.useActionButton?.label || "Place Order"}
          </Button>
        </ListItem>
      )}
    </Paper>
  );
};

export default OrderSummaryCard;
