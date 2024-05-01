import React from 'react'
import { useState } from "react"
import StatusCard from '../components/StatusCard'
import Header from "../components/Header";
import axios from "axios";
import {Link} from 'react-router-dom';
const Home = () => {
    const [orderStatus, setOrderStatus] = useState("");
    const [orderNo, setOrderNo] = useState("");
    const onChangeHandler = (e) => {
      setOrderStatus("");
      setOrderNo(e.target.value)
    }
    const submitOrderNo = async () => {
      if (!/[0-9].+/.test(orderNo) || orderNo == "0") {
        alert("Input value should contain at least one integer character.");
      }
      else {
        try {
          const token = orderNo;
          const response = await axios.post('http://localhost:4000/api/v1/myorderstatus', { token: token });
          if (response.status == 200) {
            const status = response?.data?.message;
            setOrderStatus(status);
          }
        }
        catch (e) {
          console.error("Error", e);
        }
      }
    }
  return (
    <>
      <Header />
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex justify-center items-center flex-col py-5">
          <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900 text-xl py-2">Enter your Order No</label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="" value={orderNo} onChange={onChangeHandler} />
          </div>
          <button className="px-2 py-1 bg-blue-700 text-[#fff] rounded-md shadow-lg mt-3 text-sm uppercase font-medium" onClick={submitOrderNo}>Check Status </button>
        </div>
      </div>
      
      {orderStatus !== "" ? <StatusCard message={orderStatus} orderNo={orderNo} /> : <></>}
    </>
  )
}

export default Home
