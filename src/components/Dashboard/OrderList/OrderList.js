import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../App';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import OrderListCard from '../OrderListCard/OrderListCard';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4444/review')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }, [])
    return (
        <div className="row">
            <div className="col-md-2">
                <AdminDashboard />
            </div>
            <div className="col-md-10 ">
                <div className="row">
                    <div className="col-md-6">
                        <h4 style={{}} className="m-4">Order List</h4>
                    </div>
                    <div className="col-md-6 ">
                        <h4 style={{}} className="text-warning m-4">{loggedInUser.name}</h4>
                    </div>
                </div>
                <OrderListCard />
            </div>
        </div>
    );
};

export default OrderList;