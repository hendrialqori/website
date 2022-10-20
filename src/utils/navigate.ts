interface NavigateType {
    title: 'Home' | 'Blog' | 'About' | 'Portfolio';
    href: '/' | '/blog' | '/about' | '/portfolio'
}

let Navigate: NavigateType[];
Navigate = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Blog',
        href: '/blog'
    },
    {
        title: 'About',
        href: '/about'
    },
    {
        title: 'Portfolio',
        href: '/portfolio'
    }
]

export { Navigate }