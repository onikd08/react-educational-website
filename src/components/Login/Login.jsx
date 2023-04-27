import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { thirdPartyLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleThirdPartyLogin = (provider) => {
    thirdPartyLogin(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="hero min-h-screen bg-base-200 text-center">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
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
            <div className="form-control mt-6">
              <input
                value="Login"
                type="submit"
                className="btn btn-primary"
              ></input>
            </div>
            <div className="">
              <small>Don't have an account yet?</small>
              <Link
                to="/signup"
                className=" ms-2 label-text-alt link link-hover"
              >
                Sign Up from here
              </Link>
            </div>
            <p>Or</p>
          </form>
          <div className="mx-auto mb-3">
            <button
              onClick={() => handleThirdPartyLogin(googleProvider)}
              className="btn btn-outline btn-info me-3"
            >
              Google
            </button>
            <button
              onClick={() => handleThirdPartyLogin(githubProvider)}
              className="btn btn-outline"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
