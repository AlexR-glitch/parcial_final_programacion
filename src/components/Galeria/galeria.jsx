import {useState, useRef} from 'react';
import galeria from '../helpers/galeria';
import '../sass/_section.scss'

export default function Galeria(){

const [lightbox, setlightbox] = useState(false);
const imgLigthbox = useRef();

function Captura(url) {
    imgLigthbox.current.setAttribute('src', url, 'nombre');
    aLightbox()
}

function aLightbox(){
    setlightbox(!lightbox);
}

    return(
        <>
        <div className={`lightbox ${lightbox ? 'activo' : ''}`}>
            <span onClick={aLightbox}><i className="fas fa-times"></i></span>
            <img src="img/indonesia.jpg" alt="" ref={imgLigthbox}/>
        </div>
        <section className="galeria">
            <div className="titular">
                <div className="frame">
                    <h1>Los mejores destinos</h1>
                </div>
            </div>
            <div className="imagenes">
                {galeria.map((imagen, index)=>(
                    <div style={{background:`url('${imagen}')`}} key={index} onClick={()=>{Captura(imagen)}} >hola</div>
                ))}
            </div>
        </section>
        </>
    )
}