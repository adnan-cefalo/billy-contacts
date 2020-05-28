import React from "react";
import {useHistory} from "react-router-dom";
import {updateRouteParams} from "../utilities/QueryParams";

function Filters(props) {
    const {query} = props;
    const history = useHistory();

    return (
        <div>
            <div>
                <label>
                    <input type="checkbox" name="isArchived" checked={query.isArchived} onChange={e => {
                        updateRouteParams(history, {...query, isArchived: e.target.checked})
                    }} />
                    Is Archived
                </label>
            </div>
            <div>
                <label htmlFor="country">Country</label>
                <input type="text" name="country" value={query.country} onChange={e => {
                    updateRouteParams(history, {...query, country: e.target.value})
                }} />
            </div>
        </div>
    );
}

export default Filters;