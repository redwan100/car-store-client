import React, { useContext } from "react";
import SectionCard from "../../Pages/Shared/SectionCard";
import { useLoaderData, useNavigate } from "react-router-dom";
import img from "../../assets/images/checkout/checkout.png";
import { FaTelegramPlane } from "react-icons/fa";
import { AuthContext } from "../../Context/ContextProvider";

const BookService = () => {
  const { _id, title, price, img } = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const amount = form.amount.value;
    const desc = form.textarea.value;

    const orderInfo = {
      service_id: _id,
      service_title: title,
      name,
      email,
      amount,
      date,
      desc,
      img,
    };

    // DATA SEND TO DATABASE
    let url = "https://car-store-server.vercel.app/bookings";
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          alert("Successfully Your order has been confirmed");
          navigate("/");
        }
      })
      .catch((err) => console.error("error:" + err));
  };

  return (
    <div>
      <div>
        <SectionCard title={"Book Service"} img={img} />
      </div>

      <h1 className="text-3xl font-semibold mt-6 pl-6">Book Service:{title}</h1>
      <form onSubmit={handleBookService}>
        <div className="card-body">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter Name"
                className="input input-bordered"
                defaultValue={user?.displayName}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Email"
                className="input input-bordered"
                name="email"
                readOnly
                defaultValue={user?.email}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="password"
                className="input input-bordered"
                name="date"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Dou Amount</span>
              </label>
              <input
                type="text"
                placeholder="Amount"
                className="input input-bordered"
                name="amount"
                defaultValue={`$${price}`}
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <textarea
              placeholder="Write here..."
              name="textarea"
              className="textarea textarea-info w-full textarea-bordered"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary sm:max-w-sm sm:ml-auto">
              Booking <FaTelegramPlane size={20} className="mx-2" />{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookService;
