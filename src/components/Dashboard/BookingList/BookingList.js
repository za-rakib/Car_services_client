import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
   
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 ">
                <div className="row">
                    <div className="col-md-6">
                        <h4 style={{}} className="m-4">Booking List</h4>
                    </div>
                    <div className="col-md-6 ">
                        <h4 style={{}} className="text-warning m-4">{loggedInUser.displayName}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;