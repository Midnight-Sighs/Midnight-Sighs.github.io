import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { scrollTo } from '../../Components/CommonFunctions'
import './SubHeader.scss';

export const SubHeader=({subHeaders=[]})=>{

    const location = useLocation();

    useEffect(()=>{
        if(location.hash){
            scrollTo(location.hash, location)
        }
    //ONLY run on first load, otherwise we'll screw shit up! Location WILL be here first run because it's only used if the link is bookmarked or entered externally
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <div className="subheader-wrapper">
            {subHeaders.length > 0 && subHeaders?.map((header)=>(
                <h3 
                    key={`subheader-${header.name}-${header.id}`}
                    className="sub-headers"
                    onClick={()=>scrollTo(header.scrollId, location)}
                >
                    {header.name}
                </h3>
            ))}
        </div>
    )
}