import React from "react";
import '../styles/footer.css';

export default function Footer({ lastThree, info }) {
return (
    <footer className="footer">
        <div >
            <h1>Last Three Days Photo of the Day</h1>
            <p style={{ paddingBottom: '20px' }}>Todays Date: {info.date}</p>
            <div className="last-container">
            {
                lastThree.map(url => (
                    <div key={url.date} >
                        <p>{url.title}</p>
                        <img src={url.hdurl} className="footer-img" />
                        <p>Date: {url.date}</p>
                    </div>
                ))
            }
            </div>
        </div>
    </footer>
)

}