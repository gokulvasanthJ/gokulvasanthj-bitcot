import React from 'react';

const ViewContactDetails = ({ contact, onClose }) => {
    return (
        <div>
            <h2>Contact Details</h2>
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Mobile:</strong> {contact.mobile}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default ViewContactDetails;
