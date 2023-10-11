import { useContext } from "react";
import confrimationDialogContext from "../contexts/ConfirmationDialogContext";

const useBasicConfirmationDialog = () => {
  return useContext(confrimationDialogContext);
};

export default useBasicConfirmationDialog;
