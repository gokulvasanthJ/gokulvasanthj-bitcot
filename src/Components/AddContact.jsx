import React, { useState } from 'react';

const AddContact = ({ onAdd }) => {
    const [contact, setContact] = useState({ name: '', mobile: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(contact);
        setContact({ name: '', mobile: '', email: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Contact</h2>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={contact.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={contact.mobile}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={contact.email}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default AddContact;
