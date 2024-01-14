import React from 'react'
import './MainText.scss'
import Stars from '../Stars'

export const MainText = ({title = "Midnight", topText="Developer || Artist || All Around Nerd", subTitle="AKA Arreis Kurai"}) => {
    return (
        <div className="main-text-wrapper">
            <Stars />
            <p>{topText}</p>
            <p className="midnight">
                {title}
            </p>
            <p className="real-name">
                {subTitle}
            </p>
        </div>
    )
}
