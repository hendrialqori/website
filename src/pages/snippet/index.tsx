import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '../../components/layout'

const Snippets:NextPage = () => {
    return (
        <Layout title='Snippets'>
            <>
            <NextSeo 
                title='Snippets -- Hendri Alqori'
                description='Write code snippets'
                openGraph={{
                type: 'website',
                title: 'Snippet -- Hendri Alqori',
                description: 'Write code snippets',
                url: 'https://hendrialqori.vercel.app/about',
                siteName: 'Hendri Alqori',
                images : [ 
                    {
                    url: 'https://ik.imagekit.io/ils26chuk/og-image.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668654017675',
                    width: 1200,
                    height: 630,
                    },
                ]
                }}
            />
                <section className='w-max mx-auto mt-20'>
                    <h1 className='font-bold text-xs md:text-xl'>Unfortunately :(, this page under construction</h1>
                </section>
            </>
        </Layout>
    )
}

export default Snippets