import MenuItem from "./MenuItem"

type props = {
    corFundo: "rosa" | "lilas" | "azul"
}

export default function Menu({corFundo}: props) {

    let corBase = "bg-black"
    let corHover = ""
    let corTitulo = ""

    switch(corFundo) {
        case "rosa":
            corBase = "bg-pink-300"
            corHover = "hover:text-pink-800"
            corTitulo = "text-pink-800"
            break;
        case "lilas":
            corBase = "bg-violet-400"
            corHover = "hover:text-violet-800"
            corTitulo = "text-violet-800"
            break;
        case "azul":
            corBase = "bg-indigo-400"
            corHover = "hover:text-indigo-800"
            corTitulo = "text-indigo-800"
            break;
        default:
            break;            
    }

  return (
    <>
        <header className={`${corBase} text-white flex flex-col h-screen w-60 p-5 space-y-4 text-base`}>
            <h1 className={`${corTitulo} text-4xl`}>EMPRESA X</h1>
            <MenuItem className={`${corHover}`} link="" tipo="pagina-atual" texto="HOME"/>
            <MenuItem className={`${corHover}`}  link="" tipo="outra-pagina" texto="Usuários"/>
            <MenuItem className={`${corHover}`}  link="" tipo="outra-pagina" texto="Sair"/>
        </header>

    </>
  );
}