import { useState } from "react";

const TarefasForm = ({ onAddTarefa }) => {
    const [tarefa, setTarefas] = useState('');

    const handleSubmit = (e) => {
        // Evita que o form seja enviado
        e.preventDefault();

        if (tarefa.trim()) {
            onAddTarefa(tarefa.trim());
            setTarefas('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={tarefa} placeholder="Digite sua tarefa" onChange={(e => {setTarefas(e.target.value)})} />
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default TarefasForm;