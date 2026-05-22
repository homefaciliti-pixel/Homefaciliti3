import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import BookingCard from "../../components/cards/BookingCard";
import { getVendorBookings } from "../../api/vendor.api";
import useAuth from "../../hooks/useAuth";

const BookingRequests = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetch = async () => {
      const data = await getVendorBookings();
      setBookings(data.bookings);
    };
    fetch();
  }, []);

  return (
    <DashboardLayout>
      <h2 className="text-xl font-bold mb-4">Booking Requests</h2>
      {bookings.map((booking) => (
        <BookingCard
          key={booking._id}
          booking={booking}
          role={user.role}
        />
      ))}
    </DashboardLayout>
  );
};

export default BookingRequests;