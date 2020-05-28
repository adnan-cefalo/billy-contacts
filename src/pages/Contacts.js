import React from "react";
import Filters from "../components/Filters";
import {useLocation} from "react-router-dom";

// Custom hook to interact with url query param
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Contacts() {
    const query = useQuery();

    const queryValues = {
        isArchived: query.get("isArchived") !== null && query.get("isArchived") !== "false",
        country: query.get("country") || ""
    }
    return (
        <div>
            <Filters query={queryValues}/>
        </div>
    )
}

export default Contacts;