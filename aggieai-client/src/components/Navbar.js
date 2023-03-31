import React from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css'

const NavBar = () => {
    const navigate = useNavigate();

    return(
        <div id='navbar'>
            <a href='/' id='navbar'>
                AggieAI
            </a>
            {/*
            <a href='https://sites.google.com/view/esctamu' id='navbar' target="_blank">
                <img src="../public/Logo.jpeg"/>
            </a>
            */}
            <a href='/login' id='navbar'>
                Login
            </a>
        </div>
    )
    
}

export default NavBar;