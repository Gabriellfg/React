
import useSWR from "swr";
import { Fetcher } from "../../Fetcher";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

const Usuarios = () => {
    const {data, error, isLoading} = useSWR('https://jsonplaceholder.typicode.com/users', Fetcher);
    return (
        <div>
            <h2>Usuarios</h2>
            <p>Dados requisitados por API</p>
            <div>{isLoading ? "Carregando..." : ""}</div>

            <ul>{data && data.map((user) => (
                <li key={user.id}>
                    <Link to={`/usuarios/${user.id}`}>{user.name}</Link>
                    
                    </li>
            ))}</ul>
            
        </div>
    )

}

export default Usuarios;