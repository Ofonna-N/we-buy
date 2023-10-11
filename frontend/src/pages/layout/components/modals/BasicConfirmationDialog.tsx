import AppModalBasic from "../../../../component/interactive/modals/AppModalBasic";
import useBasicConfirmationDialog from "../../../../hooks/useBasicConfirmationDialog";

const BasicConfirmationDialog = () => {
  const confirmationDialog =
    useBasicConfirmationDialog().basicConfirmationDialogState;

  return (
    <AppModalBasic
      open={confirmationDialog.open}
      onClose={confirmationDialog.onCancel}
      onYesClick={confirmationDialog.onConfirm}
      onNoClick={confirmationDialog.onCancel}
      title={confirmationDialog.title || ""}
      message={confirmationDialog.content || ""}
    />
  );
};

export default BasicConfirmationDialog;
