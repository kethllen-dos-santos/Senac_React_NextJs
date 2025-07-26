import ItemMenu from "./ItemMenu";

type props = {
    children: React.ReactNode;
}

export default function Menu({children}: props) {
  return (
    <>
    <div className="flex">
      <header className="w-1/2 p-5 flex flex-col space-y-4 bg-gray-800 text-base">
        <ItemMenu link="" texto="Menu" tipo="pagina-atual"/>
        <ItemMenu link="" texto="Início" tipo="outra-pagina"/>
        <ItemMenu link="" texto="Perfil" tipo="outra-pagina"/>
        <ItemMenu link="" texto="Configurações" tipo="outra-pagina"/>
        <ItemMenu link="" texto="Sair" tipo="outra-pagina"/>
      </header>

      <div className="p-5">
        {children}
      </div>

    </div>
    </>
  );
}