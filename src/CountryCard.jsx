import React from 'react';
import "./CountryCard.css";

const CountryCard = (props) => {

    return (
        <div className = "countryCard">
            <img src = {props.image} alt = {props.name}/>
            <h4>{props.name}</h4>
        </div>
    );
}

export default CountryCard;