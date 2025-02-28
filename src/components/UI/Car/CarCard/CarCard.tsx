import { TCar } from "@/types/car";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";

const CarCard = ({
  car,
  detailsPage = false,
  bookingPage = false,
}: {
  car: TCar;
  detailsPage?: boolean;
  bookingPage?: boolean;
}) => {
  const {
    _id,
    name,
    description,
    color,
    status,
    isElectric,
    features,
    pricePerHour,
  } = car;

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {!detailsPage && !bookingPage ? (
              <Link href={`/cars/${_id}`}>{name}</Link>
            ) : (
              name
            )}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", my: 2 }}>
            {description}
          </Typography>
          <Box sx={{}}>
            <p className="text-gray-700 mb-1">CarColor: {color}</p>
            <p className="text-gray-700 mb-1">
              Electric: {isElectric ? "Yes" : "No"}
            </p>
            <p className="font-bold mb-1">Price: {pricePerHour}tk/hour</p>
            <p className="mb-2">
              Status:{" "}
              <span
                className={`${
                  status === "available" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </span>
            </p>
          </Box>
          <Box sx={{ mb: 2 }}>
            {(detailsPage || bookingPage) && features && (
              <div className="flex space-x-2 items-center">
                <p>Features:</p>{" "}
                <div className="flex flex-wrap space-x-2">
                  {features.map((feature: string, index: number) => (
                    <p
                      key={index}
                      className="bg-slate-300 px-2 py-1 rounded-lg text-sm m-1"
                    >
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
          {!bookingPage && (
            <>
              {detailsPage ? (
                <Link href={`/dashboard/user/booking/${_id}`}>
                  <button className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700">
                    Book Now
                  </button>
                </Link>
              ) : (
                <Link href={`/cars/${_id}`}>
                  <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300">
                    View Details
                  </button>
                </Link>
              )}
            </>
          )}
        </CardActions>
      </Card>
      <div className="bg-white rounded-lg shadow-md overflow-hidden border">
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">
            {!detailsPage && !bookingPage ? (
              <Link href={`/cars/${_id}`}>{name}</Link>
            ) : (
              name
            )}
          </h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="text-gray-700 mb-1">CarColor: {color}</p>
          <p className="text-gray-700 mb-1">
            Electric: {isElectric ? "Yes" : "No"}
          </p>
          <p className="font-bold mb-1">Price: {pricePerHour}tk/hour</p>
          <p className="mb-2">
            Status:{" "}
            <span
              className={`${
                status === "available" ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </span>
          </p>
          <div className="mb-4">
            {(detailsPage || bookingPage) && features && (
              <div className="flex space-x-2 items-center">
                <p>Features:</p>{" "}
                <div className="flex flex-wrap space-x-2">
                  {features.map((feature: string, index: number) => (
                    <p
                      key={index}
                      className="bg-slate-300 px-2 py-1 rounded-lg text-sm m-1"
                    >
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
          {!bookingPage && (
            <>
              {detailsPage ? (
                <Link href={`/dashboard/user/booking/${_id}`}>
                  <button className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700">
                    Book Now
                  </button>
                </Link>
              ) : (
                <Link href={`/cars/${_id}`}>
                  <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300">
                    View Details
                  </button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CarCard;
