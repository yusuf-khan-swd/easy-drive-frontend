"use client";

import logo from "@/assets/logo.png";
import { getUserInfo, removeUser } from "@/services/auth.service";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";

const Navbar = () => {
  const websiteName = "EasyDrive";
  const { role } = getUserInfo() as any;

  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    removeUser();
    router.push("/");
    router.refresh();
  };

  const pages = ["home", "cars", "about", "contact"];
  const settings = ["profile", "dashboard", "logout"];

  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Link href="/">
                <Image src={logo} width={50} height={50} alt="logo" />
              </Link>
            </Box>{" "}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {websiteName}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      component={Link}
                      href={page}
                      sx={{ textAlign: "center" }}
                    >
                      <span className="uppercase">{page}</span>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <Link href="/">
                <Image src={logo} width={50} height={50} alt="logo" />
              </Link>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {websiteName}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link key={page} href={`/${page}`}>
                  <Button
                    onClick={handleCloseNavMenu}
                    variant="text"
                    sx={{ m: 1, px: 1, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {role ? (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Account Menu" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        {setting === "logout" ? (
                          <Button
                            key="logout"
                            color="error"
                            onClick={handleLogOut}
                            sx={{ boxShadow: 0 }}
                          >
                            Logout
                          </Button>
                        ) : setting === "profile" ? (
                          <Typography
                            component={Link}
                            href={`/dashboard/${role}`}
                            sx={{ textAlign: "center" }}
                          >
                            <span className="uppercase">{setting}</span>
                          </Typography>
                        ) : (
                          <Typography
                            component={Link}
                            href={`/${setting}`}
                            sx={{ textAlign: "center" }}
                          >
                            <span className="uppercase">{setting}</span>
                          </Typography>
                        )}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <div className="flex">
                  <Button
                    component={Link}
                    href="/login"
                    size="small"
                    sx={{ m: 1, px: 2, border: 1 }}
                  >
                    Login
                  </Button>
                  <Button
                    component={Link}
                    href="/register"
                    size="small"
                    sx={{
                      m: 1,
                      px: 2,
                      border: 1,
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    Signup
                  </Button>
                </div>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
