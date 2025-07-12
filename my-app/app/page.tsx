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



/*
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
*/

function notificacao(){
  alert ("Essa é uma mensagem :)");
}


export default function Index() {
  return (
    <>
      {/*
      Aula 1

      <MenuHorizontal/>
      <MenuVertical/>
      <TelaLogin/>
      <MeuComponente nome="Kethllen" idade={26}/>
      <Button color="azul" titulo="Botão azul"/>
      <Button color="verde" titulo="Botão verde"/>
      <Button color="vermelho" titulo="Botão vermelho" funcao={teste}/>
      */}

      {/*
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

      */}

        <AreaUsuario
          titulo="Área do Usuário"
          tituloBotao="Executar ação"
          acao={notificacao}
        >
        <p>Bem vindo ao sistema! Esse pedaço veio do children.</p>
        </AreaUsuario>
          

    </>
  );
}