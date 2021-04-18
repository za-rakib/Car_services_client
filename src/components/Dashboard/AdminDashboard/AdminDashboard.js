import React, { useState } from 'react';

import Sidebar from '../Sidebar/Sidebar';


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

            <div className="col-md-3">    
                <Sidebar/>
            </div>
            <div className="col-md-9 from-cal">
                <div className="row">
                    <div className="">
                        <h4 style={{}} className="pl-5 m-5">Admin</h4>
                    </div>
                    <div className="">
                        <h4 style={{}} className="text-warning m-4">{info.name }</h4>
                    </div>
                </div>
                <form onSubmit={handleSubmit} action="" method="POST" style={{ width: '75%', margin: '0 auto' }} className="bg-light m-5 p-5">
                <input onBlur={handleBlur} type="name" name="name" className="form-control" placeholder="Rakib" required />
                    <br />
                    <input onBlur={handleBlur} type="email" name="adminEmail" className="form-control" placeholder="phpzarakib@gmail.com" required />
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