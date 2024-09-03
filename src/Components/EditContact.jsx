import React, { useState, useEffect } from 'react';

const EditContact = ({ contact, onEdit, onCancel }) => {
    const [editedContact, setEditedContact] = useState(contact);

    useEffect(() => {
        setEditedContact(contact);
    }, [contact]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedContact({ ...editedContact, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onEdit(editedContact);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Contact</h2>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={editedContact.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={editedContact.mobile}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={editedContact.email}
                onChange={handleChange}
                required
            />
            <button type="submit">Save Changes</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default EditContact;
