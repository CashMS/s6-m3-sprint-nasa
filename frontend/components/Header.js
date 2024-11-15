import React, { useState, useEffect } from "react";
import '../styles/header.css';

export default function Header({ infoHandle, changeDate, inputValue, setInputValue, info }) {

    return (
        <header className="header" >
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
                <button onClick={changeDate} >Submit</button>
            </div>
            </div>
            <div className="full-border" ></div>
        </header>
    )
}