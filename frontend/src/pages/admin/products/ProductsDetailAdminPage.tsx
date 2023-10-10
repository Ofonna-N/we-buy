import { Box, Typography } from "@mui/material";
import AppContainer from "../../../component/page/AppContainer";
import { useParams } from "react-router-dom";

const ProductsDetailAdminPage = () => {
  const params = useParams();

  return (
    <AppContainer>
      <Typography variant="h4" mb={"2rem"}>
        {" "}
        Edit Product{" "}
        <Box component={"span"} fontSize={"1.35rem"}>
          {params.id}
        </Box>
      </Typography>
    </AppContainer>
  );
};

export default ProductsDetailAdminPage;
