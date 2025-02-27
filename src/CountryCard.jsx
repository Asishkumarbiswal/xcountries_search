import React from 'react';
import "./CountryCard.css";

const CountryCard = (props) => {
    return (
        <div className = "countryCard">
            <img src = {props.image} alt = {props.name}/>
            <p>{props.name}</p>
        </div>
    );
}

export default CountryCard;