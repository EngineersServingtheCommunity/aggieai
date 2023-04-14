import React from "react";
import {useState, useEffect} from "react";
import './Classes.css';
import Navbar from '../components/Navbar.js'
import WriteReview from "../components/writeReview.js";
import Comment from '../components/comment.js'
import axios from 'axios';

const classBaseURL  ='http://localhost:1337/api/classes'
const ratingBaseURL = 'http://localhost:1337/api/ratings'

function Classes() {

    const [classContent, setClassContent] = useState(null);
    const [ratingContent, setRatingContent] = useState(null);
    const [totRating, setTotRating] = useState(null);

    useEffect(() => {
        axios.get(classBaseURL)
        .then((response) => {
            console.log(response);
            setClassContent(response.data);
        })
        .catch(error => console.log(error));

        axios.get(ratingBaseURL)
        .then((response) => {
            setRatingContent(response.data);
            setTotRating(response.data.data.length);
        })
        .catch(error => console.log(error))
      }, []);

        let itemList=[];
        for(let i=0; i<totRating; i++){
            console.log(ratingContent.data[i].attributes.grade)
            itemList.push( <Comment review={ratingContent.data[i].attributes}/>)
        }

    if (!classContent) return <div><p>nothing found</p></div>;

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <h1>{classContent.data[0].attributes.name}</h1>
            <p>{classContent.data[0].attributes.description}</p>
            
            <div>
                {itemList}
            </div>

            <div id='thing'>
                <WriteReview/>
            </div>
        </div>
    );
}

export default Classes;
