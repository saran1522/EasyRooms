"use client";
import { useOptimistic } from "react";
import { deleteReservation } from "../_lib/actions";
import ReservationCard from "./ReservationCard";

export default function ReservationList({ bookings }) {
  const [optimisticBookings, deleteBooking] = useOptimistic(
    bookings,
    (currBookings, bookingId) => {
      return currBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    deleteBooking(bookingId);
    await deleteReservation(bookingId);
  }
  return (
    <div>
      <ul className="space-y-6">
        {optimisticBookings.map((booking) => (
          <ReservationCard
            booking={booking}
            onDelete={handleDelete}
            key={booking.id}
          />
        ))}
      </ul>
    </div>
  );
}
