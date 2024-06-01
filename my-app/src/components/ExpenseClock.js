import './ExpenseClock.css';

import React, { useState, useEffect } from "react";

const ExpenseClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (value) => {
        return value.toString().padStart(2, '0');
    };
    const hours = formatTime(currentTime.getHours());
    const minutes = formatTime(currentTime.getMinutes());
    const seconds = formatTime(currentTime.getSeconds());
    return (
        <div className="digital-clock">
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
        </div>
    );
};
export default ExpenseClock;