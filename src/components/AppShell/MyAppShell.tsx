import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  createStyles,
  Table,
} from "@mantine/core";
import ToggleColorScheme from "../Button/ToggleColorScheme";
import MyNavbar from "./MyNavbar";
import MyHeader from "./MyHeader";

interface AppShellProps {
  children: JSX.Element;
}

export default function MyAppShell({ children }: AppShellProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={<MyHeader opened={opened} setOpened={setOpened} />}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<MyNavbar opened={opened} />}
    >
      {children}
    </AppShell>
  );
}

// styling
const useStyles = createStyles((theme, _params, getRef) => ({}));
