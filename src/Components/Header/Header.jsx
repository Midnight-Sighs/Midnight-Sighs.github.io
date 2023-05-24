import React from 'react'
import './Header.scss'

export const Header = () => {

    const scrollTo =(selectedSection)=>{
        const scrollSection = document.getElementById(`${selectedSection}`);
        scrollSection.scrollIntoView({behavior: "smooth", block: 'start'});
    }

    return (
        <div className="header-wrapper">
            <h5 onClick={()=>scrollTo("#projects")}>Code Projects</h5>
            <h5 onClick={()=>scrollTo("#technologies")}>Technologies</h5>
            <h5 onClick={()=>scrollTo("#otherTech")}>Other Tech</h5>
            <h5 onClick={()=>scrollTo("#art")}>Art</h5>
            {/* 
            <h5 onClick={()=>scrollTo("#gaming")}>Gaming</h5>
            <h5 onClick={()=>scrollTo("#blog")}>Blog</h5>
            <h5 onClick={()=>scrollTo("#about")}>About</h5> */}
        </div>
    )
}