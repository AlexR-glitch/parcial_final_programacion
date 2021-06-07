import{Link} from 'react-router-dom';

export default function MenuMovil() {
    return(
        <>
            <nav className="menu menumovil">
                <div className="contenedor">
                    <div className="logo">
                        <h1>AIRWAY</h1>
                        <h2>LINES</h2>
                    </div>
                    <div className="btn">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
            </nav>
            <div className="blur"></div>
            <div className="enlacesmoviles">
                <Link to="/" className="cadena">Home</Link>
                <Link to="/About" className="cadena">Acerca de</Link>
                <Link to="/contact" className="cadena">Contacto</Link>
            </div>
        </>
    )
}