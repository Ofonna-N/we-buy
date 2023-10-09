import {
  Button,
  ButtonProps,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";

type InfoSchema = {
  label: string;
  value: string | number;
};

type Props = {
  title: string;
  infoItems: InfoSchema[];
  divider?: boolean;
  infoNodes?: React.ReactNode[];
  useActionButtons?: {
    label: string;
    color?: ButtonProps["color"];
    onClick?: ButtonProps["onClick"];
    disabled?: ButtonProps["disabled"];
  }[];
};

const OrderSummaryCard = (props: Props) => {
  return (
    <Paper component={List} sx={{ alignSelf: "flex-start" }}>
      <ListItem divider sx={{ paddingY: 2 }}>
        <Typography variant="h4">{props.title}</Typography>
      </ListItem>
      {props.infoItems.map((info, i) => (
        <ListItem
          key={i}
          divider={props.divider && i !== props.infoItems.length - 1}
          sx={{ justifyContent: "space-between" }}
        >
          <Typography flexGrow={1}>{info.label}</Typography>
          <Typography>{info.value}</Typography>
        </ListItem>
      ))}
      {props.infoNodes?.map((info, i) => (
        <ListItem
          key={i}
          divider={props.divider && i !== props.infoItems.length - 1}
          sx={{ justifyContent: "space-between" }}
        >
          {info}
        </ListItem>
      ))}
      {props.useActionButtons &&
        props.useActionButtons.map((action, i) => (
          <ListItem key={i}>
            <Button
              variant="contained"
              fullWidth
              color={action.color || "primary"}
              disabled={action.disabled}
              onClick={action.onClick}
            >
              {action.label || "Place Order"}
            </Button>
          </ListItem>
        ))}
    </Paper>
  );
};

export default OrderSummaryCard;
