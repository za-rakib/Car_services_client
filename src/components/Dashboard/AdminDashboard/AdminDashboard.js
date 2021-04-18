import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGripHorizontal, faPlus,  faShoppingBag , faUser } from '@fortawesome/free-solid-svg-icons';


const AdminDashboard = () => {
    const [info , setInfo] = useState({});

    // handle Change event
    const handleBlur = e => {
        const newUserInfo = {...info};
        newUserInfo[e.target.name] = e.target.value;
        setInfo(newUserInfo);

        e.preventDefault();
    }


    // handle Submit
    const handleSubmit = (e) => {
        fetch('http://localhost:5000/loginAdmin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(success =>{
            if(success){
                alert('Thanks for submitting the form. Our team will contact you shortly');
            }
        })

        e.preventDefault();
    }
    return (
        <div className="row">
            <div className="col-md-2">
                <div className="sidebar d-flex flex-column justify-content-between py-5 px-5" style={{ height: '100vh' }}>
                    <ul className="">
                        <li>
                            <Link to="/home" className="text-white">
                                <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/customerDashboard" className="text-white">
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin" className="text-white">
                                <FontAwesomeIcon icon={faUser} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/orderList" className="text-white">
                                <FontAwesomeIcon icon={faShoppingBag} /> <span>Order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="text-white">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="col-md-10">
                <div className="row">
                    <div className="col-md-6">
                        <h4 style={{}} className="m-4">Admin</h4>
                    </div>
                    <div className="col-md-6 ">
                        <h4 style={{}} className="text-warning m-4">{info.name }</h4>
                    </div>
                </div>
                <form onSubmit={handleSubmit} action="" method="POST" style={{ width: '75%', margin: '0 auto' }} className="bg-light m-5 p-5">
                <input onBlur={handleBlur} type="name" name="name" className="form-control" placeholder="iqbal" required />
                    <br />
                    <input onBlur={handleBlur} type="email" name="adminEmail" className="form-control" placeholder="iqbal@gmail.com" required />
                    <br />
                    <input onBlur={handleBlur} type="password" name="password" className="form-control" placeholder="password" required />
                    <br />
                    <input type="submit" value="Submit" className="btn btn-warning" />
                </form>
            </div>
        </div>
    );
};

export default AdminDashboard;