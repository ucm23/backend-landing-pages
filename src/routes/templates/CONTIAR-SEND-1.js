const emial_first_contiar = ({ nombre, correo, telefono, mensaje }) => {
    return `<!DOCTYPE html>
    <html lang="es">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Título de la página</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
    
            header {
                background-color: #3fa2dd;
                color: #fff;
                padding: 10px 20px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
    
            main {
                padding: 20px;
            }
    
            footer {
                background-color: #3fa2dd;
                color: #fff;
                text-align: center;
                padding: 20px;
                position: fixed;
                bottom: 0;
            }
    
            header img {
                width: auto;
                height: 100px;
            }
    
            h1 {
                font-size: 14px;
            }
    
            .btn-resend {
                background-color: #3fa2dd;
                padding: 10px 8px;
                border-radius: 6px;
                color: white;
            }
    
            footer p {
                color: white;
            }
            .div {
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
        </style>
    </head>
    
    <body>
        <header>
            <img src="https://i.ibb.co/TgYQL13/logo.png" alt="icon" />
            <h1>Contiar Soluciones</h1>
        </header>
    
        <main>
            <section>
                <h1>
                    Enviado: ${new Date()}
                </h1>
                <h1>
                    De: ${nombre} &lt;${correo}&gt;
                </h1>
                <h1>
                    Número de teléfono: ${telefono}
                </h1>
                <h1>
                    Mensaje: ${mensaje}
                </h1>
                <div class="div">
                    <a 
                        class="btn-resend" 
                        href="mailto:${correo}?cc=grupo.cti.clients.reply@gmail.com&subject=Interés de contribuir y sumarse en sus procesos de primera&body=Hola estimado ${nombre} Por medio del presente correo me comunico contigo para hacerte llegar la información que solicitas sobre nuestros servicios, esperando poder servirles y contribuir a cada uno de sus procesos. Esperamos sea de utilidad y de igual forma nos puedas apoyar con algunos detalles sobre tus necesidades para poder saber de mejor manera como podemos crear más valor para ustedes. Saludos cordiales."
                    >
                        Respuesta simple a ${correo}
                    </a>
                </div>
            </section>
        </main>
    
        <footer>
            <p> &copy; © 2024 CONTIAR SOLUCIONES S.A. DE C.V. Todos los derechos reservados.
                <br />
                Ejército Nacional 769, Piso 2, Colonia Granada, C.P. 11520, Alcaldía Miguel Hidalgo, CDMX y Real de San Juan
                102, Col. Real de San Jerónimo, C.P. 64634, Monterrey, N.L. <br />
            </p>
            <a href="https://contiar.mx/Privacidad">Aviso de Privacidad</a> | <a href="https://contiar.mx/">contiar.mx</a>
        </footer>
    
    </body>
    
    </html>`
}

module.exports = emial_first_contiar;