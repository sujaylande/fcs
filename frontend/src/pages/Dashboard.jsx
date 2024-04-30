import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import OrderCard from '../componets/OrderCard';
import OrderDeliverCard from "../componets/OrderDeliverCard";
import Header from '../componets/Header';
import Footer from '../componets/Footer';
const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const userDetails = Cookies.get("userDetails")
        ? JSON.parse(Cookies.get("userDetails"))
        : null;
        const token = userDetails ? userDetails.token : null;

        if (!userDetails || !token) {
        navigate("/login");
        return null;
        }
    }, [])

    return (
      <>
        <Header />
        <div className="flex flex-row px-10 pt-9  justify-between ">
          <div className="flex flex-row gap-10 justify-center">
            <OrderCard type="newOrder" />
            <OrderCard type="pendingOrder" />
          </div>
          <div className="flex items-center">
            <OrderDeliverCard />
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Dashboard