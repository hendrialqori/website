import Link from 'next/link'
import { useRouter } from 'next/router'

interface LinkProps {
    activeSlug?: boolean
    children: string
    href: string
}

export const CustomLink = ({ activeSlug = false ,children ,href }: LinkProps): JSX.Element => {
    const { pathname } = useRouter()
    return (
        <Link href={href}>
            <span 
            style={{ color: activeSlug ? 'rgb(2 132 199)' : '' }} 
            className={ pathname === href ? 'active' : 'text-black dark:text-white'}
            >
            {children}
            </span>
        </Link>
    )
}