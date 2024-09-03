import React from 'react';

const SearchContact = ({ onSearch }) => {
    return (
        <input
            type="text"
            placeholder="Search by name or mobile"
            onChange={(e) => onSearch(e.target.value)}
        />
    );
};

export default SearchContact;
