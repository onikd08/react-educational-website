import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Sign Up!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label htmlFor="confirm" className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                required
                name="confirm"
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                value="Sign up"
                type="submit"
                className="btn btn-primary"
              ></input>
            </div>
            <div className="text-center mt-0">
              <Link to="/login" className="label-text-alt link link-hover ">
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
