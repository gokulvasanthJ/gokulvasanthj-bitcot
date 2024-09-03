import React, { useState, useEffect } from 'react';
import AddContact from './AddContact';
import EditContact from './EditContact';
import ViewContactDetails from './ViewContactDetails';
import SearchContact from './SearchContact';

const ContactsView = () => {
    const [contacts, setContacts] = useState([]);
    const [editingContact, setEditingContact] = useState(null);
    const [viewingContact, setViewingContact] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Simulating fetch from JSON
        const initialContacts = [
            { id: 1, name: 'Aaron', mobile: '5785664545', email: 'aaron@gmail.com' },
            { id: 2, name: 'Buincy Hanson', mobile: '5785664545', email: 'hanson@gmail.com' }
        ];
        setContacts(initialContacts);
    }, []);

    const handleAddContact = (newContact) => {
        setContacts([...contacts, { ...newContact, id: contacts.length + 1 }]);
    };

    const handleEditContact = (updatedContact) => {
        setContacts(contacts.map(contact =>
            contact.id === updatedContact.id ? updatedContact : contact
        ));
        setEditingContact(null);
    };

    const handleDeleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase());
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm) ||
        contact.mobile.includes(searchTerm)
    );

    return (
        <div>
            <h1>Contacts</h1>
            <SearchContact onSearch={handleSearch} />
            <AddContact onAdd={handleAddContact} />
            {editingContact && (
                <EditContact
                    contact={editingContact}
                    onEdit={handleEditContact}
                    onCancel={() => setEditingContact(null)}
                />
            )}
            {viewingContact && (
                <ViewContactDetails
                    contact={viewingContact}
                    onClose={() => setViewingContact(null)}
                />
            )}
            <ul>
                {filteredContacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name} - {contact.mobile}
                        <button onClick={() => setViewingContact(contact)}>View</button>
                        <button onClick={() => setEditingContact(contact)}>Edit</button>
                        <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactsView;
