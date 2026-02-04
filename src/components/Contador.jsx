import "../components/contador.css"

export default function Contador({ total }) {
    return (
        <div className="contador-valorant">
            <span className="label">FAVORITOS</span>
            <span className="numero">{total}</span>
        </div>
    );
}
