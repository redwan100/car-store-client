import React from 'react'
import img from '../assets/images/checkout/checkout.png'
import { useLoaderData} from 'react-router-dom'
import SectionCard from './Shared/SectionCard';

const Checkout = () => {
    const service = useLoaderData();

  return (
    <div>
      <div>
        <SectionCard title={"Checkout"} img={img} />
      </div>

      <form>
        <div className="card-body">
          <div className='grid sm:grid-cols-2 gap-6'>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                name="password"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                name="password"
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout