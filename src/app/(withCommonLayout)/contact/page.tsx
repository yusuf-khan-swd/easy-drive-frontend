import ContactPage from "@/components/Common/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - EasyDrive",
  description: "A Car Rental Service Provider",
};

const ContactUs = () => {
  return <ContactPage />;
};

export default ContactUs;
