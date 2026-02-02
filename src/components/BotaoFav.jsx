export default function BotaoFav({ ativo, onClick }) {
    return (
        <button
            className={`botao-favoritar ${ativo ? "ativo" : ""}`}
            onClick={onClick}
        >
            {ativo ? "FAVORITADO" : "FAVORITAR"}
        </button>
    );
}
