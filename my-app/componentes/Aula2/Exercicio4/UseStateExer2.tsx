"use client"

import Button from "@/componentes/Aula1/Exercicio4/Button";
import { useState } from "react";

type props = {
    children: React.ReactNode;
}

export default function UseStateExer2({ children }: props) {

    const [mostrar, setEsconder] = useState(true);

    function esconder() {

        setEsconder(!mostrar)

        // if (mostrar == true) {
        //     setEsconder(false)
        // } else {
        //     setEsconder(true)
        // }
    }

    return (
        <>
            <Button className= "m-3" color="azul" titulo="Esconder/Mostrar" funcao={esconder} />

            {mostrar ? <div className="m-3 p-3 bg-blue-100 border-1">{children}</div> : <></>}
        </>
    );
}