import React, { useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {

    const [review , setReview] = useState([]);
          console.log(review); 
    // data load to database
    fetch('http://localhost:5000/review2')
        .then((response) => response.json())
        .then((review) => {
            console.log(review)
            setReview(review)
        })
    return (
        <section className=" container my-5">
            <h4 className="text-warning text-center my-5">REVIEWS</h4>
            <div className="row container">
            {
                review.map(rev=><ReviewCard review={rev}/>)
            }
            </div>
            {/* <ReviewCard review={review}/> */}
            {/* <div className="row"> 
                <ReviewCard review={review}/>
            </div> */}
    
        </section>
    );
};

export default Review;