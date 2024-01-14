import React from 'react';
import '../Streaming.scss';

export const Commands=()=>{
    return(
        <div className="commands-wrapper center-column" id="#commands">
            <p className="section-headers">
                Chat Commands (and Redeem Explanations)
            </p>
            <div className="block-container">
                <p>
                    I like to try to keep everything fun and interactive! I absolutely love my lurkers too, but I love giving things to people who want them! So I have lots of toys, some I've made myself with Streamer.bot, some that are actions for me to employ, and others I've added through third parties.  
                </p>
                <div className="columns">
                    <div className="chat-commands">
                        <p>
                            Chat Commands:
                        </p>
                        <ul>
                            <li>
                                !cat
                                <br />
                                <span>
                                    This counts how many times a cat has been seen on the main camera
                                </span>
                            </li>
                            <li>
                                !cat *catName*
                                <br/>
                                <span>
                                    Followed by one of the names of the cats (Black, Luna, Oliver, Remy, or Trixie), will provide information about the cat
                                </span>
                            </li>
                            <li>
                                !scare
                                <br />
                                <span>
                                    Tracks how many times Midnight has been scared on stream
                                </span>
                            </li>
                            <li>
                                !scare *userName*
                                <br />
                                <span>
                                    Can track how many times ANY user has been scared on stream.  No @ sign required, just their user name
                                </span>
                            </li>
                            <li>
                                !date
                                <br />
                                <span>
                                    Displays the current date and time for Midnight.
                                </span>
                            </li>
                            <li>
                                !quote add *text here*
                                <br />
                                <span>
                                    Adds a quote.  It will automatically include the game and who wrote it, but we appreciate it when you also say who said it, because it could be something in chat!
                                </span>
                            </li>
                            <li>
                                !quote
                                <br />
                                <span>
                                    Fetches a random quote from the list of quotes
                                </span>
                            </li>
                            <li>
                                !quote *number*
                                <br />
                                <span>
                                    Fetches a specific quote based on the number provided
                                </span>
                            </li>
                            <li>
                                !snack
                                <br />
                                <span>
                                    Gives you a random snack!
                                </span>
                            </li>
                            <li>
                                !hug
                                <br />
                                <span>
                                    Hugs Midnight
                                </span>
                            </li>
                            <li>
                                !hug *userName*
                                <br />
                                <span>
                                    Hugs the user of your choice! No @ required, just the username
                                </span>
                            </li>
                            <li>
                                !UwU
                                <br />
                                <span>
                                    To track how many times Midnight has been forced to UwU
                                </span>
                            </li>
                            <li>
                                !UwU *userName*
                                <br />
                                <span>
                                    To track how many times guests have been forcibly made to UwU as well.
                                </span>
                            </li>
                            <li>
                                !lurk
                                <br />
                                <span>
                                    If you're busy, but you want to be present to support or listen in the background, you can let us know with the lurk command!
                                </span>
                            </li>
                            <li>
                                !discord
                                <br />
                                <span>
                                    Shows the discord invite for everyone!
                                </span>
                            </li>
                            <li>
                                !whoIs *name*
                                <br />
                                <span>
                                    Followed by a name of someone else I have on my stream or talk about, you can get some more information about them (i.e "!whoIs Royal")
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="redeem-commands">
                        <p>Following is a list of the commands that can be redeemed!</p>
                        <ul>
                            <li>
                                Hi! I'm New! (2 Chaos Coins)
                                <br />
                                <span>
                                    It's a good way to say hello, if you're shy! It lets us focus on you for a minute if you don't quite know what to say or how to introduce yourself! It also gives you an icebreaker question.
                                </span>
                            </li>
                            <li>
                                Get a Random Question (100 Chaos Coins)
                                <br />
                                <span>
                                    A random question for me, you, and anyone in chat to answer! Just because.  
                                </span>
                            </li>
                            <li>
                                Hydrate (100 Chaos Coins)
                                <br />
                                <span>
                                    I will take a drink of something (usually coffee), but sometimes water with LOTS of prompting.
                                </span>
                            </li>
                            <li>
                                Highlight My Message (100 Chaos Coins)
                                <br />
                                <span>
                                    Twitch integrated redeem, it highlights your message in a color that makes it stand out among the rest!
                                </span>
                            </li>
                            <li>
                                Streeeeeetch (250 Chaos Coins)
                                <br />
                                <span>
                                    I forget to stretch, sometimes! This is a good reminder.  I encourage everyone to stretch with me!
                                </span>
                            </li>
                            <li>
                                Unlock a Random Sub Emote
                                <br/>
                                <span>
                                    If you aren't subscribed, it will give you a random sub emote!
                                </span>
                            </li>
                            <li>
                                Send a Message in Sub-Only Mode (350 Chaos Coins)
                                <br />
                                <span>
                                    In the event sub only mode is activated, it allows you to bypass it and still send a message!
                                </span>
                            </li>
                            <li>
                                Make me do 5 Reps of an Exercise (450 Chaos Coins)
                                <br />
                                <span>
                                    I do have the power to veto based on space or current injury, but I'll do my best to do whatever it is you want! Can be kicks, punches, squats...whatever you can think of!
                                </span>
                            </li>
                            <li>
                                Choose an Emote to Unlock (480 Chaos Coins)
                                <br />
                                <span>
                                    Like the sub emote, except you get to choose!
                                </span>
                            </li>
                            <li>
                                UwU (500 Chaos Coins)
                                <br />
                                <span>
                                    I have to UwU for you.  On request, Torp sometimes will as well.  Anyone who is a guest on stream also has to UwU.  
                                </span>
                            </li>
                            <li>
                                Emote-Only Chat (700 Chaos Coins)
                                <br />
                                <span>
                                    We lock the chat and let emote chaos reign!! 
                                </span>
                            </li>
                            <li>
                                Rimworld: Become a Colonist (750 Chaos Coins)
                                <br />
                                <span>
                                    Only while playing Rimworld, you get to become a colonist in our colony! 
                                </span>
                            </li>
                            <li>
                                Make me do 10 Reps of an Exercise (800 Chaos Coins)
                                <br />
                                <span>
                                    Like the 5 exercises, but TEN!
                                </span>
                            </li>
                            <li>
                                Modify a Single Emote (900 Chaos Coins)
                                <br />
                                <span>
                                    It's a Twitch built in redeem, and it allows you simple modification of an emote, like adding sunglasses to one.  
                                </span>
                            </li>
                            <li>
                                Give Kitties Treat (1000 Chaos Coins)
                                <br />
                                <span>
                                    I'll toss a few treats to the kitties - helpful for luring them to the cat cam when they aren't cooperating
                                </span>
                            </li>
                            <li>
                                Rimworld: Hands off 1 min 1x Speed (1000 Chaos Coins)
                                <br />
                                <span>
                                    Like it sounds, I will set a timer for one minute and not interact with the game on 1x speed.  (I will move the camera around and such to watch, though!)
                                </span>
                            </li>
                            <li>
                                Give a Shoutout (1000 Chaos Coins)
                                <br />
                                <span>
                                    I'll shoutout whoever you want, even yourself!
                                </span>
                            </li>
                            <li>
                                Battle me in PCG (2000 Chaos Coins)
                                <br />
                                <span>
                                    You have to have PCG and a team of pokemon, but I'll battle you! I never know what I'm doing and frequently battle with my favorites, not my bests.  
                                </span>
                            </li>
                            <li>
                                Rimworld: Hands off 2 mins, 2x Speed (2000 Chaos Coins)
                                <br />
                                <span>
                                    I will set a timer for two minutes and not interact with the game on 2x speed.  (I will move the camera around and such to watch, though!)
                                </span>
                            </li>
                            <li>
                                Guide the Raid (3000 Chaos Coins)
                                <br />
                                <span>
                                    You get to pick where we raid to, unless in the occasional event I have someone in mind for something like their birthday stream or something.
                                </span>
                            </li>
                            <li>
                                Rimworld: Hands off 3 mins, 3x Speed (3000 Chaos Coins)
                                <br />
                                <span>
                                    I will set a timer for three minutes and not interact with the game on 3x speed.  (I will move the camera around and such to watch, though!)
                                </span>
                            </li>
                            <li>
                                Lose the Glasses (5000 Chaos Coins)
                                <br />
                                <span>
                                    If you redeem this, you're mean.  I'm VERY near-sighted and need to have my face VERY close to the screen to see.  If this is redeemed, I cannot see chat for the whole 5 minutes.  Let chaos reign...
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}