import {
  Alert,
  Box,
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

type Props = {
  products: Product[] | undefined;
  productError: AxiosError<ErrorResponse> | null;
  productIsLoading: boolean;
  isAdmin?: boolean;
  onRowClick: (product: Product) => void;
};

const AppOrdersTable = (props: Props) => {
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
                onClick={() => props.onRowClick(product)}
              >
                <TableCell>{product._id}</TableCell>
                {props.isAdmin && <TableCell>{product.name}</TableCell>}
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell align="center">{product.brand}</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
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

export default AppOrdersTable;
