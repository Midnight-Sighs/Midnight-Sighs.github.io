import React from 'react';

import '../Streaming.scss';

export const StreamerCard = ({streamer, oddEven}) => {
    
    return(
        <div className={`stream-card-wrapper ${oddEven}`}>
            <p className="name"> 
                {streamer?.data?.display_name}
            </p>
            <div className="pic-notes">
                <img src={streamer?.data?.profile_image_url} alt={`${streamer?.display_name} twitch profile`} className="streamer-image"/>
                <p>
                    {streamer?.data?.description}
                </p>
            </div>
            <p>
                {streamer?.myNotes}
            </p>
        </div>
    )
}