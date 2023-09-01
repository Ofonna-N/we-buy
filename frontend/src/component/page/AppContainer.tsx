import Container from "@mui/material/Container";
import React from "react";

const AppContainer = (props: { children: React.ReactNode }) => {
  return (
    <Container
      fixed
      sx={{
        marginTop: "2rem",
      }}
    >
      {props.children}
    </Container>
  );
};

export default AppContainer;
