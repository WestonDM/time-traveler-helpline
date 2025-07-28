export default function CurrentTime() {
    const today = new Date();
    const formattedTime = today.toLocaleTimeString(); // e.g., "3:01:00 PM"
    return (
        <div className="date_display">
            <h4>{formattedTime}</h4>
        </div>
    );
}
