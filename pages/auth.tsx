import { Center, createStyles, Paper, Tabs } from "@mantine/core";
import React from "react";
import Signin from "../src/components/auth/signin";
import Signup from "../src/components/auth/Signup";
import ToggleColorScheme from "../src/components/Button/ToggleColorScheme";

const useStyle = createStyles((theme) => ({
  tabsPannel: {
    height: 250,
    width: 400,
  },
}));

const Auth = () => {
  const { classes } = useStyle();
  return (
    <Center style={{ minHeight: "100vh" }}>
      <Paper shadow={"md"} p="md">
        <ToggleColorScheme />
        <Tabs defaultValue="signup" color={"blue"}>
          <Tabs.List position="center">
            <Tabs.Tab value="signin">Sign In</Tabs.Tab>
            <Tabs.Tab value="signup">Sign Up</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel
            value="signin"
            className={classes.tabsPannel}
            sx={{
              padding: 10,
              marginTop: 20,
            }}
          >
            <Signin />
          </Tabs.Panel>
          <Tabs.Panel
            value="signup"
            className={classes.tabsPannel}
            sx={{
              padding: 10,
              marginTop: 20,
            }}
          >
            <Signup />
          </Tabs.Panel>
        </Tabs>
      </Paper>
    </Center>
  );
};

export default Auth;
