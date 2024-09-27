import React from 'react';
import bannerImage from './assests/images/Group 251@2x.png';

const BannerSection = () => {
    const bannerStyle = {
        background: `url('${bannerImage}')`, // Use the imported image with backticks for string interpolation
        backgroundSize: 'cover',               // Ensure the image covers the area
        backgroundPosition: 'center',          // Align the background image to the center
        height: '400px',                       // Set a height for the banner
        position: 'relative'                   // Make sure the banner wrapper works as intended
      };
    return (
        <div className="Image_banner page-width" style={bannerStyle}>
      <div className="banner_wrapper block-aligned--middle-center">
        <div className="banner_content_inner" style={{ textAlign: 'center' }}>
          <div className="banner_btn button1">
            <a className="btn1--secondary" href="#">
              <button className="secondary_btn">
                <span>Frozen Collection</span>
              </button>
            </a>
          </div>
          <div className="banner_head">
            Savory Snacks <br />
            For Every Occasion!
          </div>
          <div className="banner_subhead">
            From Japanese potato chips to shrimp chips to seaweed tempura, we carry all your favorite Asian savory staples.
          </div>
          <div className="banner_btn button2">
            <a className="btn2--primary" href="#">
              <button className="primary_btn">
                <span>SHOP NOW</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    );
};

export default BannerSection;