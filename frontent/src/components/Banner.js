// src/components/Banner.js

import React, { useState, useEffect } from 'react';
import './Banner.css';
import { IoIosPlayCircle } from "react-icons/io";


const banners = [
  {
    image: 'https://w0.peakpx.com/wallpaper/277/693/HD-wallpaper-the-batman-movie-art-design-poster.jpg',
    title: 'Batman',
    description: `The Batman (2022) is about a masked vigilante named Bruce Wayne, also known as Batman, who fights crime in Gotham City. In his second year of fighting crime, Batman investigates the Riddler, a serial killer who targets the city's wealthy, powerful, and corrupt citizens.`,
    buttonText: 'Watch trailer',
    buttonLink: 'https://www.youtube.com/watch?v=mqqft2x_Aa4' 
  },
  {
    image: 'https://www.digitaltrends.com/wp-content/uploads/2022/12/Miles-and-Gwen-in-Across-the-Spider-Verse.jpg?p=1',
    title: 'Spider-Man: Into The Spider Verse',
    description: `Spider-Man: Across the Spider-Verse, now zipping into the theater-verse, is the long-awaited follow-up to 2018's "Spider-Man: Into the Spider-Verse," a revelatory thrill ride that deservedly won the Oscar for animation.`,
    buttonText: 'Watch trailer',
    buttonLink: 'https://www.youtube.com/watch?v=tg52up16eq0' 
  },
  {
    image: 'https://images.squarespace-cdn.com/content/v1/5924f113d482e955e9cece39/1529984057756-GCIC3SPRS38QAZ1YEJMZ/Black+Panther+Banner.jpg',
    title: 'Black Panther',
    description: `Black Panther is a 2018 Marvel Studios film that follows T'Challa, the future king of Wakanda, as he returns home to the fictional African nation after his father's death to claim the throne`,
    buttonText: 'Watch trailer',
    buttonLink: 'https://www.youtube.com/watch?v=xjDjIWPwcPU' 
  },
  {
    image: 'https://c4.wallpaperflare.com/wallpaper/25/561/154/aquaman-2018-movie-wallpaper-preview.jpg',
    title: 'Aquaman',
    description: `Aquaman is a 2018 American superhero film based on the DC Comics character of the same name. The movie is about Arthur Curry (Jason Momoa), who is half-human and half-Atlantean and the rightful heir to the throne of Atlantis.`,
    buttonText: 'Watch trailer',
    buttonLink: 'https://youtube.com/watch?v=WDkg3h8PCVU' 
  },
  // Add more banners as needed
];

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 5000); // Switch banner every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <div className="banner-image-container">
        <img src={banners[currentBanner].image} alt={banners[currentBanner].title} />
      </div>
      <div className="banner-content">
        <h2>{banners[currentBanner].title}</h2>
        <p>{banners[currentBanner].description}</p>
        <a href={banners[currentBanner].buttonLink} target="_blank" rel="noopener noreferrer">
          <button className="trailer-button">
            <IoIosPlayCircle className="play-icon" />
          {banners[currentBanner].buttonText}
          </button>
        </a>
      </div>
      <div className="banner-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentBanner ? 'active' : ''}`}
            onClick={() => setCurrentBanner(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
