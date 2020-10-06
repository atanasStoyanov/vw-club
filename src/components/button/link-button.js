import React from 'react';
import { Link } from 'react-router-dom';
import styles from './link-button.module.css';

const LinkButton = ({href, title}) => {
    return (
        <Link to={href} className={styles['btn']}>{title}</Link>
    )
}

export default LinkButton;