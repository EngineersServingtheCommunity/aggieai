import React from "react";
import {useState} from 'react';
import './writeReview.css'
import axios from 'axios';

const baseURL = 'http://localhost:1337/api/ratings'

const WriteReview = () => {
    const [review, setReview] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(baseURL, 
            {
                "data": {
                    author: 'general user',
                    email: 'b@tamu.edu',
                    review: review,
                    rating: 3,
                    professor: 'Dr.Rahm',
                    votes: 5,
                }
            }
        )
        .then(response => {console.log(response)} )
    }


    return(
        <div id='sec'>
            <form onSubmit={handleSubmit}>
                <label for='review'>

                    <p id='prompt'>
                        Write a review:
                    </p>

                    <div id='pls'>
                        <div id='con'>
                            <input
                            type="text" 
                            value={review}
                            onChange={(e) =>setReview(e.target.value)}
                            placeholder='Type your comment here'
                            />
                        </div>
                    </div>
                    
                    
                </label>
                <div id='works'>
                    <div id='submit'>
                        <input type='submit' value='Submit'/>
                    </div>
                </div>
                
            </form>
        </div>
    )

}

export default WriteReview;
