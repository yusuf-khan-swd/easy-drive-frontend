import team1 from "@/assets/team1.png";
import team2 from "@/assets/team2.png";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - EasyDrive",
  description: "A Car Rental Service Provider",
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="bg-white w-full shadow-md p-6 mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-700">
          About Us - EasyDrive
        </h1>
      </header>

      {/* Company History */}
      <section className="bg-white w-full max-w-3xl rounded shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">Company History</h2>
        <p className="text-gray-700 mb-4">
          Founded in 2010, EasyDrive has been committed to providing exceptional
          car rental services to customers worldwide. Our mission is to offer a
          seamless and reliable car rental experience, with a focus on customer
          satisfaction and convenience. Our vision is to be the world’s leading
          car rental company, known for our quality service and customer-first
          approach.
        </p>
      </section>

      {/* Our Team */}
      <section className="bg-white w-full max-w-3xl rounded shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <Image
              src={team1}
              alt="John Doe"
              width={128}
              height={128}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <Image
              src={team2}
              alt="Jane Smith"
              width={128}
              height={128}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-gray-600">Chief Operations Officer</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      {/* Our Fleet */}
      <section className="bg-white w-full max-w-3xl rounded shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Fleet</h2>
        <p className="text-gray-700 mb-4">
          EasyDrive offers a diverse range of vehicles to suit every need, from
          economy cars for the budget-conscious to luxury vehicles for special
          occasions. Our fleet includes SUVs, sedans, electric cars, and more,
          ensuring that we have the perfect car for your journey.
        </p>
      </section>

      {/* Values & Commitment */}
      <section className="bg-white w-full max-w-3xl rounded shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">Values & Commitment</h2>
        <p className="text-gray-700 mb-4">
          At EasyDrive, we are committed to delivering the highest level of
          customer service. We prioritize safety, reliability, and
          sustainability in all our operations. Our goal is to provide a
          hassle-free rental experience, with a focus on reducing our
          environmental impact through the use of eco-friendly vehicles and
          sustainable practices.
        </p>
      </section>

      {/* Contact Information */}
      <section className="bg-white w-full max-w-3xl rounded shadow-md p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        <p className="text-gray-700 mb-2">
          <strong>Phone:</strong> +1 234 567 890
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> support@easydrive.com
        </p>
        <p className="text-gray-700">
          <strong>Address:</strong> 123 EasyDrive Lane, Suite 100, Car City, CA
          12345
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
