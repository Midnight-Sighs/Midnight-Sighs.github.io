import React from "react";
import Projects from "../../Components/Projects";
import Technologies from "../../Components/Technologies";
import OtherTechLibraries from "../../Components/OtherTechLibraries";
import SubHeader from "../../Components/SubHeader";

import subHeaders from "../../Components/SubHeader/SubHeaderLists.json"

export const Development = ()=>{
    return(
        <div>
            <SubHeader subHeaders={subHeaders.development} />
            <div className="center-row">
                <h1 className="page-title">
                    Development
                </h1>
                <div>
                    <Projects />
                    <Technologies />
                    <OtherTechLibraries />
                </div>
            </div>
        </div>
    )
}