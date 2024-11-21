import React, { useState, useEffect } from "react";
import '../styles/POTD.css';
import styled, { keyframes, css } from "styled-components";

const kf = keyframes`
0% {
    opacity: 0;
    transform: scale(2) rotateZ(180deg);
}
100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
    }
`;

const StyledCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0px;
    padding: 0;
    background-color: ${pr => pr.theme.primaryPink};
    .img {
    max-width: 800px;
    height: auto;
    margin: 0;
    display: block;
    border: 3px solid ${pr => pr.theme.primaryGreen};
    margin-bottom: 10px;
    padding: 10px;
    background-color: ${pr => pr.theme.secondaryPink};
    }
    .text {
        padding-left: 100px;
    padding-right: 100px;
    padding-top: 10px;
    padding-bottom: 10px;
    }
    .info-div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border: 3px solid ${pr => pr.theme.primaryGreen};
    background-color: ${pr => pr.theme.secondaryPink};
    max-width: 800px;
    margin-top: 60px;
    opacity: 0;
    transform: scale(2) rotateZ(180deg);
    animation: ${kf} 0.5s ease-in-out forwards;
    }
    .media-container {
        display: flex;
        align-items: flex-start;
    }
    .media-info {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        color: black;
    }
    }
`;

const Flipped = styled.img`
    opacity: 1;
    transform: opacity 0.5s ease-in-out;
    animation: ${props => props.animate === 'true' ? css`${kf} 0.5s ease-in-out forwards` : 'none'};
`;

export default function POTD({ photoInfo, date, apodData }) {
    const [animate, setAnimate] = useState(false);
    const [prevDate, setPrevDate] = useState(date);

    useEffect(() => {
        if (date !== prevDate) {
            setAnimate(true);
            const timer = setTimeout(() => {
                setAnimate(false);
            }, 500);
            setPrevDate(date)
            return () => clearTimeout(timer);
        }
    }, [date])

    return (
        <StyledCont className="img-container">
            {apodData && (
                <div className="media-container">
                    <div className="media-info">
                        <h2>Title: {apodData.title}</h2>
                        <p>Chosen Date: {date}</p>
                        {apodData.media_type === 'video' ? (
                            <video width='100%' controls>
                                <source src={apodData.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <Flipped 
                            src={apodData.hdurl}
                            className="img"
                            alt={apodData.title}
                            animate={animate ? 'true' : undefined}
                            />
                        )}
                    </div>
                    
                    {photoInfo && (
                        <div className="info-div">
                            <p>Photo explanation:</p>
                            <p className="text">{apodData.explanation}</p>
                        </div>
                    )}
                </div>
            )}
        </StyledCont>
    );
}