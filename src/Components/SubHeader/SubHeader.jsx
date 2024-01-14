import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './SubHeader.scss';

export const SubHeader=({subHeaders=[]})=>{

    const location = useLocation();

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

    return(
        <div className="subheader-wrapper">
            {subHeaders.length > 0 && subHeaders?.map((header)=>(
                <h3 
                    className="sub-headers"
                    onClick={()=>scrollTo(header.scrollId)}
                >
                    {header.name}
                </h3>
            ))}
        </div>
    )
}