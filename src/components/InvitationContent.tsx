import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import HeroImage from '../Images/Hero section.png';
import StoryImage from '../Images/our story.png';
import FamiliesImage from '../Images/our Families.png';
import CountdownImage from '../Images/Countdown.png';
import RSVPImage from '../Images/RSVP and Venue.png';
import ThankYouImage from '../Images/Thank you.png';

export default function InvitationContent() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Engagement Date: 17 May 2026, 6:00 PM
    const targetDate = new Date('2026-05-17T18:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full min-h-full bg-white relative flex flex-col"
    >
        <img src={HeroImage} alt="Hero Section" className="w-full h-auto block relative z-[6]" />
        <img src={StoryImage} alt="Our Story" className="w-full h-auto block -mt-[1px] relative z-[5]" />
        <img src={FamiliesImage} alt="Our Families" className="w-full h-auto block -mt-[1px] relative z-[4]" />
        
        {/* Countdown Section */}
        <div className="relative w-full -mt-[1px] z-[3] countdown-wrapper">
            <img src={CountdownImage} alt="Countdown" className="w-full h-auto block" />
            
            {/* Countdown Overlay - Adjust top and left/right percentages to align perfectly with the image's 2x2 grid */}
            <div id="countdown-overlay" className="absolute inset-0 w-full h-full text-amber-900 font-serif font-bold text-4xl">
                {/* Days */}
                <div className="absolute top-[45%] left-[33%] -translate-x-1/2 -translate-y-1/2 text-center w-16">
                    {timeLeft.days}
                </div>
                {/* Hours */}
                <div className="absolute top-[45%] right-[33%] translate-x-1/2 -translate-y-1/2 text-center w-16">
                    {timeLeft.hours}
                </div>
                {/* Minutes */}
                <div className="absolute top-[71%] left-[33%] -translate-x-1/2 -translate-y-1/2 text-center w-16">
                    {timeLeft.minutes}
                </div>
                {/* Seconds */}
                <div className="absolute top-[71%] right-[33%] translate-x-1/2 -translate-y-1/2 text-center w-16">
                    {timeLeft.seconds}
                </div>
            </div>
        </div>

        {/* RSVP Section with Map Link Overlay */}
        <div className="relative w-full -mt-[1px] z-[2]">
            <img src={RSVPImage} alt="RSVP and Venue" className="w-full h-auto block" />
            
            {/* View on Map invisible button overlay - adjust top, left, width, and height to match the button in the image */}
            <a 
                href="https://maps.app.goo.gl/AuAkzg8FTXVvoKw5A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-[88.4%] left-1/2 -translate-x-1/2 w-[48%] h-[5.8%] cursor-pointer rounded-full"
                aria-label="View on map"
                title="View on Map"
            >
                <span className="sr-only">View on map</span>
            </a>
        </div>
        <img src={ThankYouImage} alt="Thank You" className="w-full h-auto block -mt-[1px] relative z-[1]" />
    </motion.div>
  );
}
