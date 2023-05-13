import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/ContextProvider";

import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

export const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const URL = `https://car-store-server.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(URL, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookings(data);
        } else {
          // logout and navigate
          navigate("/", { replace: true });
        }
      });
  }, [URL]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");

    if (proceed) {
      fetch(`https://car-store-server.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = bookings.filter((book) => book._id !== id);

            setBookings(remaining);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>image</th>
            <th>Service</th>
            <th>Date</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingRow
              key={booking._id}
              {...booking}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
