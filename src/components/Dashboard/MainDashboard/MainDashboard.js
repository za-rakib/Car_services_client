import React, { useEffect, useState } from 'react';
import DashboardCard from '../DashboardCard/DashboardCard';
import Sidebar from '../Sidebar/Sidebar';

const dashboardFakeData = [
    {
        id: 1,
        title: 'Order List',
        backgroundColor: 'bg-danger',
    },
    {
        id: 2,
        title: "Today's Order",
        backgroundColor: 'bg-primary',
    },
    {
        id: 3,
        title: 'Pending',
        backgroundColor: 'bg-success',
    },
    {
        id: 4,
        title: 'Complete Services',
        backgroundColor: 'bg-warning',
        
    },
]

const MainDashboard = () => {
    const [allPatients, setAppointments] = useState([]);

    
    document.title = 'Dashboard';
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 ">
                <h4 style={{ color: '#1CC7C1' }} className="m-4">Dashboard</h4>
                <div className="row">

                    {
                        dashboardFakeData.map(data => <DashboardCard key={data.id} data={data} allPatients={allPatients}/>)
                    }

                </div>
            </div>
        </div>

    );
};

export default MainDashboard;