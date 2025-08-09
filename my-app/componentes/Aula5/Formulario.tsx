"use client"

import { Salvar } from "@/app/(Servicos)/usuario";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from 'sweetalert2'


export default function Formulario({ id, name = "", email = "" }: userProps) {

    const [userId, setUserId] = useState<number | undefined>(id)
    const [userName, setUserName] = useState(name)
    const [userEmail, setEmail] = useState(email)
    const rota = useRouter();
    const Swal = require('sweetalert2')

    async function Submit() {
        const form = {
            id: userId,
            name: userName,
            email: userEmail
        }

        const metodo = userId ? "PUT" : "POST"

        try {
            

            // const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users`, {
            //     method: metodo,
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formulario)
            // })

            // const dados: userProps[] = await resposta.json();
            await Salvar(form, metodo)
            rota.push("/")
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo deu errado!"
            });
        }

        
            if (metodo == "PUT") {
                Swal.fire({
                    title: "Concluído",
                    text: `O usuário foi editado`,
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Concluído",
                    text: `O usuário ${userName} foi cadastrado`,
                    icon: "success"
                });
            }


    }

    async function Excluir() {
        await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: userId })
        })

        Swal.fire({
            title: "Deletado",
            text: `O usuário ${userName} foi excluído!`,
            icon: "success"
        });

        rota.push("/")
    }

    const textoBotao = userId ? "Editar" : "Cadastrar"

    return (
        <div>
            <p className="font-bold">Nome: </p>
            <input
                type="text"
                placeholder="Digite seu nome"
                className="mb-4 w-70 p-1 focus:outline-none focus:ring-2 focus:ring-violet-500 outline-1 outline-black bg-white"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}>
            </input>

            <p className="font-bold">E-mail: </p>
            <input
                type="email"
                placeholder="Digite seu e-mail"
                className="mb-4 w-70 p-1 focus:outline-none focus:ring-2 focus:ring-violet-500 outline-1 outline-black bg-white"
                onChange={(e) => setEmail(e.target.value)}
                value={userEmail}>
            </input>

            <br />

            <div className="flex justify-between w-70 mt-3">

                <button
                    className="bg-violet-500 p-2 rounded-lg cursor-pointer border-1 border-black text-white hover:brightness-90 w-30"
                    onClick={Submit}>
                    {textoBotao}
                </button>

                {userId ?
                    <button
                        className="bg-rose-500 p-2 rounded-lg cursor-pointer border-1 border-black text-white hover:brightness-90 w-30"
                        onClick={Excluir}>
                        Excluir
                    </button>
                : ""}

            </div>

            <br />

            <Link href={"/"}>
                <button
                    className="bg-gray-900 p-2 mt-50 rounded-lg cursor-pointer border-1 border-black text-white hover:brightness-90 w-70">
                    Voltar á pagina inicial
                </button>
            </Link>

            <br />

            {/* <button
                className="bg-gray-900 mt-50 p-2 rounded-lg cursor-pointer border-1 border-black text-white hover:brightness-90 w-30">
                Voltar
            </button> */}
        </div>
    );

}