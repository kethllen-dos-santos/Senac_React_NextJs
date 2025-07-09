type props = {
    type: "search" | "text" | "email" | "tel" | "url" | "password" | "number" | "date" | "month" | "week" | "time" | "datetime-local"
    placeholder: string
}

export default function EntradaTexto({type, placeholder}: props) {
    return (
    <>
        <input type={type} placeholder={placeholder} className="mb-4 w-60 p-1 focus:outline-none focus:ring-2 focus:ring-violet-500"></input>
    </>
    );
}