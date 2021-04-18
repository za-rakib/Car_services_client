/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Booking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [booking, setBooking] = useState({
        name: '',
        email: '',
        service: ''
    });

    const { register, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));

    // handle blur events
    const handleBlur = (event) => {
        const newBooking = { ...booking };
        newBooking[event.target.name] = event.target.value;
        setBooking(newBooking);
    }


    // handleSubmit
    const handleSubmit = (event) => {
        useEffect(() => {
            fetch('http://localhost:5000/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
                .then(res => res.json())
                .then(success => {
                    if (success) {
                        // alert('Thanks for submitting the form. Our team will contact you shortly');
                        console.log(success);
                    }
                })

        }, [])
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div className="row">
                    <div className="col-md-6">
                        <h4 style={{}} className="text-center m-5 ml-5">Booking</h4>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{}} className="text-warning m-4">{loggedInUser.displayName}</h4>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: '75%', margin: '0 auto' }} className="py-5 bg-light p-5">
                    <input type="text" name="name" className="form-control" onBlur={handleBlur} defaultValue="" {...register("example")} />
                    <br /><br />
                    <input type="email" name="email" className="form-control" onBlur={handleBlur}  {...register("exampleRequired", { required: true })} />
                    <br /><br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="text" name="service" className="form-control" onBlur={handleBlur} defaultValue="" {...register("example")} />
                    <br /><br />
                    <p className="text-muted">Pay With</p>
                    <ProcessPayment />

                </form>
            </div>
        </div>
    );
};

export default Booking;