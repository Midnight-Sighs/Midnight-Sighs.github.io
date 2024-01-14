import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import subHeaders from '../SubHeader/SubHeaderLists.json';

export const Header = () => {

    const location = useLocation();
    const [ showBurgerMenu, setShowBurgerMenu ] = useState(false);

    const scrollTo =(selectedSection)=>{
        const scrollSection = document.getElementById(`${selectedSection}`);
        scrollSection.scrollIntoView({behavior: "smooth", block: 'start'});
        location.hash = selectedSection;
    }

    useEffect(()=>{
        if(location.hash){
            scrollTo(location.hash)
        }
    //ONLY run on first load, otherwise we'll screw shit up! Location WILL be here first run because it's only used if the link is bookmarked or entered externally
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className="header-wrapper">
            <div className="main-menu">
                <Link to="/">Home</Link>
                <Link to="/streaming">Streaming</Link>
                <Link to="/art">Art</Link>
                <Link to="/development">Development</Link>
                <Link to ="/about">About</Link>
            </div>
            <div className="burger-menu">
                <svg onClick={()=>setShowBurgerMenu(!showBurgerMenu)}fill="#ffd06c" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffd06c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                </svg>
                <div className={`fries ${showBurgerMenu ? "" : "display-none"} `}>
                    <Link to="/">Home</Link>
                    <Link to="/streaming">Streaming</Link>
                    {location.pathname === "/streaming" &&
                        <div className="burger-sub-menu">
                            {subHeaders?.streaming?.length > 0 && subHeaders?.streaming?.map((header)=>(
                                <h5 
                                    className="sub-headers"
                                    onClick={()=>scrollTo(header.scrollId)}
                                >
                                    {header.name}
                                </h5>
                            ))}
                        </div>
                    }
                    <Link to="/art">Art</Link>
                    <Link to="/development">Development</Link>
                    {location.pathname === "/development" &&
                        <div className="burger-sub-menu">
                            {subHeaders?.development?.length > 0 && subHeaders?.development?.map((header)=>(
                                <h5 
                                    className="sub-headers"
                                    onClick={()=>scrollTo(header.scrollId)}
                                >
                                    {header.name}
                                </h5>
                            ))}
                        </div>
                    }
                    <Link to="/about">About</Link>
                </div>
            </div>
        </div>
    )
}