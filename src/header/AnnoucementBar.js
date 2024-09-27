import React from 'react';

const Announcement_Bar = ({ shippingMessage, contactLink, contactText }) => {
    return (
        <div className="announcement-bar">
            <div className="announce--1">
                <p className="announcement-bar__message h5">
                    <span>{shippingMessage}</span>
                </p>
            </div>
            <div className="announce--2">
                <a href={contactLink} className="announcement-bar__link">
                    <p className="announcement-bar__message h5">
                        <span>{contactText}</span>
                    </p>
                </a>
            </div>
        </div>
    );
};

export default Announcement_Bar;