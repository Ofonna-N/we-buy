import {
  List,
  ListItem,
  Stack,
  Avatar,
  Box,
  Typography,
  FormControl,
  Input,
  IconButton,
} from "@mui/material";

import Cart, { CartItem } from "../../../types/Cart";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  cart: Cart;
  addToCart: (cartItem: CartItem, qty: string) => void;
  removeFromCart: (id: string) => void;
};

const CartItemsSection = (props: Props) => {
  return (
    <List>
      {props.cart.cartItems.map((cartItem) => (
        <ListItem key={cartItem.product._id} divider>
          <Stack direction={"row"} gap={"2rem"}>
            <Avatar
              src={cartItem.product.image}
              variant="square"
              alt={cartItem.product.name + " avatar"}
              sx={{
                height: "80px",
                width: "80px",
              }}
            />
            <Box flexBasis={"25rem"}>
              <Typography>
                {cartItem.product.name.split(" ").slice(0, -1).join(" ")}
                <Box component={"span"} display={"block"}>
                  {
                    cartItem.product.name.split(" ")[
                      cartItem.product.name.split(" ").length - 1
                    ]
                  }
                </Box>
              </Typography>
            </Box>
            <Typography>${cartItem.product.price}</Typography>

            <FormControl
              sx={{
                flexGrow: 1,
                flexDirection: "row",
                alignItems: "start",
                gap: "1rem",
              }}
            >
              <Input
                value={cartItem.qty}
                sx={{
                  minWidth: "3rem",
                }}
                onChange={(e) => props.addToCart(cartItem, e.target.value)}
                slotProps={{
                  input: {
                    min: 1,
                    max: cartItem.product?.countInStock,
                    type: "number",
                  },
                }}
              />
            </FormControl>

            <Box>
              <IconButton
                aria-label="delete"
                onClick={() => {
                  props.removeFromCart(cartItem.product._id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
};

export default CartItemsSection;
