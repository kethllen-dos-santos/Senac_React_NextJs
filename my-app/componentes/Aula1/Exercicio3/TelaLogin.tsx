/*
export default function TelaLogin() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white rounded-md shadow-lg w-min p-5">
          <h2 className="text-xl font-bold text-center mb-4">Login</h2>

          <form>
            <h4>E-mail</h4>
            <input type="email" placeholder="Digite seu e-mail" className="mb-4 w-60 p-1 focus:outline-none focus:ring-2 focus:ring-violet-500"></input>

            <h4>Senha</h4>
            <input type="password" placeholder="Digite sua senha" className="mb-4 w-60 p-1 focus:outline-none focus:ring-2 focus:ring-violet-500"></input>
            
            <input type="submit" value="Entrar" className="w-60 mb-3 p-1 bg-violet-500 text-white  cursor-pointer hover:bg-violet-700"></input>

            <p className="text-xs text-center">Ainda não tem uma conta? <a href="" className="underline text-violet-500 hover:text-violet-800">Cadastre-se</a></p>
          </form>
        </div>
      </div>
    </>
  );
}
*/


import EntradaBotao from "../../EntradaBotao";
import EntradaTexto from "../../EntradaTexto";

export default function TelaLogin() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white rounded-md shadow-lg w-min p-5">
          <h2 className="text-xl font-bold text-center mb-4">Login</h2>

          <form>
            <h4>E-mail</h4>
            <EntradaTexto type="email" placeholder="Digite seu e-mail"/>

            <h4>Senha</h4>
            <EntradaTexto type="password" placeholder="Digite sua senha"/>
            
            <EntradaBotao type="submit" placeholder="" value="Entrar"/>

            <p className="text-xs text-center">Ainda não tem uma conta? <a href="" className="underline text-violet-500 hover:text-violet-800">Cadastre-se</a></p>
          </form>
        </div>
      </div>
    </>
  );
}