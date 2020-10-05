import React, { useContext } from 'react';
import styles from './index.module.css';
import Link from '../link';
import logo from '../../images/vw-logo-black.png';
import getNavigation from '../../utils/navigation';
import UserContext from '../../Context';
import { useHistory } from 'react-router-dom';


const Header = () => {

    const context = useContext(UserContext);
    const history = useHistory();

    const logOut = () => {
        context.logOut();
        history.push('/')
    }

    const {
        loggedIn,
        user
    } = context;

    const links = getNavigation(loggedIn, user);

    return (

        <header className={styles['site-header']} >
            <div className={styles.media}>
                <img src={logo} className={styles.logo} alt="vw-logo" />
                <Link key={'passat-club'} href={'/'} title={'Passat Club'}/>
            </div>
            <div className={styles.nav}>
                {
                    links.map(navElement => {
                        if (navElement.title === 'Logout') {
                            return (
                                <Link key={navElement.title} href={navElement.link} title={navElement.title} onClick={logOut} />
                            )
                        }

                        return (
                            <Link key={navElement.title} href={navElement.link} title={navElement.title} onClick={() => { }} />
                        )
                    })
                }
            </div>
        </header >
    )

}

export default Header;