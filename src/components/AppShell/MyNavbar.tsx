import {
  Center,
  Navbar,
  ScrollArea,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { HiLink } from "react-icons/hi";
import {
  MdAutoGraph,
  MdOutlineFeaturedPlayList,
  MdOutlineSpaceDashboard,
  MdImportContacts,
} from "react-icons/md";
import UserButton from "../Button/UserButton";
import NavbarLinks from "./NavbarLinks";

export interface NavbarSubMenus {
  name: string;
  link: string;
}

export interface NavbarMenus {
  groupName?: string;
  name: string;
  icon?: any;
  color?: string;
  link: string;
  subMenus?: NavbarSubMenus[];
}

const menus: NavbarMenus[] = [
  {
    name: "Dashboard",
    icon: MdOutlineSpaceDashboard,
    color: "teal",
    link: "/",
  },
  {
    name: "Settlements",
    icon: MdImportContacts,
    color: "violet",
    link: "/settlements",
  },
  {
    name: "Activity Logs",
    icon: MdAutoGraph,
    color: "cyan",
    link: "/activity-logs",
  },
  {
    name: "Activity Logs2",
    icon: MdAutoGraph,
    color: "cyan",
    link: "/activity-logs",
  },
  {
    name: "Activity Logs3",
    icon: MdAutoGraph,
    color: "cyan",
    link: "/activity-logs",
  },
  {
    name: "Activity Logs4",
    icon: MdAutoGraph,
    color: "cyan",
    link: "/activity-logs",
  },
  {
    groupName: "Request Payment",
    name: "Collapse",
    icon: MdOutlineFeaturedPlayList,
    link: "#collapse",
    color: "yellow",
    subMenus: [
      { name: "Feature 1", link: "#Feature 1" },
      { name: "Feature 2", link: "#Feature 2" },
      { name: "Feature 3", link: "#Feature 3" },
      { name: "Feature 4", link: "#Feature 4" },
    ],
  },
  {
    groupName: "payments",
    name: "paymentlinks",
    icon: HiLink,
    color: "cyan",
    link: "/activity-logs",
  },
  {
    groupName: "settings",
    name: "Account",
    icon: MdOutlineFeaturedPlayList,
    link: "#account",
    color: "blue",
    subMenus: [
      { name: "Team", link: "#Team" },
      { name: "Settings", link: "#settings" },
      { name: "Api", link: "#Api" },
      { name: "Logout", link: "#Logout" },
    ],
  },
  {
    groupName: "collapse2",
    name: "Account2",
    icon: MdOutlineFeaturedPlayList,
    link: "#account2",
    color: "blue",
    subMenus: [
      { name: "Team2", link: "#Team" },
      { name: "Settings2", link: "#settings" },
      { name: "Api2", link: "#Api" },
      { name: "Logout2", link: "#Logout" },
    ],
  },
  {
    groupName: "settings2",
    name: "Account2",
    icon: MdOutlineFeaturedPlayList,
    link: "#account2",
    color: "blue",
    subMenus: [
      { name: "Team2", link: "#Team" },
      { name: "Settings", link: "#settings" },
      { name: "Api2", link: "#Api" },
      { name: "Logout2", link: "#Logout" },
    ],
  },
];

const MyNavbar = ({ opened }: any) => {
  const theme = useMantineTheme();
  return (
    <Navbar
      py="xs"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 250 }}
      style={{
        background:
          theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
      }}
    >
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="md">
        <NavbarLinks menus={menus} />
      </Navbar.Section>

      <Navbar.Section
        sx={(theme) => ({
          borderTop: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[3]
          }`,
        })}
      >
        <Center mt={"md"}>
          <UserButton />
        </Center>
      </Navbar.Section>
    </Navbar>
  );
};

export default MyNavbar;
