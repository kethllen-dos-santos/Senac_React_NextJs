type props = {
    type: "button" | "file" | "reset" | "submit"
    placeholder: string
    value: string
}

export default function EntradaBotao({type, placeholder, value}: props) {
    return (
    <>
        <input type={type} placeholder={placeholder} value={value} className="w-60 mb-4 p-1 bg-violet-500 text-white  cursor-pointer hover:bg-violet-700"></input>
    </>
    );
}