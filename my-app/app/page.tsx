/*

"use client"

import Button from "@/componentes/Aula1/Exercicio4/Button";
import Card from "@/componentes/Aula2/Exercicio1/Card";
import Footer from "@/componentes/Aula2/Exercicio1/Footer";
import Header from "@/componentes/Aula2/Exercicio1/Header";
import MenuHorizontal from "@/componentes/Aula1/Exercicio1/MenuHorizontal";
import MenuVertical from "@/componentes/Aula1/Exercicio2/MenuVertical";
import MeuComponente from "@/componentes/MeuComponente";
import TelaLogin from "@/componentes/Aula1/Exercicio3/TelaLogin";
import AreaUsuario from "@/componentes/Aula2/Exercicio2/AreaUsuario";
import Menu from "@/componentes/Aula2/Exercicio3/Menu";
import Quadrante from "@/componentes/Aula2/Exercicio3/Quadrante";
import { useState } from "react";


function Componente({children}:{children: React.ReactNode}) {
  return (
    <>
      {children}
    </>
  )
}

function teste() {
  console.log("Testezinho!")
}


function notificacao(){
  alert ("Essa é uma mensagem :)");
}


// LISTA
function Compenente() {
  const lista = [
    {
      id: 1,
      nome: "Kethllen",
      idade: 26,
      endereco: {
        rua: "rua amendoas",
        numero: "33",
        bairro: "DCE"
      }
    },
    {
      id: 2,
      nome: "Aline",
      idade: 19,
      endereco: {
        rua: "rua ABC",
        numero: "22A",
        bairro: "lilas"
      }
    }
  ]

  return (
    <div>
      {lista.map((item) => (
        <div key={item.id}>
          <h1 className="text-rose-500">{item.nome}</h1>
          <p>{item.idade} {item.endereco.rua} {item.endereco.numero} {item.endereco.bairro}</p>
        </div>
      ))}
    </div>
  )
}


//IF TERNÁRIO

condição ? verdadeiro : falso


type usuario = {
  nome: string
  idade: number
}

export default function Index() {

  //const estaLogado = true;
  
  const [contador, setContador] = useState(0)
  function atualizarContador() {
    setContador(contador + 2)
  }

  const [usuario, setUsuario] = useState<usuario>()

  const [lista, setLista] = useState<boolean>() // true ou false
  

  return (
    <>
      {
      Aula 1

      <MenuHorizontal/>
      <MenuVertical/>
      <TelaLogin/>
      <MeuComponente nome="Kethllen" idade={26}/>
      <Button color="azul" titulo="Botão azul"/>
      <Button color="verde" titulo="Botão verde"/>
      <Button color="vermelho" titulo="Botão vermelho" funcao={teste}/>
      }

      {
      AULA 2

      <Componente>
        <h1>Olá mundo!</h1>
      </Componente>
      

      <Header titulo="Minha Página com Compenentes"/>

      <section className="flex flex-row gap-7 justify-center px-7">
        <Card titulo="Componente 1" conteudo="Esse é o conteúdo do primeiro cartão."/>
        <Card titulo="Componente 2" conteudo="Esse é o conteúdo do segundo cartão."/>
        <Card titulo="Componente 3" conteudo="Esse é o conteúdo do terceiro cartão."/>
      </section>

      <Footer ano="2025" nome="Minha Empresa"/>

        <AreaUsuario
          titulo="Área do Usuário"
          tituloBotao="Executar ação"
          acao={notificacao}
        >
        <p>Bem vindo ao sistema! Esse pedaço veio do children.</p>
        </AreaUsuario>
      
      

      <div className="flex h-screen">
        <Menu corFundo="rosa"/>

        <div>
        <Quadrante titulo="Alice" conteudo="hanakalalalal"/>
        </div>

      </div>


      <Compenente/>


      {estaLogado ? <h1>Logado</h1> : <h1>Não está logado</h1>}

      {contador} <br/>

      <button className="bg-rose-400" onClick={atualizarContador}>Atualizar</button> <br/>
      <button className="bg-violet-400" onClick={() => setContador(contador+1)}>Atualizar</button> <br/>

    }

    

    </>
  );
}

*/



// import { useState } from "react";
// import UseStateExer1 from "@/componentes/Aula2/Exercicio4/UseStateExer1";
// import UseStateExer2 from "@/componentes/Aula2/Exercicio4/UseStateExer2";
// import UseStateExer3 from "@/componentes/Aula2/Exercicio4/UseStateExer3";
// import UseStateExer4 from "@/componentes/Aula2/Exercicio4/UseStateExer4";
// import UseStateExer6 from "@/componentes/Aula2/Exercicio4/UseStateExer6";
// import UseStateExer5 from "@/componentes/Aula2/Exercicio4/UseStateExer5";

// export default function Index() {

//   return(
//     <>
//        <UseStateExer1/> 

//       <UseStateExer2>
//         <p>Este é um parágrafo.</p>
//       </UseStateExer2>

//       <UseStateExer3/>

//       <UseStateExer4/>
      
//       <UseStateExer5/>

//       <UseStateExer5/>
//     </>
//   );
  
// }



// import Api from "@/componentes/Aula3/Api";

// export default async function Index() {

//   return(
//     <>
//       <Api/>
//     </>
//   );
  
// }

// import PaginaInicial from "@/componentes/Aula4/PaginaInicial";
// import Loja from "@/componentes/Aula4/PaginaInicial";

// export default async function Index() {

//   return(
//     <>
//       <PaginaInicial/>
//     </>
//   );
  
// }


import Users from "@/componentes/Aula5/Users";

export default async function Index() {

  return(
    <div>
      <Users/>
    </div>
  );
  
}