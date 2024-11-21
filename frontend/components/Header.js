import React from "react";
import '../styles/header.css';
import styled from "styled-components";

const StyledHeader = styled.header`
    border: 3px solid ${pr => pr.theme.primaryGreen};
    position: relative;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    background-color: ${pr => pr.theme.primaryPink};
    margin: 0;
    h1 {
    position: relative;
    font-size: 2em;
    margin: 0;
    color: black;
    padding: 0;
    }
    &::after {
    content: '';
    display: block;
    height: 4px;
    background-color: ${pr => pr.theme.primaryGreen};
    width: 0;
    transition: width 0.5s ease;
    position: absolute;
    bottom: 0;
    left: 0;
    }
    &:hover::after {
    width: 100%;
    }
    input {
    margin-left: 10px;
    margin-right: 10px;
    background-color: ${pr => pr.theme.secondaryPink};
    border: 2px solid ${pr => pr.theme.primaryGreen};
    }
    .flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    .date-container {
    display: flex;
    align-items: center;
    }
    .container {
    margin-right: 60px;
    }
    .box {
    padding: 10px;
    background-color: ${pr => pr.theme.secondaryPink};
    border: 2px solid ${pr => pr.theme.primaryGreen};
    }
    button {
    background-color: ${pr => pr.theme.secondaryPink};
    border: 2px solid ${pr => pr.theme.primaryGreen};
    width: 100px;
    height: 31px;
    }
`;

export default function Header({ infoHandle, changeDate, inputValue, setInputValue, info }) {

    return (
        <StyledHeader className="header" >
            <h1 >Nasa photo of the day!</h1>
            <p>Todays date: {info.date}</p>
            <div className="flex-container" >
            <div className="container">
            <p className="box" onClick={infoHandle} style={{ cursor: 'pointer' }} >Photo Info</p>
            </div>
            <div className="date-container" >
                <p>Choose date</p>
                <input type='date'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={changeDate} style={{ cursor: 'pointer' }}>Submit</button>
            </div>
            </div>
            <div className="full-border" ></div>
        </StyledHeader>
    )
}