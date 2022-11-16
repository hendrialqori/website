import Link from 'next/link'
import { useRouter } from 'next/router'
import type { LinkProps } from '../types'

export const CustomLink = ({ activeSlug = false ,children ,href }: LinkProps): JSX.Element => {
    const { pathname } = useRouter()
    return (
        <Link href={href}>
            <a 
                className={ pathname === href || activeSlug ?
                    'text-dark dark:text-light font-semibold alink'
                    : 'text-gray-400 alink'
                    }
                >
                {children}
            </a>
        </Link>
    )
}