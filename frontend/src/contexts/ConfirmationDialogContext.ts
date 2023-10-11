import { createContext } from "react";

export type BasicConfirmationDialogState = {
  open: boolean;
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export type ConfirmationDialogContext = {
  basicConfirmationDialogState: BasicConfirmationDialogState;
  setBasicConfirmationDialogState: (
    confirmationDialog: BasicConfirmationDialogState
  ) => void;
  clearBasicConfirmationDialogState: () => void;
};

const confrimationDialogContext = createContext<ConfirmationDialogContext>(
  {} as ConfirmationDialogContext
);

export default confrimationDialogContext;
