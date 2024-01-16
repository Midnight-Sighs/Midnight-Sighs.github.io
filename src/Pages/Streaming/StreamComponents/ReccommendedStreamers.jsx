import React, {useState, useEffect, useCallback } from 'react';
import { StreamerCard } from './StreamerCard';

export const RecommendedStreamers=()=>{

    const { REACT_APP_TWITCH_AUTH_CLIENT_ID, REACT_APP_TWITCH_AUTH_SECRET_ID } = process.env;
    let users=[
        // 47564682, //me, for test
        {
            id:519088584, //binky
            category:"Chaos",
            myNotes:"Bink is both a friend and an inspiration.  She was the first to throw Chaos Crew into a group together.  She is the perfect combination of thoughtful and sweet and the bringer of chaos.  ",
        },
        {
            id: 46712490, //frste
            category: "Chaos",
            myNotes:"Frste (I pronounce it like 'free-stay' but he isn't picky so long as it makes a little bit of sense and isn't offensive) is a wonderful friend, fellow JRPG lover, cat dad (to a beautiful Sphinx girl), and also has issues with attention like I do! He's a great friend, great supporter, and deserves ALL the love!"
        },
        {
            id: 262822038, //Meme
            category: "Chaos",
            myNotes: "This sexy babe is so sweet! Go show her some love!"
        },
        {
            id: 88356944, //Allie
            category: "Chaos",
            myNotes: "The last member of Chaos Crew, Allie can be found supporting many streams and killing many foes in multiplayer shooters like COD and Fortnite."
        },
        {
            id: 41462846, //Polymune
            category: "Frequent",
            myNotes: "Polymune likely barely knows I exist, as I mostly lurk, but she's an inspiration to me.  She's eccentric in a similar way to me and any time I get down on myself for being too over the top, I think of Poly and all the fun I have watching her and the fun the rest of her viewers have while hanging out there!"
        },
        {
            id: 247713660, //UnFunnyMan
            category: "Frequent",
            myNotes: "While not as chaotic or eccentric as my own streams, UnFunny has a chill coolness to him, even when it IS chaotic.  It's fun, it's chill, there's singing, and fun redeems - I always have a good time in UnFunny's stream."
        },
        {
            id: 154516696, //E&K
            category: "Frequent",
            myNotes: "I don't watch large channels, as a lot of them focus around games, memes, and tropes I don't care about, but I've watched Evan and Katelyn's YouTube channel for years, since they were smaller than they are now.  And unlike a lot of people who go big, at the core, they're still the couple I fell in love with watching.  While I mostly watch them on YouTube, I occasionally catch a livestream here and there as well!"
        }
    ]

    const [streamers, setStreamers] = useState(null);

    const getUsers = useCallback(async(auth)=>{
        let url=`https://api.twitch.tv/helix/users?id=47564682`
        users.forEach((user)=>url+=`&id=${user.id}`);
        let headers={
            'Client-Id': `${REACT_APP_TWITCH_AUTH_CLIENT_ID}`,
            'Authorization': `Bearer ${auth.access_token}`,
        }
        try{
            let response = await fetch (url, {headers});
            let data = await response.json()
            for(let i = 0; i < data.data.length; i ++){
                if(data.data[i].id !== 47564682){
                    let user = users.find(u=>u.id === +data.data[i].id)
                    if(user){
                        user.data=data.data[i]
                    }
                }
            }
            setStreamers(users);
        }catch(ex){
            console.error(ex)
        }
    //not includeding users because the users are hard coded and will always be here and we don't want a trigger if the data changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[REACT_APP_TWITCH_AUTH_CLIENT_ID]);

    const getAuth = useCallback(()=>{
        const url = `https://id.twitch.tv/oauth2/token?client_id=${REACT_APP_TWITCH_AUTH_CLIENT_ID}&client_secret=${REACT_APP_TWITCH_AUTH_SECRET_ID}&grant_type=client_credentials`
        fetch(url,{
            method: "POST",
        }).then((response)=>response.json())
        .then((data)=>{
            getUsers(data);
        })
    },[REACT_APP_TWITCH_AUTH_CLIENT_ID, REACT_APP_TWITCH_AUTH_SECRET_ID, getUsers]);

    //get twitch authorization
    useEffect(()=>{
        if(!streamers) getAuth();
    },[getAuth, streamers]);

    return(
        <div className="center-column" id="#recommendedStreamers">
            <p className="section-headers">
                Recommended Streamers
            </p>
            <div className="block-container">  
                {streamers &&
                    <div>
                        <span className="sub-category-header">
                            Chaos Crew
                        </span>
                        {streamers?.filter((streamer)=>streamer.category==="Chaos").map((streamer, index)=>(
                            <StreamerCard streamer={streamer} key={index} oddEven={index%2 === 0 ? "odd" : "even"}/>
                        ))}
                        <span className="sub-category-header">
                            Frequently Viewed
                        </span>
                        {streamers?.filter((streamer)=>streamer.category==="Frequent").map((streamer, index)=>(
                            <StreamerCard streamer={streamer} key={index} oddEven={index%2 === 0 ? "odd" : "even"}/>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default RecommendedStreamers;