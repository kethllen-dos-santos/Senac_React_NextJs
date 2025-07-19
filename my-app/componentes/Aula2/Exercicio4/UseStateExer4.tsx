"use client"

import Button from "@/componentes/Aula1/Exercicio4/Button";
import { useState } from "react";

export default function UseStateExer4() {

    const [lista, setLista] = useState<string[]>([]);
    const [tarefa, setTarefa] = useState("");

    function addTarefa() {
        if (tarefa != "") {
            setLista([...lista,tarefa]) // ... pega tudo que vem antes
            setTarefa("")
        }
    };

    return (
        <>
            <input
                value={tarefa}
                className="p-3 rounded-lg m-3 w-60 bg-white"
                type="text"
                placeholder="Escreva uma tarefa"
                onChange={(evento) => setTarefa(evento.target.value)}>
            </input>
            <Button color="verde" titulo="Adicionar" funcao={addTarefa}/>

            <h1 className="p-3">Lista de tarefas</h1>
            {lista.map((item) => (
                <div key={item}>
                    <p className="m-3">{item}</p>
                </div>
            ))}

        </>
    );
}

