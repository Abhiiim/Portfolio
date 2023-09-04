import React, { useEffect, useState } from 'react';

function AnimatedBox({ targetWidth }) {
    const [width, setWidth] = useState('0%');

    console.log(targetWidth);
    useEffect(() => {
        // Delay the animation for a smoother effect
        const delay = setTimeout(() => {
            setWidth(targetWidth);
        }, 300);

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(delay);
    }, [targetWidth]);

    return (
        <div className="animated-box">
            <div className="animated-box-inner" style={{ width }}></div>
        </div>
    );
}

export default AnimatedBox;

