import React from "react";
import '../styles/footer.css';
import styled from "styled-components";

const StyledFooter = styled.footer`
    border: 3px solid ${pr => pr.theme.primaryGreen};
    position: relative;
    text-align: center;
    overflow: hidden;
    width: 100vw;
    height: 500px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    padding: 0;
    background-color: ${pr => pr.theme.primaryPink};
    .last-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    margin: 0;
    padding: 0;
    }
    h1 {
    position: relative;
    font-size: 2em;
    margin: 0;
    color: black;
    margin-bottom: 10px;
    }
    .footer-img {
    width: 350px;
    height: auto;
    margin: 0 10px;
    margin-bottom: 10px;
    }
    .ft-img {
    border: 3px solid ${pr => pr.theme.primaryGreen};
    margin-left: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${pr => pr.theme.secondaryPink};
    height: 400px;
    }
`;

export default function Footer({ lastThree, info }) {
return (
    <StyledFooter className="footer">
        <div >
            <h1>Last Three Days Photo of the Day</h1>
            <p style={{ paddingBottom: '20px' }}>Todays Date: {info.date}</p>
            <div className="last-container">
            {
                lastThree.map(url => (
                    <div key={url.date} className="ft-img" >
                        <p>Title: {url.title}</p>
                        <p>Date: {url.date}</p>
                        <img src={url.hdurl} className="footer-img" />
                    </div>
                ))
            }
            </div>
        </div>
    </StyledFooter>
)

}