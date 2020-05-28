import React from "react";

function ContactRow(props) {
    const {contact = []} = props;
    return (
        <tr>
            <td>{contact.name}</td>
            <td>
                {contact.street}<br/>
                {contact.cityText} {contact.zipcodeText}<br/>
                {contact.stateText}<br/>
            </td>
            <td>{contact.countryId}</td>
            <td>
                {contact.isCustomer ? "Customer" : contact.isSupplier ? 'Supplier' : ''}
            </td>
            <td>{contact.isArchived ? "Yes" : "No"}</td>
        </tr>
    )
}

export default ContactRow;