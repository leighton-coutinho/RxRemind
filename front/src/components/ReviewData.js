import "./ReviewStyles.css";

function ReviewData (props) {
    return (
        <div className="r-card">
            <div className="r-image">
                <img alt="image" src={props.image}/>
            </div>
            <h4> {props.heading} </h4>
            <p> {props.text} </p>
        </div>
    );
}

export default ReviewData;