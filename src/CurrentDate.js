export default function CurrentDate() {
    const today = new Date();

    const longDateTime = today.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }); // e.g., "Monday, July 28, 2025 at 3:01 PM"
    return (
        <div className="date_display">
            <h3>{longDateTime}</h3>
        </div>
    );
}
