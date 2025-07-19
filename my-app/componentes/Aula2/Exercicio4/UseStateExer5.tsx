"use client"

import Button from "@/componentes/Aula1/Exercicio4/Button";
import { useState } from "react";

export default function UseStateExer5() {

  const [contVermelho, setContVermelho] = useState(0)
  const [contAzul, setContAzul] = useState(0)
  const [contVerde, setContVerde] = useState(0)
  
  function somarVermelho() {
    setContVermelho(contVermelho + 1)
  }

  function somarAzul() {
    setContAzul(contAzul + 1)
  }

  function somarVerde() {
    setContVerde(contVerde + 1)
  }

  return (
    <div className="space-x-4">
        <button className="p-3 rounded-lg cursor-pointer text-white bg-red-500" onClick={somarVermelho}>{contVermelho}</button>
        <button className="p-3 rounded-lg cursor-pointer text-white bg-blue-500" onClick={somarAzul}>{contAzul}</button>
        <button className="p-3 rounded-lg cursor-pointer text-white bg-green-500" onClick={somarVerde}>{contVerde}</button>
    </div>
  );
}