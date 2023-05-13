import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/ContextProvider';
const SignUp = () => {
  const [error, setError] = useState('')
      const { createUser, loading } = useContext(AuthContext);

      const handleSignUp = (event) => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const username = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
          .then((result) => {
            const createdUser = result.user;
            console.log(createdUser);
            form.reset();
          })
          .catch((error) => setError(error.message));
      };

      if(loading) {
        return <p>Loading...</p>
      }
 
  return (
    <div className="hero min-h-screen bg-base-200 py-12">
      <div className="hero-content grid gap-8 sm:grid-cols-2 max-w-4xl">
        <div className="">
          <img className="w-full h-full  object-cover" src={img} alt="" />
        </div>
        <div className="card shadow-2xl  bg-base-100">
          <h1 className="text-5xl font-bold text-center py-4">Sign Up!</h1>
          <form onSubmit={handleSignUp}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                  className="input input-bordered"
                  required
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
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              {error && <p className="text-error font-medium">{error}</p>}
            </div>
            <p className="p-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-red-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp