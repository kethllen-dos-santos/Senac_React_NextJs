"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from 'sweetalert2'

export default function Excluir({id, name}: userProps) {

    const [userId, setUserId] = useState<number | undefined>(id)
    const [userName, setUserName] = useState(name)
    const Swal = require('sweetalert2')
    const rota = useRouter();

    async function Excluir() {
        await fetch(`${process.env.NEXT_PUUBLIC_API_ROUTE}/usuarios` , {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON. stringify({id: userId})
        })

        Swal.fire({
            title: "Deletado",
            text: `O usuário ${userName} foi excluído!`,
            icon: "success"
        });

        rota.push("/")
    }

    return (
    <>
        <button
            onClick={Excluir}
            className={`bg-red-500 w-20 py-1 p-2 rounded-lg cursor-pointer text-white hover:brightness-90`}
        >
        Excluir
        </button>
    </>
    );
}