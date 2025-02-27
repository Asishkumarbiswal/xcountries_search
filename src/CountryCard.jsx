import React from 'react';
import styles from "./CountryCard.module.css";

const CountryCard = (props) => {

    return (
        <div className = {styles.countryCard}>
            <img src = {props.image} alt = {props.name}/>
            <h4>{props.name}</h4>
        </div>
    );
}

export default CountryCard;