"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Formulario() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const rota = useRouter();

    async function Salvar() {
        const formulario = {
            name: nome,
            email: email
        }

        const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users` ,{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formulario)
        })

        const dados: userProps[] = await resposta.json();
        
        if (dados) {
            rota.push("/")
        } else {
            alert ("Erro! Os dados não foram salvos!")
        }
        

    }

    return(
        <div>
            <p className="font-bold">Nome: </p>
            <input
                type="text"
                placeholder="Digite seu nome"
                className="mb-4 w-60 p-1 focus:outline-none focus:ring-2 focus:ring-violet-500 outline-1 outline-black bg-white"
                onChange={(e) => setNome(e.target.value)}>
            </input>
            
            <p className="font-bold">E-mail: </p>
            <input
                type="email"
                placeholder="Digite seu e-mail"
                className="mb-4 w-60 p-1 focus:outline-none focus:ring-2 focus:ring-violet-500 outline-1 outline-black bg-white"
                onChange={(e) => setEmail(e.target.value)}>
            </input>

            <br/>

            <button
                className="bg-violet-500 p-2 mt-3 rounded-lg cursor-pointer border-1 border-black text-white hover:brightness-90 w-30"
                onClick={Salvar}>
                Salvar
            </button>

            <br/>

            {/* <button
                className="bg-gray-900 mt-50 p-2 rounded-lg cursor-pointer border-1 border-black text-white hover:brightness-90 w-30">
                Voltar
            </button> */}
        </div>
    );
    
  }