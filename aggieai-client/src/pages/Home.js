import React, {useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Home.css';

const classURL  ='http://localhost:1337/api/classes'

function Home() {
    const navigate = useNavigate();

    const [classList, setClassList] = useState(null);

    useEffect(() => {
        axios.get(classURL)
        .then((response) => {
            console.log(response)
            setClassList(response.data.data);
        })
        .catch(error => console.log(error));
      }, []);

    
    //if (!classList) return <div><p>nothing found</p></div>;
    //let first_class = classList[0].attributes.name;

    return (
        <div>
            <title>Aggie AI</title>
            <link rel="stylesheet" href="https://use.typekit.net/nbf0pnf.css" />
            <link rel="stylesheet" href="Home.css" />
            <nav>
                <ul>
                <li>
                    <a href="#">Login</a>
                </li>
                <li>
                    <a href="#">ESC</a>
                </li>
                </ul>
            </nav>
            <h1>Search. Rate. Gig'em.</h1>
            <p>
                Find your courses within the Aggie community <br />
                system that has been through it all.
            </p>
            <button className="button">SEARCH FOR A CLASS</button>
        </div>
    );
}

export default Home;
