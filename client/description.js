import React from 'react';

const Description = (props) => {

  return (
    <div id="description">
      <div className="ownerSec">
        <img className="ratingIcon" src={props.description.imageUrl}></img>
          {props.description.Owner} Owner
      </div>
      <div className="descriptionBox">
        <div className="name">{props.description.houseName}</div>
        <div className="city">{props.description.city}</div>
        <div className="size">{props.description.full}</div>
         <div className="house">{props.description.bedrooms} bedrooms {props.description.beds} beds {props.description.guests} guests {props.description.baths} baths</div>
        <div className="description">About this house {props.description.description}</div>
        <div className="amenities">Amenities -{props.description.amenities}</div>

      </div>
    </div>
  )

}

export default Description;
