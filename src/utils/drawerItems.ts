import { USER_ROLE } from "@/constants/role";
import { DrawerItem, TUserRole } from "@/types/common";
//icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CarRentalIcon from "@mui/icons-material/CarRental";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import KeyIcon from "@mui/icons-material/Key";
import PersonIcon from "@mui/icons-material/Person";
import ReviewsIcon from "@mui/icons-material/Reviews";
import TryIcon from "@mui/icons-material/Try";

export const drawerItems = (role: TUserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenus = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: PersonIcon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Cars",
          path: `${role}/manage-cars`,
          icon: CarRentalIcon,
        },

        {
          title: "Bookings",
          path: `${role}/manage-bookings`,
          icon: BookOnlineIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: ReviewsIcon,
        },
        {
          title: "Return Car",
          path: `${role}/manage-return-cars`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Car Type",
          path: `${role}/manage-car-type`,
          icon: TryIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Booking",
          path: `${role}/manage-bookings`,
          icon: BookOnlineIcon,
        },
        {
          title: "Payment History",
          path: `${role}/manage-payments`,
          icon: AttachMoneyIcon,
        }
      );
      break;

    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupIcon,
        }
      );
      break;

    case USER_ROLE.DOCTOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointment`,
          icon: BookOnlineIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
