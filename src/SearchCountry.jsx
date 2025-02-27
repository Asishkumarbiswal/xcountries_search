import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import styles from './SearchCountry.module.css';

function SearchCountries() {
    const [countries, setCountries] = useState([]);
    const [debounceTimeout, setDebounceTimeout] = useState(0);
    const [filteredCountries, setFilteredCountries] = useState([]);

    const debounceSearch = (event, debounceTimeout) => {
        const value = event.target.value;
    
        if (debounceTimeout) {
          clearTimeout(debounceTimeout);
        }
    
        const timeout = setTimeout(() => {
          performSearch(value);
        }, 500);
    
        setDebounceTimeout(timeout);
    };

    const performSearch = (value) => {
        const result = countries.filter(country => country.common.toLowerCase().includes(value.toLowerCase()));
        console.log(result);
        setFilteredCountries(result);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://countries-search-data-prod-812920491762.asia-south1.run.app/countries');
                const data = await response.json();
                setCountries(data);
                setFilteredCountries(data);
            } catch (error) {
                console.error("Error fetching data: ",error);
            } 
        }
        fetchData();
    },[]);

    return ( 
        <>
            <header>
                <input type="text" name="search" placeholder="Search for countries..." onChange={(e) => debounceSearch(e, debounceTimeout)}/>            
            </header>
            <div className={styles.countryCard}>
                
                {
                    filteredCountries.map((country) => {
                    return <CountryCard key={country.common} image={country.png} name={country.common}/>
                    })
                }
            </div>
        </>
     );
}

export default SearchCountries;