import CurrentDate from "./CurrentDate";
import CurrentTime from "./CurrentTime";

export default function Header() {
    return (
        <header className="container">
            <div className="header">
                <CurrentDate />
                <CurrentTime />
                <h1>
                    <span className="h3">Welcome to</span>
                    <br />
                    <span className="h1">THE TIME TRAVELER’S HELPLINE</span>
                </h1>
                <h4>
                    The premiere online resource for the waylaid temporal
                    wayfarer.
                </h4>
                <p>
                    While time travel has not been invented yet, the need for
                    guidance for future travelers is clear. That’s where we come
                    in. By identifying yourself as a genuine time traveler, you
                    will be granted access to exclusive resources to help you
                    navigate this era. A personal temporal consultant will be
                    assigned to you to help ease your way through this
                    particular moment in time.
                </p>
            </div>
        </header>
    );
}
