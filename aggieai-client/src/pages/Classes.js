import React from "react";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import './Classes.css';
import Navbar from '../components/Navbar.js'
import axios from 'axios';

const baseURL  ='http://localhost:1337/api/classes?populate[ratings][populate][0]=comments'

function Classes() {
    const navigate = useNavigate();

    const [content, setContent] = useState(null);

    useEffect(() => {
        axios.get(baseURL)
        .then((response) => {
            setContent(response.data);
        })
        .catch(error => console.log(error));
      }, []);


    if (!content) return <div><p>nothing found</p></div>;

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <h1>{content.data[0].attributes.name}</h1>
            <p>{content.data[0].attributes.description}</p>




            <button onClick={()=>navigate('../about')}>Go to about page</button>

        </div>
            
    );
}

export default Classes;
