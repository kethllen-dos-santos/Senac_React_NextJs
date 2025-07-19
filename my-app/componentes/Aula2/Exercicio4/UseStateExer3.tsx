"use client"

import EntradaTexto from "@/componentes/EntradaTexto";
import { useState } from "react";

export default function UseStateExer3() {

    const [nome, setNome] = useState("");

    const mostrarNome = (evento: any) => {
        setNome(evento.target.value);
    };

    return (
        <>
            <input
                className="m-3 w-60 p-1 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
                type="text"
                placeholder="Digite seu nome"
                onChange={mostrarNome}>
            </input>

            {nome ? <h1 className="m-3 text-violet-600">Olá, {nome}!</h1> : <></>}

            
        </>
    );
}

