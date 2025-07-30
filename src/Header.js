import CurrentDate from "./CurrentDate";
import CurrentTime from "./CurrentTime";

export default function Header() {
    return (
        <header className="content">
            <div className="header">
                <CurrentDate />
                <CurrentTime />
                <div id="main-hl">
                    <h1>
                        <span className="h3">Welcome to</span>
                        <br />
                        <span className="h1">THE TIME TRAVELER’S HELPLINE</span>
                    </h1>
                    <h3>
                        The premiere online resource for the waylaid temporal
                        wayfarer.
                    </h3>
                </div>
                <div id="about">
                    <p>
                        <span className="h5">
                            Time travel might not be a thing (yet), but for the
                            seasoned temporal sojourner, <em>“yet”</em> is for
                            suckers.
                        </span>
                    </p>
                    <p>
                        That said, it's not for the faint of heart. Navigating
                        the complexities of time travel requires a certain level
                        of expertise and experience. That’s where we come in. By
                        identifying yourself as a genuine, verified,
                        authenticated time traveler, you will be granted access
                        to exclusive resources to help you navigate this era.
                        You'll be paired with your very own temporal
                        consultant—a savvy guide to help you navigate the
                        quirks, customs, and potential paradoxes of the current
                        timeline.
                    </p>
                </div>
            </div>
        </header>
    );
}
