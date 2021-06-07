export default function Formulario(){
    return(
        <section className="contactado">
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
                <input type="text" name="" placeholder="Nombre" id="" />
                <input type="text" name="" placeholder="Apellidos" id="" />
                <input type="email" name="" placeholder="Email" id="" />
                <textarea name="texto" id="" cols="2" rows="9" placeholder="Escriba algo..."></textarea>
                <input type="submit" value="Enviar" className="send" />
            </div>
        </section>
    )
}