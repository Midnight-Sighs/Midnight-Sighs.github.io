import React from 'react'

import './OtherTechLibraries.scss';

export const OtherTechLibraries = () => {
    
    const libraryList = [
        {
            id: 0,
            name: "Cypress"
        },
        {
            id: 1,
            name: "Axios"
        },
        {
            id: 2,
            name: "React Router Dom"
        },
        {
            id: 3,
            name: "Full Calendar"
        },
        {
            id: 4,
            name: "Various Different Sort Order Trees"
        },
        {
            id: 5,
            name: "React Pro Sidebar"
        },
        {
            id: 6,
            name: "Postman"
        },
        {
            id: 7,
            name: "Youtube, Google, ClickUp Apis"
        },
        {
            id: 8,
            name: "Jira"
        },
        {
            id: 9,
            name: "ClickUp"
        },
        {
            id: 10,
            name: "Whimsical"
        },
        {
            id:11,
            name: "Storybook"
        }
    ]

    return (
        <div className="other-tech-wrapper" id="#otherTech">
            <h3 className="section-headers">
                Other Tech
            </h3>
            <div className="other-tech-container">
                <p>
                    While not meant to be an exhaustive list, this is just meant to be a demonstration of other things I've used and am familiar with.  Moreso as a demonstration that I can adapt to many different types of documentations and styles.  
                </p>
                <ul>
                    {libraryList.map((library)=>(
                        <li key={`library-${library.id}`}>{library.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
