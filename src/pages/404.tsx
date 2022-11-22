import Layout from "../components/layout";

export default function NotFound() {
    return (
        <Layout title="404">
            <section className="h-[300px] w-max mx-auto flex items-center justify-center">
                <h1 className="dynamic-font">404 | Page no found</h1>
            </section>
        </Layout>
    )
}