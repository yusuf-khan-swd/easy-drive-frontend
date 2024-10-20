import facebookIcon from "@/assets/images/facebook.png";
import instagramIcon from "@/assets/images/instagram.png";
import linkedIcon from "@/assets/images/linkedin.png";
import twitterIcon from "@/assets/images/twitter.png";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff" component={Link} href="/cars">
            Cars
          </Typography>
          <Typography color="#fff">Explore</Typography>
          <Typography color="#fff">About Us</Typography>
          <Typography color="#fff">Help</Typography>
          <Typography color="#fff">Account</Typography>
        </Stack>

        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={instagramIcon} width={30} height={30} alt="facebook" />
          <Image src={twitterIcon} width={30} height={30} alt="facebook" />
          <Image src={linkedIcon} width={30} height={30} alt="facebook" />
        </Stack>
        {/* <div className="border-b-[1px] border-dashed"></div> */}
        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>

        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy;{year} EasyDrive . All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            <Box component="span" color="primary.main">
              E
            </Box>
            asy
            <Box component="span" color="primary.main">
              D
            </Box>
            rive
          </Typography>
          <Typography component="p" color="white">
            <Typography component={Link} href="/privacy" color="white">
              Privacy Policy
            </Typography>{" "}
            |{" "}
            <Typography component={Link} href="/terms" color="white">
              Terms & Conditions
            </Typography>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
