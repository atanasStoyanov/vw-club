import React from 'react';
import styles from './index.module.css';
import Link from '../link';
import logo from '../../images/vw-logo.png';


const Header = () => {

    return (
        <header className={styles.navigation}>
            <img src={logo} className={styles.logo} />
            <Link href="#" title="Home" />
            <Link href="#" title="Login" />
            <Link href="#" title="Regster" />

        </header>
    )
}

export default Header;