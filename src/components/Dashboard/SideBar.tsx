import { drawerItems } from "@/utils/drawerItems";
import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
// import { getUserInfo } from "@/services/auth.services";
import assets from "@/assets";
import { USER_ROLE } from "@/constants/role";
import { TUserRole } from "@/types";
import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItems";

const SideBar = () => {
  const [userRole, setUserRole] = useState(USER_ROLE.ADMIN);

  useEffect(() => {
    // const { role } = getUserInfo() as any;
    // setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          py: 1,
          mt: 1,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
        >
          PH Health Care
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as TUserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
