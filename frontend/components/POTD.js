import React from "react";
import '../styles/POTD.css';

export default function POTD({ info, photoInfo, date, apodData }) {

    return (
        <div className="img-container" >
            {apodData && (
                <div className="img-container" >
                    <h2 style={{ color: 'black' }} >Title: {apodData.title}</h2>
                    <p>Chosen date: {date}</p>
                    {apodData.media_type === 'video' ? (
                        <video width='100%' controls>
                            <source src={apodData.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img src={apodData.hdurl} className="img" alt={apodData.title} />
                    )}
                </div>
            )}
            {photoInfo && (
                <div className="info-div">
                    <p>Photo explanation:</p>
                    <p className="text">{apodData.explanation}</p>
                </div>
            )}
        </div>
    )
}