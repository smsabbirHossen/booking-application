import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelBooking } from "../redux/booking/action";
import Booking from "./Booking";

const BookingsList = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking);
  const handelDelete = (id) => {
    dispatch(cancelBooking(id));
  };

  return (
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">Class</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-300/20" id="lws-previewBooked">
          {bookings &&
            bookings.map((booking) => (
              <Booking
                key={booking.id}
                booking={booking}
                handelDelete={handelDelete}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsList;
