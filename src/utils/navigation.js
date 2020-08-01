const getNavigation = (userid) => {

    const links = [
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

    return links;
}

export default getNavigation;