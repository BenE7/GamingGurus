import React from 'react'
import Rating from 'react-rating-system';
import "./GuruRating.css";

class GuruRating extends React.Component {
    render() {
        return (
            <Rating 
                image={process.env.PUBLIC_URL + "/assets/images/mario-rating3.png"} initialBG="#000000" initialValue={3.6} fillBG="#d20014" containerStyle={{maxWidth: '200px', maxHeight: "50px"}}
            />
        );
    }
}
 
export default GuruRating;