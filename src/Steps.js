export default function Steps({ stepImage, stepText, hl }) {
    return (
        <>
            <div className="step_img_cont">
                <img src={stepImage} alt="Icon" className="step_image" />
                <div className={hl}>{stepText}</div>
            </div>
        </>
    );
}
