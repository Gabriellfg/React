import { useState } from "react";

const CaixaTexto = () => {
    const [texto, setTexto] = useState('');

    const gerenciaTexto = (event) => {
        // .target.value pega o valorde quem disparrou o evento, no caso o input
        setTexto(event.target.value) 
    }

    return (
        <div>
            <h3>Input</h3>
            <input type="text" value={texto} onInput={gerenciaTexto} />
            <p>Você digitou {texto.length} caracteres.</p>
        </div>
    );
}

export default CaixaTexto;