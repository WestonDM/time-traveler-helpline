export default function Contact() {
    return (
        <div className="contact container">
            <div>
                <h2>Contact TTHL</h2>
                <div id="contact" className="contact_form">
                    <form
                        name="contact"
                        data-netlify="true"
                        method="POST"
                        action="/thank-you"
                        netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p hidden>
                            <label>
                                Don’t fill this out: <input name="bot-field" />
                            </label>
                        </p>
                        <div className="form_row form-50">
                            <div className="form_item ">
                                <label htmlFor="lastname">
                                    First Name:
                                    <span className="req-icon">*</span>
                                    <br />
                                </label>
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    required
                                />
                            </div>
                            <div className="form_item">
                                <label htmlFor="lastname">
                                    Last Name:
                                    <span className="req-icon">*</span>
                                    <br />
                                </label>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form_row form-50">
                            <div className="form_item">
                                <label htmlFor="email">
                                    Email:<span className="req-icon">*</span>
                                    <br />
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="form_item">
                                <label htmlFor="phone">
                                    Phone:
                                    <br />
                                </label>
                                <input type="tel" id="phone" name="phone" />
                            </div>
                        </div>
                        <div className="form_row form-33">
                            <div className="form_item">
                                <label htmlFor="word-01">
                                    Next Week's Random Word 1:
                                    <span className="req-icon">*</span>
                                    <br />
                                </label>
                                <input
                                    type="text"
                                    id="word-01"
                                    name="word-01"
                                    required
                                />
                            </div>
                            <div className="form_item">
                                <label htmlFor="word-02">
                                    Next Week's Random Word 2:
                                    <span className="req-icon">*</span>
                                    <br />
                                </label>
                                <input
                                    type="text"
                                    id="word-02"
                                    name="word-02"
                                    required
                                />
                            </div>
                            <div className="form_item">
                                <label htmlFor="word-03">
                                    Next Week's Random Word 3:
                                    <span className="req-icon">*</span>
                                    <br />
                                </label>
                                <input
                                    type="text"
                                    id="word-03"
                                    name="word-03"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form_row form-100">
                            <div className="form_item">
                                <label htmlFor="message">
                                    How can TTHL help you? (optional):
                                </label>
                                <br />
                                <textarea
                                    id="message"
                                    name="message"
                                ></textarea>
                            </div>
                        </div>
                        <div className="form_row form-100">
                            <div className="form_item">
                                <input
                                    type="submit"
                                    id="submit"
                                    name="submit"
                                    value="SUBMIT"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
