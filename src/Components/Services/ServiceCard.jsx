import React from 'react'
import {Link} from 'react-router-dom'
const ServiceCard = ({_id,img,title, price}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="service" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p className="text-red-500">Price:${price}</p>

        <Link to={`/bookService/${_id}`}>
          <button className="border w-max btn btn-success">Book Now </button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard