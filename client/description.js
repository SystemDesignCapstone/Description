import React from 'react';

const Description = (props) => {

  return (
    <div id="description">
      <div id ="owner">
        <div className="ownerSec">
          <img className="ownerIcon" src={props.description.imageUrl}></img>
          <div className="ownerName">{props.description.Owner}</div>
        </div>
      </div>
      <div className="descriptionBox">
        <div className="sizeHeader">{props.description.full}</div>
        <div className="name">{props.description.houseName}</div>
        <div className="city">{props.description.city}</div>
        <div className="size">{props.description.full}</div>
         <div className="house">{props.description.bedrooms} bedrooms {props.description.beds} beds {props.description.guests} guests {props.description.baths} baths</div>
        <div className="description">{props.description.description}</div>
        <div className="contact">Contact host</div>
        <div className="amenitiesHead">Amenities </div>
        <div className="bullets">-{props.description.amenities}</div>
        <div className="lockHead"> Self check-in </div>
        <div className= "lockOption"> Easily check yourself in with the {props.description.lock}
        <div className = ""
      </div>

    </div>
  )

}

export default Description;

