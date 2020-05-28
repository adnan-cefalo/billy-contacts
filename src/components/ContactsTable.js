import React, {useState, useEffect} from "react";
import ContactRow from "./ContactRow";
import {getContacts} from "../utilities/BillyClient";
import Error from "./Error";
import Pagination from "./Pagination";
import {updateRouteParams} from "../utilities/QueryParams";
import {useHistory} from "react-router-dom";
import Spinner from "./Spinner";

function ContactsTable(props) {
    const {query: {isArchived, country, page}, onCountriesUpdated} = props;
    const history = useHistory();
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [filteredContacts, setFilteredContacts] = useState([]);
    let [paging, setPaging] = useState({
        page: 1,
        pageCount: 1,
        pageSize: 5,
        total: 0
    });

    useEffect(() => {
        const params = {
            isArchived,
            page,
            pageSize: paging.pageSize
        };
        setLoading(true);
        getContacts(params)
            .then(result => {
                setContacts(result.contacts);
                setPaging(result.meta.paging);

                onCountriesUpdated(result.countries);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [isArchived, page, paging.pageSize]);

    useEffect(() => {
        setFilteredContacts(contacts.filter(contact => {
            if (country !== '' && country !== contact.countryId) return false;

            return true;
        }))
    }, [country, contacts]);

    const contactRows = filteredContacts.map(function (contact) {
        return (<ContactRow key={contact.id} contact={contact} />);
    });

    const updatePage = function(page) {
        updateRouteParams(history, {isArchived, page, country})
    };

    if (error !== null) {
        return (
            <Error message={error} />
        );
    }

    if(loading) {
        return (
            <Spinner/>
        );
    }

    return (
        <div>
            <table className="table table-striped my-2">
                <thead>
                <th>Name</th>
                <th>Address</th>
                <th>Country</th>
                <th>Type</th>
                <th>Is Archived</th>
                </thead>
                <tbody>
                {contactRows}
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
                <Pagination
                    page={paging.page}
                    perPage={paging.pageSize}
                    total={paging.total}
                    onChange={updatePage}/>
            </div>
        </div>
    );
}

export default ContactsTable;
