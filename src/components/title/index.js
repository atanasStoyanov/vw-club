import React from 'react';
import styles from './index.module.css';

const Title = ({title}) => {
    return (
        <p className={styles.title}>{title}</p>
    )
}

export default Title;