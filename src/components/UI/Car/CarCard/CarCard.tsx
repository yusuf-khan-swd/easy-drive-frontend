import { CAR_STATUS } from "@/constants/global";
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
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            sx={{ fontWeight: 600 }}
            className="text-blue-700"
          >
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
            {color && <p className="text-gray-700 mb-1">CarColor: {color}</p>}
            {isElectric && (
              <p className="text-gray-700 mb-1">
                Electric: {isElectric ? "Yes" : "No"}
              </p>
            )}
            {pricePerHour && (
              <p className="font-bold mb-1">Price: {pricePerHour}tk/hour</p>
            )}
            {status && (
              <p className="mb-2">
                Status:{" "}
                <span
                  className={`${
                    status === CAR_STATUS.available
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status}
                </span>
              </p>
            )}
          </Box>
          {(detailsPage || bookingPage) && features && (
            <div className="flex space-x-2 items-center">
              <p>Features:</p>{" "}
              <div className="flex flex-wrap space-x-2">
                {features?.map((feature: string, index: number) => (
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
        </CardContent>
        <CardActions>
          {!bookingPage && !detailsPage && (
            <Link href={`/cars/${_id}`}>
              <Button size="small">Details</Button>
            </Link>
          )}
          {detailsPage && (
            <Link href={`/dashboard/user/booking/${_id}`}>
              <Button size="small">Book Now</Button>
            </Link>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default CarCard;
