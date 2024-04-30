import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-gray-400 py-3 px-5">
      <h1 className="text-[#fff] capitalize text-xl font-bold">
        NITK - Food Court
      </h1>
      <Link
        to="/login"
        className="px-2 py-1 bg-black text-[#fff] rounded-md shadow-lg text-sm uppercase font-medium"
      >
        Admin Login
      </Link>
    </div>
  );
}

export default Header;