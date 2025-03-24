interface Testimonial {
  name: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    review:
      "EasyDrive made my trip hassle-free and enjoyable. The car was in excellent condition, and the booking process was smooth and straightforward.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review:
      "I was impressed with the wide selection of vehicles and the friendly customer service. Highly recommended!",
    rating: 4,
  },
  {
    name: "Michael Johnson",
    review:
      "Great experience overall. The pricing was competitive, and the support team was available whenever I needed them.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-8">
          Customer Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6">
              <p className="text-gray-800 italic mb-4">
                &quot;{testimonial.review}&quot;
              </p>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-blue-700">
                  {testimonial.name}
                </h4>
                <div className="flex">
                  {/* Display stars based on the rating */}
                  {Array.from({ length: testimonial.rating }).map(
                    (_, startIndex) => (
                      <svg
                        key={startIndex}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.691h4.2c.969 0 1.371 1.24.588 1.81l-3.4 2.44a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.538 1.118l-3.4-2.44a1 1 0 00-1.175 0l-3.4 2.44c-.783.57-1.838-.197-1.538-1.118l1.287-3.967a1 1 0 00-.364-1.118l-3.4-2.44c-.783-.57-.38-1.81.588-1.81h4.2a1 1 0 00.95-.691l1.286-3.967z" />
                      </svg>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
