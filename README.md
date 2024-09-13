# EasyDrive

## Introduction

Welcome to **Easy Drive**, a comprehensive car rental service application backend. This README provides all the necessary information to set up, run, and use the application effectively.

## Project Description

**Easy Drive** is designed to facilitate seamless car rental services. It provides a user-friendly interface for customers to book cars, and an admin interface to manage the car inventory and bookings.

## `Useful Links`

**3. [Live Website](https://easydrivego.vercel.app)** \
**2. [Live Server](https://easydrive-backend.vercel.app)** \
**1. [Github Client Side Repository](https://github.com/yusuf-khan-swd/easy-drive-frontend-nextjs)** \
**1. [Github Server Side Repository](https://github.com/yusuf-khan-swd/easy-drive-backend)**

## Features

- **User Authentication**: Secure sign-up and login functionality.
- **Dashboard**: Dashboard for both user and admin.
- **View Car Details**: Click on any car listing to view more details including features, pricing, and availability.
- **Book a Car**: Select the desired car and fill out the booking form.
- **Manage Your Booking**: Access your account to view or modify your bookings.
- **Car Management**: Admins protected route. Where admin can add, update, return, and delete cars from the inventory.
- **User Management**: Admins protected route. Where admin can view all users and add new admin or new user.
- **Booking Management**: Users can book cars, view their own bookings history, and admins can manage bookings.
- **Real-Time Availability**: Get instant updates on the availability of vehicles.
- **Wide Selection of Cars**: Choose from economy, luxury, and SUV categories.
- **24/7 Customer Support**: Access customer support any time of day or night.
- **Detailed Car Information**: View car details, features, insurance options, and cancellation policies.

## Technology Stack

- **Frontend**: NextJs, TypeScript, MUI, Tailwind CSS
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB, Mongoose
- **State Management**: Redux
- **Others**: react-hook-form, Toast Notifications, Zod Validation

## Installation Guideline

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)
- MongoDB instance (local or cloud)

### Installation Steps

1. **First step** => Clone the project

   ```sh
   git clone https://github.com/yusuf-khan-swd/easy-drive-frontend-nextjs.git
   cd easy-drive-frontend-nextjs
   ```

2. **Second step** => Install all the packages using

   ```sh
   npm install
   ```

3. **Final step** => Run your code by using

   ```sh
   npm run dev
   ```

```markdown
# Routes

## Public Routes

- Home
- Cars
- Car Details
- About
- Contact
- Login
- Register

## User Routes

- Book Now
- Review Form
- Edit Profile
- My Bookings
  - Edit Booking Start Time
  - Return Car (End Time)
  - After return the car user can pay
- Payment
- Payment History

## Admin Routes

- Manage Cars
  - Create Car
  - Edit Car
  - Delete Car
- Manage Bookings
  - Edit Booking
  - Delete Booking
- Manage Return Car
  - Return a Car
  - Edit Return
  - Delete Return
- Manage Users
  - Edit User
  - Make User to an Admin
  - Create User
  - Create Admin
  - Delete User
```
