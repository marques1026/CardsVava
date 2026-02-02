import "../components/contador.css"

export default function Contador({ total }) {
    return (
        <button className="contador-btn">
             Favoritados: {total}
        </button>
    );
}
