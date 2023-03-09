import React from 'react'

import { useNavigate } from "react-router-dom";



function Home() {
    const navigate = useNavigate();


    return (
        <div>
            <p>This will be our home page</p>
            <button onClick={()=>navigate('about')}>Go to about page</button>
            <button onClick={()=>navigate('classes')}>Go to classes page</button>
        </div>
    );
}

export default Home;
