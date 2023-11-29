import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

function Destination() {
    return (
        <>
            <div className="destination">
                <h1>How it works?</h1>
                <p>Step by Step guide on setting up RxRemind for all your beloved patients:</p>

                <DestinationData
                    className="first-des"
                    heading="Submitting Details"
                    text="As a healthcare professional, accessing the power of RxRemind begins with logging in to your dedicated account. 
                    Once logged in, navigate to the form section within the application. Here, you can easily input essential patient information. 
                    Be thorough and accurate in specifying the medication dosages, frequencies, and any other relevant instructions for each prescription."
                    img1="https://images.pexels.com/photos/4989171/pexels-photo-4989171.jpeg?cs=srgb&dl=pexels-ivan-samkov-4989171.jpg&fm=jpg"
                    img2="https://imageio.forbes.com/specials-images/imageserve/557848426/0x0.jpg?format=jpg&width=1200"
                /> 
                <DestinationData
                    className="first-des-reverse"
                    heading="Post-submission"
                    text="After the details are submitted on RxRemind. that's it!
                    Your patient will now begin receiving text message reminders to take their medication and remain healthy.
                    Each reminder will include crucial details, such as the name of the medication, dosage, and specific instructions, empowering you to stay on track with your prescribed treatments.
                    With RxRemind as your reliable companion, you can confidently embrace a healthier future, one dose at a time.."
                    img1="https://media.istockphoto.com/id/1257737529/vector/push-notice-notification-message-on-mobile-phone-person-smartphone-cellphone-sms-speech.jpg?s=612x612&w=0&k=20&c=g-JKDwiCP4mzwQjlgJr1C8fGijVADjQeskzQwxxWmKY="
                    img2="https://www.alert-software.com/hubfs/mobile%20notification-2.png"
                /> 
            </div>
        </>
    );
}

export default Destination;