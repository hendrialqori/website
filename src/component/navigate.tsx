import style from '../styles/Nav.module.css'
import Image from 'next/image'
import { BiSearchAlt } from 'react-icons/bi'
import { BsMoonStarsFill } from 'react-icons/bs'
import { useStore } from '../context-manegement/store'
import { useRouter } from 'next/router'

export const Navigate:React.FC = () => {
  const { state ,dispatch } = useStore()
  const router = useRouter()

  const openModal = () => {
    dispatch({ type: 'isSearch', paylod: !state.isSearch })
  }
  
  return (
    <header className={style['nav__wrapper']}>
        <nav className={style['nav__container']}>
            <button onClick={()=> router.push('/')} className={style['__logo']}>
              <Image src='/logo.svg' alt='logo' width={40} height={40} />
            </button>
            <div className={style['__additional']}>
              <button onClick={()=> openModal()} className={style['btn__search']}>
                <BiSearchAlt className={style['btn__icon']} />
              </button>
              |
              <button className={style['btn__search']}>
                <BsMoonStarsFill className={style['mode__icon']} />
              </button>
            </div>
        </nav>
    </header>
  )
}