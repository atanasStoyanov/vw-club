import React from 'react';
import styles from './submit-button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';


const SubmitButton = ({title, onClick, disabled, icon}) => {
    return (
    <button className={styles.submit} onClick={onClick} disabled={disabled}><FontAwesomeIcon icon={icon || faCar} size='1x' /> {title}</button>
    )
}

export default SubmitButton;