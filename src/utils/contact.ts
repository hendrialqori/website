interface ContactTypes {
    title: string;
    link: string
}

let Contacts: Readonly<ContactTypes[]>;
Contacts = [
    {
        title: 'Email',
        link: 'mailto:teamhendri18@gmail.com?subject='
    },
    {
        title:'Linkedin',
        link: 'https://www.linkedin.com/in/hendri-alqori-b87a52171/'
    },
    {
        title: 'Porfolio',
        link: 'https://hendrialqori.vercel.app'
    },
    {
        title: 'Github',
        link: 'https://github.com/hendrialqori'
    },
    {
        title: 'twitter',
        link: 'https://twitter.com/hendrialqori/'
    },
    {
        title: 'Instagram',
        link: 'https://www.instagram.com/hendrialqori/'
    }
]

export { Contacts }