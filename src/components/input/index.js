import React from 'react';
import styles from './index.module.css';

const Input = ({ label, id, value, onChange, type, placeholder, readOnly }) => {
    return (
        <div className={styles['form-div']}>
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
            <input type={type || 'text'} id={id} value={value} onChange={onChange} placeholder={placeholder} className={styles.input} readOnly={readOnly || ''}/>
        </div>
    )
}

export default Input;