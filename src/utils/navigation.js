const getNavigation = (loggedIn, user) => {

    const authLinks = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Forum',
            link: '/forum'
        },
        {
            title: 'Events',
            link: '/events'
        },
        {
            title: 'Profile',
            link: `/profile/${user && user.id}`
        },
        {
            title: 'Logout',
            link: '/'
        }
    ]

    const guestLinks = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Login',
            link: '/login'
        },
        {
            title: 'Register',
            link: '/register'
        },
    ]

    return loggedIn ? authLinks : guestLinks;
}

export default getNavigation;