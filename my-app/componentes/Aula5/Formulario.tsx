"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from 'sweetalert2'


export default function Formulario({id, name="", email=""}: userProps) {

    const [userId, setUserId] = useState<number | undefined>(id)
    const [userName, setUserName] = useState(name)
    const [userEmail, setEmail] = useState(email)
    const rota = useRouter();
    const Swal = require('sweetalert2')

    async function Salvar() {
        const formulario = {
            id: userId,
            name: userName,
            email: userEmail
        }

        const metodo = userId ? "PUT" : "POST"

        const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users` ,{
            method: metodo,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formulario)
        })

        const dados: userProps[] = await resposta.json();

        if (metodo == "PUT") {
            Swal.fire({
                title: "Concluído",
                text: "Os dados do usuário foi editado",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Concluído",
                text: "O usuário foi cadastrado",
                icon: "success"
            });
        }
        
        
        if (dados) {
            rota.push("/")
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo deu errado!"
            });
        }

    }

    const textoBotao = userId ? "Editar" : "Cadastrar"

    return(
        <div>
            <p className="font-bold">Nome: </p>
            <input
                type="text"
                placeholder="Digite seu nome"
                className="mb-4 w-60 p-1 focus:outline-none focus:ring-2 focus:ring-violet-500 outline-1 outline-black bg-white"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}>
            </input>
            
            <p className="font-bold">E-mail: </p>
            <input
                type="email"
                placeholder="Digite seu e-mail"
                className="mb-4 w-60 p-1 focus:outline-none focus:ring-2 focus:ring-violet-500 outline-1 outline-black bg-white"
                onChange={(e) => setEmail(e.target.value)}
                value={userEmail}>
            </input>

            <br/>

            <button
                className="bg-violet-500 p-2 mt-3 rounded-lg cursor-pointer border-1 border-black text-white hover:brightness-90 w-30"
                onClick={Salvar}>
                {textoBotao}
            </button>

            <br/>

            <Link href={"/"}>
                <button
                    className="bg-gray-900 p-2 mt-5 rounded-lg cursor-pointer border-1 border-black text-white hover:brightness-90 w-30">
                    Voltar
                </button>
            </Link>

            <br/>

            {/* <button
                className="bg-gray-900 mt-50 p-2 rounded-lg cursor-pointer border-1 border-black text-white hover:brightness-90 w-30">
                Voltar
            </button> */}
        </div>
    );
    
  }