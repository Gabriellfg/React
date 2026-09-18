import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import useSWR from "swr";
import { Fetcher } from "../Fetcher";

const UsuarioDetalhes = () => {

    const { id } = useParams();

    const [usuario, setUsuario] = useState(null);
    const [carregando, setCarregando] = useState(true);
    //useeffect para disparar evento de consulta usuario
    useEffect(() => {
        async function buscarUsuario() {
            try {
                setCarregando(true);
                const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const jsonData = await data.json();
                setUsuario(jsonData);
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
            } finally {
                setCarregando(false);
            }
        }

        buscarUsuario();
    }, [id]); //id é parametro aser observado
    return(
        <div>
            <h2>Detalhe do Usuário</h2>
            {carregando ? (
                <p>Carregando...</p>
            ) : (
                <div> 
                    <p><strong>Nome:</strong> {usuario.name}</p>
                    <p><strong>Email:</strong> {usuario.email}</p>
                    <p><strong>Telefone:</strong> {usuario.phone}</p>
                </div>
            )}
        </div>
    );
};

export default UsuarioDetalhes