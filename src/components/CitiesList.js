import React, { useState, useEffect } from "react";

const CitiesList = ({ selectedState, setSelectedCity }) => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        if (selectedState) {
            fetch(`http://api.minebrat.com/api/v1/states/cities/${selectedState}`)
                .then((response) => response.json())
                .then((data) => setCities(data))
                .catch((error) => console.error("Error fetching cities:", error));
        }
    }, [selectedState]);

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value); // Capture the selected city
    };

    return (
        <div>
            <label>Select a City:  </label>
            <select onChange={handleCityChange}>
                <option value="">Select a city</option>
                {cities.map((city) => (
                    <option key={city.cityId} value={city.cityName}>
                        {city.cityName}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CitiesList;
