import {
  Avatar,
  Box,
  Collapse,
  createStyles,
  Text,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import { NavbarMenus, NavbarSubMenus } from "./MyNavbar";
import { FiChevronLeft, FiChevronDown } from "react-icons/fi";

const useStyles = createStyles((theme, _params, getRef) => ({
  navlink: {
    // background: theme.colors.indigo[5],
    margin: "8px 0 8px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[3]
        : theme.colors.gray[7],
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      background: "rgba(145, 167, 255, .1)",
    },
  },
  flexCenterGap10: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  submenu: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 20,
    gap: 10,
    fontWeight: 500,
    cursor: "pointer",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[3]
        : theme.colors.gray[7],
    "&:hover": {
      background: "rgba(145, 167, 255, .1)",
    },
  },
  submenuCollapse: {
    borderLeft: `1px solid ${theme.colors.gray[5]}`,
    marginLeft: 18,
  },
  iconsNavlink: {
    fontSize: 26,
  },
}));

const NavbarLinks = ({ menus }: any) => {
  const [indexOpen, setIndexOpen] = useState<null | number>(null);
  const { classes } = useStyles();
  return (
    <Box>
      {menus.map((menu: NavbarMenus, index: number) => (
        <Box key={index}>
          {menu.groupName && (
            <Text color="dimmed" size={"lg"} mt="lg">
              {menu.groupName}
            </Text>
          )}
          {!menu.subMenus ? (
            <Link href={menu.link}>
              <a>
                <div className={classes.navlink}>
                  <div className={classes.flexCenterGap10}>
                    <Avatar color={menu.color} radius="sm">
                      <menu.icon className={classes.iconsNavlink} />
                    </Avatar>
                    <Text>{menu.name}</Text>
                  </div>
                </div>
              </a>
            </Link>
          ) : (
            <Box>
              <div
                className={classes.navlink}
                onClick={
                  indexOpen === index
                    ? () => setIndexOpen(null)
                    : () => setIndexOpen(index)
                }
              >
                <div className={classes.flexCenterGap10}>
                  <Avatar color={menu.color} radius="sm">
                    <menu.icon className={classes.iconsNavlink} />
                  </Avatar>
                  <Text>{menu.name}</Text>
                </div>
                {indexOpen === index ? <FiChevronLeft /> : <FiChevronDown />}
              </div>
              {menu.subMenus.map((submenu: NavbarSubMenus) => (
                <Collapse
                  key={submenu.name}
                  in={indexOpen === index}
                  className={classes.submenuCollapse}
                  id={submenu.name}
                >
                  <Link href={submenu.link}>
                    <a>
                      <div className={classes.submenu}>
                        <Text>{submenu.name}</Text>
                      </div>
                    </a>
                  </Link>
                </Collapse>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default NavbarLinks;
