import { useState, useEffect } from "react";

export default function CurrentTime() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(timer);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    }); // e.g., "3:01:00 PM"

    return (
        <div className="date_display">
            <h4>{formattedTime}</h4>
        </div>
    );
}
