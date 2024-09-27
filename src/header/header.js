import React from 'react';
import Announcement_Bar from './AnnoucementBar';
import NavBar from './HeaderNavbar';

const Header = () => {
    const shippingMessage = "Free shipping on order $59+";
    const contactLink = "/pages/contact";
    const contactText = "Contact Us";

    return (
        <>
            <Announcement_Bar 
                shippingMessage={shippingMessage} 
                contactLink={contactLink} 
                contactText={contactText} 
            />
            <NavBar />
        </>
    );
};

export default Header;
