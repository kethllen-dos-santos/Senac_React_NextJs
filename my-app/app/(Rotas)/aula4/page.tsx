import Botao from "@/componentes/Aula3/Exercicio1/Botao";
import Link from "next/link";

export default function Usuario() {

    return(
      <>
        <Link href={"/"}><Botao cor="amarelo" titulo="Voltar para a página inicial"/></Link>
      </>
    );
    
  }