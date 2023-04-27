import React from "react";
import { Link } from "react-router-dom";

const Avatar = ({ user }) => {
  const { photoURL, displayName, uid } = user;
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={photoURL} alt={displayName || uid} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <Link className="justify-between">Profile</Link>
        </li>
        <li>
          <Link>Settings</Link>
        </li>
        <li>
          <Link>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;
