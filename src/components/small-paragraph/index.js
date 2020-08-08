import React from 'react';
import styles from './index.module.css';

const SmallParagraph = ({label, value}) => {
    return (
        <p>
            <span><small>{label}:</small> {value}</span>
        </p>
    )
}

export default SmallParagraph;