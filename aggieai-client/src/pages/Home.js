import React, {useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

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
            <h1>Class page, classes available</h1>
            <p>{classList[0].attributes.name}</p>

            <button onClick={()=>navigate('about')}>Go to about page</button>
            <button onClick={()=>navigate('classes')}>Go to classes page</button>

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
