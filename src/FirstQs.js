import Steps from "./Steps";
export default function FirstQs() {
    return (
        <div className="container" id="firstQs">
            <>
                <Steps
                    stepImage="./img/history.svg"
                    stepText="Are you trapped in this era with no way back?"
                    hl="h3"
                />{" "}
                <Steps
                    stepImage="./img/contacts.svg"
                    stepText="Do you need historical guidance navigating this epoch?"
                    hl="h3"
                />{" "}
                <Steps
                    stepImage="./img/butterfly.svg"
                    stepText="Did you step on the proverbial butterfly?"
                    hl="h3"
                />
            </>
            <h2 className="h1 firstQ_header">We are here for you!</h2>
            <div className="divider"></div>
        </div>
    );
}
