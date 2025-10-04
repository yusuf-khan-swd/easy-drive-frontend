import ContactUsPage from "@/components/Common/ContactUsPage";
import { METADATA_FOR_MAIN_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact Us - ${METADATA_FOR_MAIN_LAYOUT.title}`,
  description: METADATA_FOR_MAIN_LAYOUT.description,
};

const ContactUs = () => {
  return <ContactUsPage />;
};

export default ContactUs;
