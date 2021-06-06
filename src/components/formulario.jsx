export default function Formulario(){
    return(
        <div className="contactado">
            <div className="redes">
                <h1>Puedes contactarnos por nuestras redes sociales</h1>
                <div className="social">
                    <i class="fab fa-instagram-square"></i>
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-instagram-square"></i>
                    <i class="fab fa-twitter-square"></i>
                </div>
            </div>
            <div className="forma">
                <input type="text" name="Nombres" value="Nombres" id="" />
                <input type="text" name="Apellidos" value="Apellidos" id="" />
                <input type="email" name="Email" value="Email" id="" />
                <input type="text" value="Escribe aqui..." id="textual" />
                <input type="submit" value="Enviar" /></div>
        </div>
    )
}