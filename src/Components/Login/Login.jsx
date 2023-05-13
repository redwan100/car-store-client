import React, { useContext, useState } from 'react'
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextProvider';
import SocialLogin from '../../Pages/Shared/SocialLogin';

const Login = () => {
    const { userSignIn } = useContext(AuthContext);
    const [error, setError] = useState('')
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate();

    const handleLogin = (event) => {
      event.preventDefault();
      setError('')
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      userSignIn(email, password)
        .then((result) => {
          const user = result.user

          form.reset();
          navigate(from, { replace: true });
          
        })
        .catch((error) => setError(error.message));
    };



  return (
    <div className="hero min-h-screen bg-base-200 py-12">
      <div className="hero-content grid gap-8 sm:grid-cols-2 max-w-4xl">
        <div className="">
          <img className="w-full h-full  object-cover" src={img} alt="" />
        </div>
        <div className="card shadow-2xl  bg-base-100">
          <h1 className="text-5xl font-bold text-center py-4">Login now!</h1>
          <form onSubmit={handleLogin}>
            <div className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              {error && <p className="text-error font-medium">{error}</p>}
            </div>
            <p className="p-4 text-center">
              New to Car Doctor?{" "}
              <Link to="/signup" className="text-primary hover:underline">
                Register
              </Link>
            </p>

            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login