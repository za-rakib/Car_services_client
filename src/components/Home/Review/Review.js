import React, { useState } from 'react';
import ReviewCard from './../ReviewCard.js/ReviewCard';

const Review = () => {

    const [review , setReview] = useState({});

    // data load to database
    fetch('http://localhost:5000/review')
        .then((response) => response.json())
        .then((review) => {
            console.log(review)
            setReview(review[0])
        })
    return (
        <section className="Testimonial-section container my-5">
            <h4 className="text-warning text-center my-5">REVIEWS</h4>
            <div className="row">
                {/* {
                    Testimonials.map(Testimonial => <TestimonialCard key={Testimonial.id} Testimonial={Testimonial} />)
                } */}
                
                <ReviewCard review={review}/>
                {/* <TestimonialCard  review={review} />) */}
                
                
            </div>
            <div className="">
                {/* <h5>{review.name}</h5>
                <h6>{review.company}</h6>
                <p>{review.description}</p> */}
            </div>
        </section>
    );
};

export default Review;