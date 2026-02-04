export default function BotaoFav({ ativo, onClick }) {
    return (
        <button
            className={`botao-favoritar ${ativo ? "ativo" : ""}`}
            onClick={onClick}
        >
            <span className="icone">
                {ativo ? "★" : "☆"}
            </span>
            <span className="texto">
                {ativo ? "FAVORITO" : "FAVORITAR"}
            </span>
        </button>
    );
}
