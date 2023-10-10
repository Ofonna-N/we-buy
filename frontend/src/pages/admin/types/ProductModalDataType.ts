type ProductModalDataType = {
  isOpen?: boolean;
  onClose?: () => void;
  onYesClick?: () => void;
  onNoClick?: () => void;
  title?: string;
  message?: string;
};

export default ProductModalDataType;
