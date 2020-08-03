import React, { Component } from 'react';
import styles from './index.module.css';
import Link from '../link';
import logo from '../../images/vw-logo.png';
import getNavigation from '../../utils/navigation';
import UserContext from '../../Context';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    static contextType = UserContext;

    logOut = () => {
        this.context.logOut();
    }

    render() {
        const {
            loggedIn,
            user
        } = this.context;

        const links = getNavigation(loggedIn, user);

        return (
            <header className={styles.navigation} >
                <img src={logo} className={styles.logo} alt="vw-logo" />
                {
                    links.map(navElement => {
                        if (navElement.title === 'Logout') {
                            return (
                                <div key={navElement.title} className={styles['header-list-item']}>
                                    <a className={styles['header-link']} href={navElement.link} onClick={this.logOut}>{navElement.title}</a>
                                </div>
                            )
                        }
                        return (
                            <Link key={navElement.title} href={navElement.link} title={navElement.title} />
                        )
                    })
                }
            </header >
        )
    }
}

export default Header;