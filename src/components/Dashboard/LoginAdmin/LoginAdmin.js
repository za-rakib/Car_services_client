import React, { useContext } from 'react';
import { userContext } from '../../../App';
import AdminDashboard from '../AdminDashboard/AdminDashboard';

const LoginAdmin = () => {
    
    
    return (
        <div className="row">
            <div className="col-md-2">
                
            </div>
            <div className=" d-flex justify-content-center col-md-10">
                <div className="row">
                    <div className="col-md-6">
                        <h4 style={{}} className="m-4">Admin</h4>
                    </div>
                    <div className="col-md-6 ">
                        <h4 style={{}} className="text-warning m-4">{}</h4>
                    </div>
                </div>
                <form action="" method="POST" style={{width:'75%',margin: '0 auto' }} className="bg-light m-5 p-5">
                    <input type="email" className="form-control" placeholder="phpzarakib@gmail.com" required />
                    <br/>
                    <input type="submit" value="Submit" className="btn btn-warning" />
                </form>

            </div>
        </div>
    );
};

export default LoginAdmin;