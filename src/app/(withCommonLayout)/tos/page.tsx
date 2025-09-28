import { METADATA_FOR_MAIN_LAYOUT } from "@/constants/metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Terms of Service - ${METADATA_FOR_MAIN_LAYOUT.title}`,
  description: METADATA_FOR_MAIN_LAYOUT.description,
};

const TermOfServicePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms of Service
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to EasyDrive. By accessing or using our services, you agree
            to comply with and be bound by the following terms and conditions of
            service. Please read these terms carefully before using our
            services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
          <p className="text-gray-700">
            To use EasyDrive&apos;s services, you must be at least 21 years old
            and hold a valid driver’s license. By using our services, you
            confirm that you meet these requirements.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">3. Use of Services</h2>
          <p className="text-gray-700">
            You agree to use our services only for lawful purposes and in
            accordance with these Terms of Service. You are responsible for all
            activities that occur under your account and for ensuring that your
            account information remains secure.
          </p>
          <p className="text-gray-700">
            You agree not to use our services in a way that could damage,
            disable, overburden, or impair the service or interfere with any
            other party’s use of the service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">4. Booking and Payment</h2>
          <p className="text-gray-700">
            All bookings made through EasyDrive are subject to availability.
            Payments must be made in full at the time of booking. We accept
            major credit cards and other payment methods as indicated on our
            website.
          </p>
          <p className="text-gray-700">
            You agree to provide accurate payment information and authorize us
            to charge your payment method for the services booked.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">
            5. Cancellations and Refunds
          </h2>
          <p className="text-gray-700">
            You may cancel your booking up to 24 hours before the scheduled
            pick-up time for a full refund. Cancellations made less than 24
            hours before the scheduled pick-up time will incur a cancellation
            fee as specified in our Cancellation Policy.
          </p>
          <p className="text-gray-700">
            Refunds will be processed to the original payment method within 7-10
            business days.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">6. Liability</h2>
          <p className="text-gray-700">
            EasyDrive is not liable for any damages, including but not limited
            to direct, indirect, incidental, punitive, and consequential
            damages, arising from the use or inability to use our services.
          </p>
          <p className="text-gray-700">
            EasyDrive’s liability shall be limited to the amount paid by the
            customer for the services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">7. Modifications to Terms</h2>
          <p className="text-gray-700">
            EasyDrive reserves the right to modify these Terms of Service at any
            time. We will notify you of any changes by posting the new terms on
            our website. Your continued use of the services after any changes
            constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
          <p className="text-gray-700">
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the jurisdiction in which EasyDrive
            operates, without regard to its conflict of law principles.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms of Service, please
            contact us at support@easydrive.com.
          </p>
        </section>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-500 underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermOfServicePage;
