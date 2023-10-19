import { useState } from "react"
import Tarefa from "../components/tarefa"
import { useLocalStorage } from "@uidotdev/usehooks"

export default function Home() {
    const [lista, setLista] = useLocalStorage("lista", []);
    const [nometarefa, setnometarefa] = useState("");

    function addTarefa() {
        if (nometarefa == "") {
            return
        } else {
            setLista([...lista, {
                id: lista.length + 1,
                nome: nometarefa,
                concluida: false
            }]);
            setnometarefa("");
        }
    }

    return (
        <div>
            <input type="text" placeholder="Digite sua tarefa :)" id="tarefa" value={nometarefa} onChange={(e) => setnometarefa(e.target.value)} />
            <button onClick={addTarefa}>Adicionar</button>
            <ul>
                {lista.map((tarefa, posicao) => (
                    <Tarefa key={posicao} id={tarefa.id} nome={tarefa.nome} concluida={tarefa.concluida} />
                ))}
            </ul>
        </div>
    )
}