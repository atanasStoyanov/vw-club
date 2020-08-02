const getNavigation = (loggedIn, user) => {

    const authLinks = [
        {
            title: 'Create Post',
            link: '/create-post'
        },
        {
            title: 'Create Event',
            link: '/create-event'
        },
        {
            title: 'Logout',
            link: '/logout'
        },
        {
            title: 'Profile',
            link: `/profile/${user && user.id}`
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