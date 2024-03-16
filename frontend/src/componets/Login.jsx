import React, {useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import axios from 'axios';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
const onClickHandle = async() => {
      console.log(username);
      console.log(password);

      try {
        const email = username;
        const pass = password;
        const response = await axios.post('http://localhost:4000/api/v1/login', { email: email, password: pass });
        if (response.status == 200) {
          const email = response?.data?.email;
          const token = response?.data?.token;
          console.log(email);
          console.log(token);
          navigate('/');
        }
      }
      catch (e) {
        console.error("Error", e);
      }
    }
  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex justify-center items-center flex-col py-5">
          <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900 text-xl py-2">Admin Login</label>
          <div className="flex flex-col gap-2 relative mt-2 rounded-md shadow-sm">
            <input type="text" name="username" id="price" className="block w-full rounded-md border-0 py-1 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" name="password" id="price" className="block w-full rounded-md border-0 py-1 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button className="px-2 py-1 bg-blue-700 text-[#fff] rounded-md shadow-lg mt-3 text-sm uppercase font-medium" onClick={onClickHandle} >Login</button>
        </div>
      </div>
    </>
  )
}

export default Login
