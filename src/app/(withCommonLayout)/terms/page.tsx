import Link from "next/link";

const TermsAndConditionPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms and Conditions
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to EasyDrive. By accessing or using our services, you agree
            to comply with and be bound by the following terms and conditions.
            These terms apply to all visitors, users, and others who access or
            use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">2. User Accounts</h2>
          <p className="text-gray-700">
            When you create an account with us, you must provide accurate,
            complete, and up-to-date information. Failure to do so constitutes a
            breach of these terms, which may result in the immediate termination
            of your account.
          </p>
          <p className="text-gray-700">
            You are responsible for safeguarding the password that you use to
            access the service and for any activities or actions under your
            password. You agree not to disclose your password to any third
            party.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">3. Booking and Payments</h2>
          <p className="text-gray-700">
            All bookings are subject to availability and confirmation of the
            booking price. We require payment in full at the time of booking. If
            your payment method is declined, we reserve the right to cancel your
            booking.
          </p>
          <p className="text-gray-700">
            Prices are subject to change without notice. However, once a booking
            is confirmed, the price will not change for that booking.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">
            4. Cancellations and Refunds
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
          <h2 className="text-2xl font-bold mb-4">5. Usage Restrictions</h2>
          <p className="text-gray-700">
            You agree not to misuse the service provided by EasyDrive. This
            includes, but is not limited to, using our service for illegal
            purposes, transmitting or distributing viruses, spam, or any other
            harmful technology, and disrupting or interfering with our service
            or servers.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            EasyDrive is not liable for any direct, indirect, incidental,
            special, consequential, or punitive damages arising from your use of
            the service or inability to use the service.
          </p>
          <p className="text-gray-700">
            Our total liability to you for any damages arising out of or related
            to this agreement will not exceed the amount paid by you for the
            service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right, at our sole discretion, to modify or replace
            these terms at any time. If a revision is material, we will try to
            provide at least 30 days&apos; notice before any new terms take
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
          <p className="text-gray-700">
            These Terms shall be governed and construed in accordance with the
            laws of the jurisdiction in which EasyDrive operates, without regard
            to its conflict of law provisions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms and Conditions, please
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

export default TermsAndConditionPage;
