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
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserResponse } from "../../types/User";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

type Props = {
  users: UserResponse["user"][] | undefined;
  userError: AxiosError<ErrorResponse> | null;
  userIsLoading: boolean;
  onRowClick?: (product: UserResponse["user"]) => void;
  onEditClick?: (product: UserResponse["user"]) => void;
  onDeleteClick?: (product: UserResponse["user"]) => void;
};

const AppUsersTable = (props: Props) => {
  return (
    <Box sx={{ overflowX: "auto" }}>
      {props.userIsLoading ? (
        <AppSpinner />
      ) : props.users && props.users.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>ADMIN</TableCell>
              <TableCell align="center">EDIT</TableCell>
              <TableCell align="center">DELETE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.map((user, i) => (
              <TableRow
                key={i}
                sx={{
                  textDecoration: "none",
                  "&:hover td": {
                    color: !user.isAdmin ? "primary.main" : "",
                  },
                  cursor: "pointer",
                }}
                onClick={() => props.onRowClick && props.onRowClick(user)}
              >
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {user.isAdmin ? (
                    <DoneIcon color="success" />
                  ) : (
                    <CloseIcon color="error" />
                  )}
                </TableCell>

                <TableCell align="center">
                  <IconButton
                    disabled={user.isAdmin}
                    onClick={(event) => {
                      event.stopPropagation();
                      !user.isAdmin &&
                        props.onEditClick &&
                        props.onEditClick(user);
                    }}
                  >
                    <EditNoteIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    disabled={user.isAdmin}
                    onClick={(event) => {
                      event.stopPropagation();
                      !user.isAdmin &&
                        props.onDeleteClick &&
                        props.onDeleteClick(user);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : props.userError?.message ? (
        <Alert variant="outlined" severity="error">
          {props.userError?.message}
        </Alert>
      ) : (
        <Alert variant="outlined" severity="info">
          No Products Available
        </Alert>
      )}
    </Box>
  );
};

export default AppUsersTable;
