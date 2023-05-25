import React, { useState } from 'react'
import './Header.scss'

export const Header = () => {

    const [ showBurgerMenu, setShowBurgerMenu ] = useState(false);

    const scrollTo =(selectedSection)=>{
        setShowBurgerMenu(false);
        const scrollSection = document.getElementById(`${selectedSection}`);
        scrollSection.scrollIntoView({behavior: "smooth", block: 'start'});
    }

    return (
        <div className="header-wrapper">
            <div className="main-menu">
                <h5 onClick={()=>scrollTo("#projects")}>Code Projects</h5>
                <h5 onClick={()=>scrollTo("#technologies")}>Technologies</h5>
                <h5 onClick={()=>scrollTo("#otherTech")}>Other Tech</h5>
                <h5 onClick={()=>scrollTo("#art")}>Art</h5>
                {/* 
                <h5 onClick={()=>scrollTo("#gaming")}>Gaming</h5>
                <h5 onClick={()=>scrollTo("#blog")}>Blog</h5>
                <h5 onClick={()=>scrollTo("#about")}>About</h5> */}
            </div>
            <div className="burger-menu">
                <svg onClick={()=>setShowBurgerMenu(!showBurgerMenu)}fill="#ffd06c" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffd06c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
                <div className={`fries ${showBurgerMenu ? "" : "display-none"} `}>
                    <h5 onClick={()=>scrollTo("#projects")}>Code Projects</h5>
                    <h5 onClick={()=>scrollTo("#technologies")}>Technologies</h5>
                    <h5 onClick={()=>scrollTo("#otherTech")}>Other Tech</h5>
                    <h5 onClick={()=>scrollTo("#art")}>Art</h5>
                    {/* 
                    <h5 onClick={()=>scrollTo("#gaming")}>Gaming</h5>
                    <h5 onClick={()=>scrollTo("#blog")}>Blog</h5>
                    <h5 onClick={()=>scrollTo("#about")}>About</h5> */}
                </div>
            </div>
        </div>
    )
}