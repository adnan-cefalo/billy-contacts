import React, {useState, useEffect} from "react";
import ContactRow from "./ContactRow";
import {getContacts} from "../utilities/BillyClient";

function ContactsTable(props) {
    const {query: {isArchived, country}, onCountriesUpdated} = props;
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);
    const [filteredContacts, setFilteredContacts] = useState([]);

    useEffect(() => {
        const params = {
            isArchived,
        };

        getContacts(params)
            .then(result => {
                setContacts(result.contacts);
                onCountriesUpdated(result.countries);
            })
            .catch(err => {
                setError(err.message);
            });
    }, [isArchived]);

    useEffect(() => {
        setFilteredContacts(contacts.filter(contact => {
            if (country !== '' && country !== contact.countryId) return false;

            return true;
        }))
    }, [country, contacts]);

    const contactRows = filteredContacts.map(function (contact) {
        return (<ContactRow key={contact.id} contact={contact} />);
    });

    if (error !== null) {
        return (
            <p className="text-center">
                Something went wrong. <br/>
                <strong>Message:</strong> {error}
            </p>
        );
    }

    return (
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
    );
}

export default ContactsTable;
