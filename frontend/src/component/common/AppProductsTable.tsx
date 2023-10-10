import {
  Alert,
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import AppSpinner from "../loading/AppSpinner";
import { AxiosError } from "axios";
import ErrorResponse from "../../types/ErrorResponse";
import Product from "../../types/Product";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  products: Product[] | undefined;
  productError: AxiosError<ErrorResponse> | null;
  productIsLoading: boolean;
  isAdmin?: boolean;
  onRowClick?: (product: Product) => void;
  onEditClick?: (product: Product) => void;
  onDeleteClick?: (product: Product) => void;
};

const AppProductsTable = (props: Props) => {
  return (
    <Box sx={{ overflowX: "auto" }}>
      {props.productIsLoading ? (
        <AppSpinner />
      ) : props.products && props.products.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              {<TableCell>NAME</TableCell>}
              <TableCell>PRICE</TableCell>
              <TableCell>CATEGORY</TableCell>
              <TableCell align="center">BRAND</TableCell>
              {/* <TableCell align="center">DELIVERED</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.products.map((product, i) => (
              <TableRow
                key={i}
                sx={{
                  textDecoration: "none",
                  "&:hover td": {
                    color: "primary.main",
                  },
                  cursor: "pointer",
                }}
                onClick={() => props.onRowClick && props.onRowClick(product)}
              >
                <TableCell>{product._id}</TableCell>
                {props.isAdmin && <TableCell>{product.name}</TableCell>}
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell align="center">{product.brand}</TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={(event) => {
                      event.stopPropagation();
                      props.onEditClick && props.onEditClick(product);
                    }}
                  >
                    <EditNoteIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={(event) => {
                      event.stopPropagation();
                      props.onDeleteClick && props.onDeleteClick(product);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : props.productError?.message ? (
        <Alert variant="outlined" severity="error">
          {props.productError?.message}
        </Alert>
      ) : (
        <Alert variant="outlined" severity="info">
          No Products Available
        </Alert>
      )}
    </Box>
  );
};

export default AppProductsTable;
