import Button from "@/componentes/Button";
import MenuHorizontal from "@/componentes/MenuHorizontal";
import MenuVertical from "@/componentes/MenuVertical";
import MeuComponente from "@/componentes/MeuComponente";
import TelaLogin from "@/componentes/TelaLogin";



export default function Index() {
  return (
    <>
      {/*
      <MenuHorizontal/>
      <MenuVertical/>
      <TelaLogin/>
      <MeuComponente nome="Kethllen" idade={26}/>
      */}

      <Button color="azul" titulo="Botão azul"/>
      <Button color="verde" titulo="Botão verde"/>
      <Button color="vermelho" titulo="Botão vermelho"/>
    </>
  );
}