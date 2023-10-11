import React from "react";
import confrimationDialogContext, {
  BasicConfirmationDialogState,
} from "../contexts/ConfirmationDialogContext";

const ConfirmationDialogProvider = (props: { children: React.ReactNode }) => {
  const [confirmationDialogState, setConfirmationDialogState] =
    React.useState<BasicConfirmationDialogState>({
      open: false,
      title: "",
      content: "",
    } as BasicConfirmationDialogState);

  const onOpenConfirmationDialog = (
    confirmationDialog: BasicConfirmationDialogState
  ) => {
    setConfirmationDialogState(confirmationDialog);
  };

  const onCloseConfirmationDialog = () => {
    setConfirmationDialogState((prev) => ({ ...prev, open: false }));
  };

  return (
    <confrimationDialogContext.Provider
      value={{
        basicConfirmationDialogState: confirmationDialogState,
        setBasicConfirmationDialogState: onOpenConfirmationDialog,
        clearBasicConfirmationDialogState: onCloseConfirmationDialog,
      }}
    >
      {props.children}
    </confrimationDialogContext.Provider>
  );
};

export default ConfirmationDialogProvider;
