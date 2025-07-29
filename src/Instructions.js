import Steps from "./Steps";
export default function Instructions() {
    return (
        <div className="container" id="instructions">
            <div>
                <h3>How it works:</h3>
                <div className="instructions_grp">
                    <Steps
                        stepImage="./img/history.svg"
                        stepText="Fill out the form below to get in contact with TTHL."
                        hl="h4"
                    />
                    <Steps
                        stepImage="./img/contacts.svg"
                        stepText="On this page you will see three random words. These words change every week."
                        hl="h4"
                    />
                    <Steps
                        stepImage="./img/butterfly.svg"
                        stepText={
                            <>
                                Fill in <em>next week's words</em> on the form
                                to verify your status as a time traveler.
                            </>
                        }
                        hl="h4"
                    />
                    <Steps
                        stepImage="./img/butterfly.svg"
                        stepText="If you answer correctly, a representative of the TTHL will be in contact with you within 48 hours."
                        hl="h4"
                    />
                </div>

                <div className="divider"></div>
            </div>
        </div>
    );
}
