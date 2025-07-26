type props = {
    className ?: string
    children: React.ReactNode
}

export default function Card({className, children}: props) {
    return (
    <>
        <article className={`${className} flex flex-col p-4 bg-white rounded-lg shadow-md`}>
            {children}
        </article>
    </>
    );
}