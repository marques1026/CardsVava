import BotaoFav from "./BotaoFav";
import "../components/cards.css"

import gekko from "../assets/img/gekko.avif";
import jett from "../assets/img/Jett.webp";
import omen from "../assets/img/omen.jpg";
import raze from "../assets/img/raze.png";
import reyna from "../assets/img/reyna.jpg";

const personagens = [
    { id: 1, nome: "Gekko", imagem: gekko },
    { id: 2, nome: "Reyna", imagem: reyna },
    { id: 3, nome: "Jett", imagem: jett },
    { id: 4, nome: "Raze", imagem: raze },
    { id: 5, nome: "Omen", imagem: omen }
];

export default function Cards({ favoritos, toggleFavorito }) {
    return (
        <div className="cards-container">
            {personagens.map(p => (
                <div className="card-valorant" key={p.id}>
                    <img 
                        src={p.imagem}
                        alt={p.nome}
                        className="imagem-agente"
                    />

                    <BotaoFav
                        ativo={favoritos.includes(p.id)}
                        onClick={() => toggleFavorito(p.id)}
                    />
                </div>
            ))}
        </div>
    );
}
