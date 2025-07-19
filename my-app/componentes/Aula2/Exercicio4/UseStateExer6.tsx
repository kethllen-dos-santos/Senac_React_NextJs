"use client"

import Button from "@/componentes/Aula1/Exercicio4/Button";
import { useState } from "react";

export default function UseStateExer6() {

    const [curtida, setCurtida] = useState(true);
    const [contador, setContador] = useState(0);

    function curtir() {
        setCurtida(!curtida)

        if (curtida == true) {
            setContador(contador + 1);
        }
    }

    return (
        <>
            {curtida
            ? 
            <Button className= "m-3 w-24" color="verde" titulo="Curtir" funcao={curtir} />
            :
            <Button className= "m-3 w-24" color="vermelho" titulo="Descurtir" funcao={curtir} />
            }

            <h1 className="inline">{contador}</h1>
        </>
    );
}

