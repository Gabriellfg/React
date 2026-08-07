import { useState } from "react";


const Paragrafo = (props) => {
    const [pontos, setPontos] = useState(0);

    const aumentarPontos = () => {
        setPontos(pontos +1)
    }
    const diminuirPontos = () => {
        if (pontos = 0) {die}
        setPontos(pontos - 1)
    }

    
    return (
        <div>
            <p>{props.nome} tem {pontos} pontos.</p>
            <button onClick={aumentarPontos}>+</button>
            <button onClick={diminuirPontos}>-</button>
        </div>
    );
}

export default Paragrafo