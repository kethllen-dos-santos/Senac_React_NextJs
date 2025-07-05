import MeuComponente from "@/componentes/MeuComponente";

export default function MenuHorizontal() {
  return (
    <>
      <header className="flex space-x-5 p-5 bg-violet-400 text-white text-base">
          <div className="font-bold hover:text-blue-200 cursor-pointer">Início</div>
          <div className="hover:text-blue-200 cursor-pointer">Sobre</div>
          <div className="hover:text-blue-200 cursor-pointer">Contato</div>
      </header>

      <div className="p-5">
        <h1 className="font-bold text-">Bem vindo!</h1>
        <p>Esta é uma tela com um menu simples usando Tailwind CSS.</p>
      </div>
    </>

  );
}

