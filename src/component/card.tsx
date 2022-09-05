import Link from 'next/link'
import style from '../styles/Card.module.css'

interface CardProps {
  title: string;
  created: string;
  tags: string[];
  slug: string;
}


export const Card:React.FC<CardProps> = ({ title, created, tags, slug }) => {
  return (
   <Link href={'/' + slug } role='button' tabIndex={2}>
      <article className={style['article']}>
        <div className={style['__content']}>
          <h1>{title}</h1>
          <ul className={style['tags__wrapper']}>
            {
              tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))
            }
          </ul>
          <div className={style['content__body']}>
            <p>{created}</p>
          </div>
        </div>
      </article>
   </Link>
  )
}