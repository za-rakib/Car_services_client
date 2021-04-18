import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [review, setReview] = useState({
        name: '',
        company: '',
        description: '',
        image:'',
        
    })


    // handleBlur
    const handleChangeReview = (event) => {
        const newUserInfo = {...review}
        newUserInfo[event.target.name] = event.target.value;
        setReview(newUserInfo);
    }


    // Summit
    const handleReviewSubmit = (event) => {

        // database ta data load
        fetch('http://localhost:5000/reviewForm',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then((response) => response.json())
            .then((success) => {
                if(success){
                    alert('Form Submit Successfully')
                }
            })
            .catch((error) => console.log(error))

        event.preventDefault();
    }


    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 ">
                <div className="row">
                    <div className="col-md-6">
                        <h4 style={{}} className="m-4">Review</h4>
                    </div>
                    <div className="col-md-6 ">
                        <h4 style={{}} className="text-warning m-4">{loggedInUser.displayName}</h4>
                    </div>
                </div>
                <div className="bg-light p-5" style={{ width: '75%', margin: '0 auto' }}>
                    <form action="" className=" " onSubmit={handleReviewSubmit}  >
                        <input type="text" onBlur={handleChangeReview} className="form-control" name="name" placeholder="Your Name" required/>
                        <br />
                        <br />
                        <input type="text" onBlur={handleChangeReview} className="form-control" name="company" placeholder="Company's Name" required/>
                        <br />
                        <br />
                        <textarea onBlur={handleChangeReview} name="description" className="form-control" placeholder="Description" required></textarea>
                        <br />
                        <br />
                        <input type="file" onBlur={handleChangeReview} name="image"  />
                        <div className="text-center">
                            <input type="submit" value="Submit" className="btn btn-warning" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;