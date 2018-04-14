import React from 'react';
import Rating from 'react-rating-system';
import "./GuruRating.css";

// class GuruRating extends React.Component {
      
   
//     render() {
      
// }
 
// export default GuruRating;



const GuruRating =(props) => {
    let totalRatings = props.userinfo.ratings[0].totalRatings
    let currentRating = props.userinfo.ratings[0].rating
    console.log('total ratings', totalRatings , 'current rate' , currentRating)
    let trueEval = false;
       console.log('props inside rating' , props.userinfo.ratings[0])
       console.log( 'all props' , props)
        return (
            <Rating 
              
                image={process.env.PUBLIC_URL + "/assets/images/mario-rating3.png"} 
                userinfo={props.userinfo}
                initialBG="#000000" 
                initialValue={props.userinfo.ratings[0].rating} 
                fillBG="#d20014" 
                containerStyle={{maxWidth: '200px', maxHeight: "50px"}}
                callback={(index) =>   ( props.userinfo.ratings[0]) ? props.updateRating(currentRating , totalRatings , index) : props.createRating(index)   }
                    //console.log(Math.floor(((currentRating * totalRatings) + index)  / (totalRatings + 1) * 100 ) / 100)  }
                editable={true}
                lockRating={true}
            />
        );
    }

   
    export default GuruRating;