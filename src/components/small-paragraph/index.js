import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.module.css';

const SmallParagraph = ({label, value, icon}) => {
    return (
        <p>
            <span><span className={styles.icon}><FontAwesomeIcon icon={icon} size='1x' /></span> <small>{label}:</small> {value}</span>
        </p>
    )
}

export default SmallParagraph;