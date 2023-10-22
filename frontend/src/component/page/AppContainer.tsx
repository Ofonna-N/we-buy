import Container from "@mui/material/Container";
import React from "react";

type Props = {
  children: React.ReactNode;
  fullHeight?: boolean;
};

const AppContainer = (props: Props) => {
  return (
    <Container
      fixed
      sx={{
        marginTop: "2rem",
        // backgroundColor: "wheat",
        height: props.fullHeight ? "calc(100vh - 130px)" : "auto",
      }}
    >
      {props.children}
    </Container>
  );
};

export default AppContainer;
