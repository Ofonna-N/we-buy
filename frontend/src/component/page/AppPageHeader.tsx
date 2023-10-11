import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import AppBackButton from "../interactive/clickables/AppBackButton";

type Props = {
  title: string;
  titlePostfix?: string;
  rightSlot?: React.ReactNode;
};

const AppPageHeader = (props: Props) => {
  return (
    <Stack
      sx={{
        flexDirection: {
          direction: "column",
          xs: "row",
        },
        justifyContent: {
          justifyContent: "center",
          xs: "space-between",
        },
        alignItems: {
          alignItems: "center",
        },
      }}
      mb={5}
    >
      <Typography variant="h4">
        {props.title}{" "}
        <Box component={"span"} fontSize={"1.35rem"}>
          {props.titlePostfix}
        </Box>
      </Typography>
      <Box display={"flex"} gap={2}>
        <AppBackButton />
        {props.rightSlot}
      </Box>
    </Stack>
  );
};

export default AppPageHeader;
