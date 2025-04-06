import ContactPage from "@/components/Common/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - EasyDrive",
  description: "A Car Rental Service Provider",
};

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
