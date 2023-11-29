import ReviewData from "./ReviewData";
import "./ReviewStyles.css"

function Review() {
    return (
        <div className="review">
            <h1> Recent Reviews</h1>
            <p>Discover our recent Reviews</p>
            <div className="reviewcard">
            <ReviewData
                image="https://img.huffingtonpost.com/asset/5bb6678b250000360039a150.jpeg?ops=scalefit_720_noupscale"
                heading="Karl"
                text="This application has helped me remember to take my medication"
            />
            <ReviewData
                image="https://www.careworkshealthservices.com/wp-content/uploads/2017/01/170101_article2_addressing-older-adults-etiquette_iStock-154888506-1.jpg"
                heading="Margaret"
                text="It's very easy as my doctor is the one who does the complicated things, I just recieve the reminders"
            />
            <ReviewData
                image="https://betterhealthwhileaging.net/wp-content/uploads/2016/02/bigstock-Portrait-Of-Serious-Old-Hispan-46319356.jpg"
                heading="Winston"
                text="The reminders come on a regular basis and make sure I take each and every one of my medications so I can remain healthy!"
            />
            </div>
        </div>
    );
}

export default Review;