import React, {useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Home.css';

import Select from 'react-select';

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


    const [isLoading, setIsLoading] = useState(false);
    
    if (!classList) return <div><p>nothing found</p></div>;

    const classOptions = classList.map((obj) => ({value: obj.attributes.name, label: obj.attributes.name}));

    console.log(classOptions)

    return (
        <div>

            <title>Aggie AI</title>
            <link rel="stylesheet" href="https://use.typekit.net/nbf0pnf.css" />
            <link rel="stylesheet" href="Home.css" />
            <nav>
                <ul>
                <li>
                    <button onClick={()=>navigate('login')}>Login</button>
                </li>
                <li>
                    <a target='_blank' href="https://sites.google.com/view/esctamu">ESC</a>
                </li>
                </ul>
            </nav>
            <h1>Search. Rate. Gig'em.</h1>
            <p>
                Find your courses within the Aggie community <br />
                system that has been through it all.
            </p>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={classOptions[0]}
                isDisabled={false}
                isLoading={false}
                isClearable={true}
                isRtl={false}
                isSearchable={true}
                name="classes"
                options={classOptions}
            />
        </div>
    );
}

export default Home;
