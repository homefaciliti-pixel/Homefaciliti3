/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { getMyBookings } from "../api/booking.api";

/* ===============================
   CREATE CONTEXT
================================ */
const BookingContext = createContext();

/* ===============================
   PROVIDER
================================ */
export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /* ===============================
     FETCH BOOKINGS
  =================================*/
  const fetchBookings = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getMyBookings();

      // safety check
      if (data && data.bookings) {
        setBookings(data.bookings);
      } else {
        setBookings([]);
      }
    } catch (err) {
      console.error("Booking fetch error:", err);
      setError("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  /* ===============================
     AUTO LOAD BOOKINGS (IF LOGGED IN)
  =================================*/
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetchBookings();
    }
  }, []);

  /* ===============================
     CONTEXT VALUE
  =================================*/
  const value = {
    bookings,
    setBookings,
    fetchBookings,
    loading,
    error,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

/* ===============================
   CUSTOM HOOK (VERY IMPORTANT)
================================ */
export const useBookings = () => {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error(
      "useBookings must be used inside BookingProvider"
    );
  }

  return context;
};