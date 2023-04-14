import React from "react";
import './comment.css';

const comment = ({review}) => {

    return(
        <div id='guy'>
            <div id='labels'>
                <p>
                    Professor: {review.professor}
                </p>

                <p>
                    Grade: {review.grade}
                </p>

                <p>
                    Votes: {review.votes}
                </p>

            </div>
            <div id='content'>
                <p>
                    {review.review}
                </p>
            </div>
        </div>
    )
}
export default comment;