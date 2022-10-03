import {
  Box,
  Burger,
  Header,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import ToggleColorScheme from "../Button/ToggleColorScheme";

const MyHeader = ({ opened, setOpened }: any) => {
  const theme = useMantineTheme();
  return (
    <Header height={60} p="md">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o: any) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>

          <Text size={26} weight="normal">
            Raimu
          </Text>
        </Box>
        <ToggleColorScheme />
      </div>
    </Header>
  );
};

export default MyHeader;
