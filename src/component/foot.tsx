import Link from 'next/link'
import style from '../styles/Foot.module.css'

const Contact:
 Array<{
  name: string,
  link: string
}> = [
      { name: 'Portfolio', link: 'https://hendrialqori.vercel.app' },
      { name: 'LinkedIn', link: 'https://www.linkedin.com/in/hendri-alqori-b87a52171/' },
      { name: 'Github', link: 'https://github.com/hendrialqori' },
      { name: 'Instagram', link: 'https://www.instagram.com/hendrialqori/' },
      { name: 'Twitter', link: 'https://twitter.com/hendrialqori'}
     ]

export const Footer:React.FC = () => {
  return (
    <footer className={style['foot__container']}>
        <div className={style['foot__wrapper_1']}>
            {
              Contact.slice(0, 2).map((obj, i) => (
                <Link key={i} href={obj.link}>
                  {obj.name}
                </Link>
              ))
            }
        </div>
        <div className={style['foot__wrapper_2']}>
            {
              Contact.slice(2, 5).map((obj, i) => (
                <Link key={i} href={obj.link}>
                  {obj.name}
                </Link>
              ))
            }
        </div>
    </footer>
  )
}