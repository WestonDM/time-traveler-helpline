export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="main">
            <div className="content">
                <div className="footer_content">
                    <div className="footer_inner">
                        <h4>The Time Traveler’s Helpline</h4>
                        <h5>
                            <em>“Tempus Viatorum Unitum”</em>
                        </h5>
                        <h5>Serving Temporal Voyagers Since 2023</h5>
                        <h5>
                            &copy;{currentYear} The Time Traveler’s Helpline
                        </h5>
                    </div>
                </div>
            </div>
        </footer>
    );
}
