import MeuComponente from "@/componentes/MeuComponente";

export default function MenuVertical() {
  return (
    <>
    <div className="flex h-screen">
      <header className="w-40 p-5 bg-violet-400 text-violet-100 text-base">
        <a href="" className="block mb-3 hover:text-violet-700 text-white font-bold">Menu</a>
        <a href="" className="block mb-3 hover:text-violet-700">Início</a>
        <a href="" className="block mb-3 hover:text-violet-700">Perfil</a>
        <a href="" className="block mb-3 hover:text-violet-700">Configurações</a>
        <a href="" className="block mb-3 hover:text-violet-700">Sair</a>
      </header>

      <div className="p-5">
        <h1 className="text-violet-600">Bem vindo!</h1>
        <p>Esta é uma tela com um menu simples usando Tailwind CSS.</p>
      </div>

    </div>
    </>
  );
}

