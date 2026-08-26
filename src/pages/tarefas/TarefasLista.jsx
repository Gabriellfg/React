import TarefasItem from "./TarefasItem";

const TarefasLista = ({ tarefas, onEditTarefa, onDeleteTarefa }) => {
    return (
        <ul>
            {/* .map() executa a função para cada item dentro do objeto */}
            {tarefas.map((tarefa) => (
                <TarefasItem key={tarefa.id}
                    tarefa={tarefa}
                    onEditTarefa={onEditTarefa}
                    onDeleteTarefa={onDeleteTarefa} />
            ))}
        </ul>
    )
}

export default TarefasLista;