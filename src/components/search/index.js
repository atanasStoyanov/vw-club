import React from 'react';
import styles from './index.module.css';

const Search = ({value, onChange}) => {
    
    return (
        <input
            type='text'
            id='search'
            value={value}
            onChange={onChange}
            placeholder='Search...'
            className={styles['search-input']}
        />
    )
}

export default Search;