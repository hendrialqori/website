import Link from 'next/link'

export const Footer:React.FC = () => {
  return (
    <footer>
      <section className='container mt-[150px] py-5 border-t-[1px] dark:border-gray-700 flex justify-between'>
        <p className='text-sm dark:text-white'>2022&copy; All Right Reserved</p>
        {/* <p className='text-sm font-light text-gray-300'>DESIGN BY Hendri Alqori</p> */}
      </section>
    </footer>
  )
}