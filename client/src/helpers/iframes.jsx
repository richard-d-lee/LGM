
import React, { useState } from 'react';
let allDescriptions = ["borderlands description", "borderlands description", "borderlands description", "borderlands description", "borderlands description", "borderlands description", "borderlands description", "borderlands description", "borderlands description", "borderlands description", "borderlands description", "borderlands description", ]

let createVideos = () => {
    return (
        <div className="all-videos">
            <div className="flex-video crispy">
                <div className="flex-description">
                     <h1 className="video-title">Borderlands</h1>
                     <p id="description-text">{allDescriptions[0]}</p> 
                     <button id="comment-button">Comment</button>              
                </div>
                <iframe width="560" className="video" height="315" src="https://www.youtube.com/embed/HpSZAKJ294M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div className="flex-video crispy">
                <div className="flex-description">
                     <h1 className="video-title">Joker</h1>
                     <p id="description-text">{allDescriptions[0]}</p> 
                     <button id="comment-button">Comment</button>  
                </div>
                <iframe width="560" className="video" height="315" src="https://www.youtube.com/embed/ktQ6889MSeU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div className="flex-video crispy">
                <div className="flex-description">
                     <h1 className="video-title">Ready Player One</h1>
                     <p id="description-text">{allDescriptions[0]}</p> 
                     <button id="comment-button">Comment</button>  
                </div>
                <iframe width="560" className="video" height="315" src="https://www.youtube.com/embed/VSLcoFXYz4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div className="flex-video crispy">
                <div className="flex-description">
                     <h1 className="video-title">Resident Evil 4</h1>
                     <p id="description-text">{allDescriptions[0]}</p> 
                     <button id="comment-button">Comment</button>  
                </div>
                <iframe width="560" className="video" height="315" src="https://www.youtube.com/embed/Mzt0MVBdI0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div className="flex-video crispy">
                <div className="flex-description">
                     <h1 className="video-title">Battlefront 2</h1>
                     <p id="description-text">{allDescriptions[0]}</p> 
                     <button id="comment-button">Comment</button>  
                </div>
                <iframe width="560" className="video" height="315" src="https://www.youtube.com/embed/SOE4SIGETJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div className="flex-video crispy">
                <div className="flex-description">
                     <h1 className="video-title">Captain Fantastic</h1>
                     <p id="description-text">{allDescriptions[0]}</p> 
                     <button id="comment-button">Comment</button>  
                </div>
                <iframe width="560" className="video" height="315" src="https://www.youtube.com/embed/v93G5ltRVl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div className="flex-video crispy">
                <div className="flex-description">
                     <h1 className="video-title">Strixhaven</h1>
                     <p id="description-text">{allDescriptions[0]}</p> 
                     <button id="comment-button">Comment</button>  
                </div>
                <iframe width="560" className="video" height="315" src="https://www.youtube.com/embed/hxZa1l6eeLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div className="flex-video crispy">
                <div className="flex-description">
                     <h1 className="video-title">Tekken</h1>
                     <p id="description-text">{allDescriptions[0]}</p> 
                     <button id="comment-button">Comment</button>  
                </div>
                <iframe width="560" className="video" height="315" src="https://www.youtube.com/embed/T8q9O4Jy6YM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div className="flex-video crispy">
                <div className="flex-description">
                     <h1 className="video-title">Time Spiral</h1>
                     <p id="description-text">{allDescriptions[0]}</p> 
                     <button id="comment-button">Comment</button>  
                </div>
                <iframe width="560" className="video" height="315" src="https://www.youtube.com/embed/_-5um1eMyZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div className="flex-video crispy">
                <div className="flex-description">
                     <h1 className="video-title">Spiderman</h1>
                     <p id="description-text">{allDescriptions[0]}</p> 
                     <button id="comment-button">Comment</button>  
                </div>
                <iframe width="560" className="video" height="315" src="https://www.youtube.com/embed/Cei2sYT7SNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div className="flex-video crispy">
                <div className="flex-description">
                     <h1 className="video-title">Mario Kart 8</h1>
                     <p id="description-text">{allDescriptions[0]}</p> 
                     <button id="comment-button">Comment</button>  
                </div>
                <iframe width="560" className="video" height="315" src="https://www.youtube.com/embed/GgObrn4zVz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div className="flex-video crispy">
                <div className="flex-description">
                     <h1 className="video-title">Donkey Kong 64</h1>
                     <p id="description-text">{allDescriptions[0]}</p> 
                     <button id="comment-button">Comment</button>  
                </div>
                <iframe width="560" className="video" height="315" src="https://www.youtube.com/embed/Jy2mwnzzNkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}
export default createVideos;