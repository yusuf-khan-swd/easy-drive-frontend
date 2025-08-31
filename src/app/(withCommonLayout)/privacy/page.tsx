import { METADATA_FOR_MAIN_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy and Terms of Service - EasyDrive",
  description: METADATA_FOR_MAIN_LAYOUT.description,
};

const PrivacyAndPolicyPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Privacy Policy and Terms of Service
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to EasyDrive, your trusted car rental service. This Privacy
            Policy outlines how we handle your personal information when you use
            our services. Your privacy is of utmost importance to us, and we are
            committed to safeguarding the personal information you share with
            us.
          </p>
          <p className="text-gray-700">
            By using EasyDrive, you agree to the terms outlined in this Privacy
            Policy and our Terms of Service. Please read them carefully.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information to provide better services to our users. This
            includes:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>
              Personal identification information (Name, Email Address, Phone
              Number, etc.).
            </li>
            <li>Booking information (dates, locations, preferences).</li>
            <li>Payment information for processing transactions.</li>
            <li>Usage data (how you use our website and services).</li>
          </ul>
          <p className="text-gray-700">
            All collected information is used solely for providing and improving
            our services, ensuring legal compliance, and communicating with you.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-4">
            EasyDrive uses the information we collect to:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Facilitate your car rental bookings.</li>
            <li>Process payments and prevent fraud.</li>
            <li>Provide customer support and respond to inquiries.</li>
            <li>Improve our services and website functionality.</li>
            <li>
              Send you updates, marketing materials, and other information that
              may be of interest to you.
            </li>
          </ul>
          <p className="text-gray-700">
            We will not sell or rent your personal information to third parties
            without your explicit consent, except as necessary to provide our
            services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
          <p className="text-gray-700">
            EasyDrive takes your privacy seriously and has implemented
            appropriate technical and organizational measures to protect your
            personal information from unauthorized access, disclosure,
            alteration, or destruction. We use secure servers and encryption for
            data storage and transfer.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
          <p className="text-gray-700 mb-4">You have the right to:</p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of any incorrect or incomplete data.</li>
            <li>Request deletion of your personal data.</li>
            <li>Object to our processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
          </ul>
          <p className="text-gray-700">
            To exercise these rights, please contact us at
            privacy@easydrive.com.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">6. Changes to This Policy</h2>
          <p className="text-gray-700">
            EasyDrive reserves the right to modify this Privacy Policy at any
            time. We will notify you of any significant changes via email or a
            prominent notice on our website. Your continued use of our services
            after any changes indicates your acceptance of the new terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at privacy@easydrive.com.
          </p>
        </section>

        <div className="mt-8 text-center">
          <a href="/" className="text-blue-500 underline">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAndPolicyPage;
