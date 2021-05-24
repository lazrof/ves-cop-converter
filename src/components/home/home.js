import React from 'react'
import {Link} from "react-router-dom";
import './home.scss'
function Home() {
    
    return(
        <>      
        <nav className="home-menu">
            <div class="btn btn-primary custom-link">
                <Link to="/conversion-exacta" className="text-light">Conversión Exacta</Link>
            </div>
            <div class="btn btn-primary custom-link">
                <Link to="/conversion-al-cambio" className="text-light">Conversión al Cambio</Link>
            </div>
        </nav>
        </>
    )
}

export default Home;