import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CitiesList from "./CitiesList"; // Import the CitiesList component

const List = () => {
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState(""); // Added selected city
    const [selectedStateName, setSelectedStateName] = useState("");

    useEffect(() => {
        fetch("http://api.minebrat.com/api/v1/states")
            .then((response) => response.json())
            .then((data) => setStates(data))
            .catch((error) => console.error("Error fetching states:", error));
    }, []);

    const handleStateChange = (event) => {
        const stateId = event.target.value;
        setSelectedState(stateId);
        const state = states.find((state) => state.stateId === stateId);
        if (state) {
            setSelectedStateName(state.stateName);
        } else {
            setSelectedStateName("");
        }
    };

    return (
        <div>
            <h2>List Of States and Cities</h2>
            <form>
                <label>Select a State:  </label>
                <select value={selectedState} onChange={handleStateChange}>
                    <option value="">Select a state</option>
                    {states.map((state) => (
                        <option key={state?.stateId} value={state?.stateId}>
                            {state?.stateName}
                        </option>
                    ))}
                </select>
                <br />
                <br />
                <CitiesList
                    selectedState={selectedState}
                    setSelectedCity={setSelectedCity} // Pass the setSelectedCity function
                />
                <br />
                <br />
                <Link to={`/result?selectedCityName=${selectedCity}&selectedStateName=${selectedStateName}`}>
                    <button>Submit</button>
                </Link>
            </form>
        </div>
    );
};

export default List;
