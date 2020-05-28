import React from "react";
import {useHistory} from "react-router-dom";
import {updateRouteParams} from "../utilities/QueryParams";

function Filters(props) {
    const {query} = props;
    const history = useHistory();

    return (
        <div>
            <form className="form-inline">
                <label className="my-1 mr-2" htmlFor="country">Country</label>
                <input type="text" className="form-control my-1 mr-sm-2" id="country" name="country"
                       value={query.country} onChange={e => {
                    updateRouteParams(history, {...query, country: e.target.value})
                }}/>


                <div className="form-check my-2 mr-sm-2">
                    <input className="form-check-input" type="checkbox" name="isArchived" id="is-archived"
                           checked={query.isArchived}
                           onChange={e => {
                               updateRouteParams(history, {...query, isArchived: e.target.checked})
                           }}/>
                    <label className="form-check-label" htmlFor="is-archived">
                        Is Archived
                    </label>
                </div>
            </form>
        </div>
);
}

export default Filters;