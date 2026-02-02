import { useState } from "react";
import Cards from "../components/Cards";
import Contador from "../components/Contador";
import "./home.css";

import wallpaper from "../assets/img/WallpaperValorant.svg";

export default function Home() {
    const [favoritos, setFavoritos] = useState([]);

    function toggleFavorito(id) {
        setFavoritos(prev =>
            prev.includes(id)
                ? prev.filter(f => f !== id)
                : [...prev, id]
        );
    }

    return (
        <div 
            className="home"
            style={{
                backgroundImage: `url(${wallpaper})`
            }}
        >
            <h1 className="titulo">VALORANT CARDS</h1>
            <Contador total={favoritos.length} />
            <Cards 
                favoritos={favoritos}
                toggleFavorito={toggleFavorito}
            />
        </div>
    );
}
