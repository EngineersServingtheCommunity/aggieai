import React from "react";
import { useNavigate } from "react-router-dom";
import './Classes.css';
import Navbar from '../components/Navbar.js'
import WriteReview from "../components/writeReview.js";

function Classes() {
    const navigate = useNavigate();


    return (
        <div>
            <div>
                <Navbar/>
            </div>

            <div id='page'>
                <div id='regular'>
                    <p>
                        Here are the classes
                    </p>
                    <button onClick={()=>navigate('../about')}>Go to about page</button>
                </div>
                
                <div id='thing'>
                    <WriteReview/>
                </div>
            </div>

            
        </div>
    );
}

export default Classes;
