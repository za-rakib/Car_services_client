import React, { useState } from 'react';

const Contact = () => {
    const [contact , setContact] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:'',

    });



    // Handle Change Blur 
    const handleBlur = (event) => {
        const newUserInfo = {...contact}
        newUserInfo[event.target.name] = event.target.value;
        setContact(newUserInfo);
    }


    // Form Submit
    const handleSubmit = (event) => {
        fetch('http://localhost:5000/formData',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
        .then(res => res.json())
        .then(success =>{
            if(success){
                alert('Thanks for submit.');
            }
        })
        event.preventDefault();
    }


    return (
        <section className="contact-section bg-light p-5">
            <h4 className="text-center my-3"><span className="text-warning">Contact</span> With Us</h4>

            <form onSubmit={handleSubmit} action="" style={{width:'70%', margin:'0 auto'}}>
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" onBlur={handleBlur} name="firstName" className="form-control " placeholder="First Name*" required />
                    </div>
                    <div className="col-md-6">
                        <input type="text" onBlur={handleBlur} name="lastName" className="form-control " placeholder="Last Name*" required />
                        <br />
                    </div>
                    <div className="col-md-6">
                        <input type="email" onBlur={handleBlur} name="email" className="form-control " placeholder="E-mail*" required />
                    </div>
                    <div className="col-md-6">
                        <input type="tel" onBlur={handleBlur} name="phone" className="form-control " placeholder="Phone*" required />
                        <br />
                    </div>
                    <div className="">
                        <textarea style={{ height: '100px', resize: 'none' }} onBlur={handleBlur} name="message" className="form-control" placeholder="Your Message"></textarea>
                        <br />
                    </div>
                </div>
                <div className="text-center" >
                    <input type="submit" value="Send Message" className="btn btn-warning" />
                </div>
            </form>
        </section>
    );
};

export default Contact;