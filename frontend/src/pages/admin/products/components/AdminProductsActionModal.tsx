import AppModalBasic from "../../../../component/interactive/modals/AppModalBasic";
import ProductModalDataType from "../../types/ProductModalDataType";

type Props = {
  modalData: ProductModalDataType;
};

const AdminProductsActionModal = (props: Props) => {
  return (
    <AppModalBasic
      open={!!props.modalData?.isOpen}
      onClose={props.modalData?.onClose}
      onYesClick={props.modalData.onYesClick}
      onNoClick={props.modalData.onNoClick}
      title={props.modalData.title || ""}
      message={props.modalData.message || ""}
    />
  );
};

export default AdminProductsActionModal;
