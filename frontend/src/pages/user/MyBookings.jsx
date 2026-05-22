import { useEffect } from "react";
import DashboardLayout from "../../layouts/DashboardLayout.jsx";
import BookingCard from "../../components/cards/BookingCard.jsx";
import { getMyBookings } from "../../api/ booking.api.js";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetch = async () => {
      const data = await getMyBookings();
      setBookings(data.bookings);
    };
    fetch();
  }, []);

  return (
    <DashboardLayout>
      <h2 className="text-xl font-bold mb-4">My Bookings</h2>
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

export default MyBookings;