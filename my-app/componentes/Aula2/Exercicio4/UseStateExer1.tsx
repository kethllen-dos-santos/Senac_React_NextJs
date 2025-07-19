"use client"

import Button from "@/componentes/Aula1/Exercicio4/Button";
import { useState } from "react";

export default function UseStateExer1() {

  const [contador, setContador] = useState(0)
  
  function somar() {
    setContador(contador + 1)
  }

  function subtrair() {
    {contador == 0 ? setContador(contador) : setContador(contador - 1)}
  }

  return (
    <div className="space-x-4">
      <Button color="vermelho" titulo="Subtrair" funcao={subtrair}/>
      <span className="bg-gray-300 p-3 rounded-lg text-lg">{contador}</span>
      <Button color="verde" titulo="Somar" funcao={somar}/>
    </div>
  );
}