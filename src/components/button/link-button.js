import React from 'react';
import { Link } from 'react-router-dom';
import styles from './link-button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';


const LinkButton = ({href, title, icon}) => {
    return (
        <Link to={href} className={styles['btn']}><FontAwesomeIcon icon={icon || faCar} size='1x' /> {title}</Link>
    )
}

export default LinkButton;