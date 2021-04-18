import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../App';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import OrderListCard from '../OrderListCard/OrderListCard';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }, [])
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar/>
            </div>
            <div className="col-md-9">
                <div className="row">
                    <div className="col-md-6">
                        <h4 style={{}} className="m-4">Order List</h4>
                    </div>
                    <div className="col-md-6 ">
                        <h4 style={{}} className="text-warning m-4">{loggedInUser.name}</h4>
                    </div>
                </div>
                <div className=" d-flex justify-content-center ml-5">
                <OrderListCard />
                </div>
                <div className=" d-flex justify-content-center ml-5">
                <AdminDashboard/>
                </div>
            </div>
        </div>
    );
};

export default OrderList;