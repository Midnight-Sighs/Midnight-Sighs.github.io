import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { scrollTo } from '../../Components/CommonFunctions'
import subHeaders from '../SubHeader/SubHeaderLists.json';
import './Header.scss';

export const Header = () => {

    const location = useLocation();
    const [ showBurgerMenu, setShowBurgerMenu ] = useState(false);

    useEffect(()=>{
        if(location.hash){
            scrollTo(location.hash, location)
        }
    //ONLY run on first load, otherwise we'll screw shit up! Location WILL be here first run because it's only used if the link is bookmarked or entered externally
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        const outsideClickListener =(e)=>{
            if(
                (e.target.parentNode?.id !== "fries" 
                && e.target.parentNode?.id !== "burger-menu"  
                && e.target.parentNode?.id !== "burger-btn" 
                && e.target.id !== "burger-btn") 
                || !e.target.parentNode.id) {
                    setShowBurgerMenu(false);
                    document.removeEventListener('click', outsideClickListener);
            }
        }

        if(showBurgerMenu){
            document.addEventListener('click', outsideClickListener);
        }
    },[showBurgerMenu]);

    const handleBurgerMenu=()=>{
        setShowBurgerMenu(!showBurgerMenu);
    }

    return (
        <div className="header-wrapper">
            <div className="main-menu">
                <Link to="/">Home</Link>
                <Link to="/streaming">Streaming</Link>
                <Link to="/art">Art</Link>
                <Link to="/development">Development</Link>
                <Link to ="/about">About</Link>
            </div>
            <div id="burger-menu" className="burger-menu">
                <svg id="burger-btn" onClick={handleBurgerMenu}fill="#ffd06c" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffd06c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                </svg>
                <div id="fries" className={`fries ${showBurgerMenu ? "" : "display-none"} `}>
                    <Link to="/">Home</Link>
                    <Link to="/streaming">Streaming</Link>
                    {location.pathname === "/streaming" &&
                        <div className="burger-sub-menu">
                            {subHeaders?.streaming?.length > 0 && subHeaders?.streaming?.map((header)=>(
                                <h5 
                                    key={`sub-header-${header.name}-${header.id}`}
                                    className="sub-headers"
                                    onClick={()=>scrollTo(header.scrollId, location)}
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
                                    key={`sub-header-${header.name}-${header.id}`}
                                    className="sub-headers"
                                    onClick={()=>scrollTo(header.scrollId, location)}
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