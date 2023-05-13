import React, { useState } from 'react'

const BookingRow = ({
  _id,
  img,
  service_title,
  date,
  amount,
  handleDelete,
}) => {
  return (
    <>
      <tr>
        <th>
          <button
            className="btn btn-circle btn-xs"
            onClick={() => handleDelete(_id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-12">
                {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
          </div>
        </td>
        <td>{service_title}</td>
        <td>{date}</td>
        <td>{amount}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </>
  );
};

export default BookingRow