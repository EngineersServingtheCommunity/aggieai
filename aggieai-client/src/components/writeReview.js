import React from "react";
import {useState} from 'react';
import './writeReview.css'

const WriteReview = () => {
    const [review, setReview] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The post you entered was: ${review}`);
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
