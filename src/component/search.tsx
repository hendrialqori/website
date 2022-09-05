import { IoMdClose } from 'react-icons/io'
import { useStore } from '../context-manegement/store'
import style from '../styles/Search.module.css'

export const ModalSeach:React.FC = () => {
  const { state: { isSearch }, dispatch } = useStore()

  const closeModal = () => dispatch({ type: 'isSearch', paylod: false })

  return (
    <section className={isSearch ? 'modal__wrapper' : 'modal__close modal__wrapper'}>
        <button onClick={()=> closeModal()} >
            <IoMdClose className={'close__icon'} />
        </button>
        <form onSubmit={e => e.preventDefault()}>
            <input
              type="search"
              className={'input__text'}
               />
        </form>
    </section>
  )
}