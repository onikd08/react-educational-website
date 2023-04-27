import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <h1 className="text-5xl font-bold">Welcome {user?.displayName}</h1>

        <img
          src={user?.photoURL}
          alt={user?.displayName}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  value={user?.email}
                  readOnly
                />
              </div>
              <div className="form-control">
                <label htmlFor="password" className="label">
                  <span className="label-text">Change Password</span>
                </label>
                <input
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
                  name="confirm"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
