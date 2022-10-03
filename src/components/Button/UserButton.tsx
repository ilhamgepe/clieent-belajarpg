import { Avatar, Group, Text, UnstyledButton } from "@mantine/core";
import React from "react";

const UserButton = () => {
  return (
    <UnstyledButton>
      <Group>
        <Avatar size={40} color="blue">
          BH
        </Avatar>
        <div>
          <Text>Bob Handsome</Text>
          <Text size="xs" color="dimmed">
            bob@handsome.inc
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
};

export default UserButton;
