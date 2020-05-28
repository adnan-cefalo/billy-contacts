import React, {useState} from "react";
import Filters from "../components/Filters";
import {useLocation} from "react-router-dom";
import Header from "../components/Header";
import ContactsTable from "../components/ContactsTable";

// Custom hook to interact with url query param
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Contacts() {
    const query = useQuery();
    const queryValues = {
        isArchived: query.get("isArchived") !== null && query.get("isArchived") !== "false",
        country: query.get("country") || ""
    };
    const [countries, setCountries] = useState([]);

    return (
        <div className="container my-4">
            <Header>
                <Filters query={queryValues} countries={countries}/>
            </Header>
            <ContactsTable query={queryValues} onCountriesUpdated={countries => {
                setCountries(countries);
            }}/>
        </div>
    )
}

export default Contacts;