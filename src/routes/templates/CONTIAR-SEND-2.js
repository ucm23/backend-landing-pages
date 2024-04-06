const emial_first_contiar_receveid = ({ nombre, correo, telefono, mensaje }) => {
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
                justify-content: center;
                align-items: center;
                font-size: 12px;
                font-weight: 400;
            }
            main {
                padding: 20px;
            }
            footer {
                background-color: #3fa2dd;
                color: #fff;
    
                padding: 20px;
            }
            header img {
                width: auto;
                height: 115px;
                filter: saturate(10%);
            }
            h1 {
                font-size: 14px;
                font-weight: 400;
            }
            .btn-resend {
                background-color: #3fa2dd;
                padding: 12px 14px;
                border-radius: 16px;
                color: white;
                font-weight: bold;
                text-decoration: none;
                font-size: 13px;
            }
            .btn-files {
                background-image: url('https://contiar.mx/docs/CONTIAR-SOLUCIONES-ITS-2024.pdf');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                display: flex;
                width: 65px;
                height: 80px;
            }
    
            footer p,
            footer a {
                color: white;
                font-size: 12px;
                font-weight: 400;
            }
            .div {
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
            .nota {
                display: flex;
                width: 140px;
                height: 115px;
                background-color: #B6B6B620;
                color: #fff;
                padding: 20px;
                clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%);
                border: 1px solid gray;
            }
            .cabecera {
                position: relative;
                padding-bottom: 8px;
                margin-bottom: 8px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                gap: 4px;
            }
    
            .cabecera h3 {
                margin-top: -5px;
                margin-bottom: 0px;
                font-size: 13px;
                color: gray;
                max-height: 150px;
            }
            .cabecera span {
                font-size: 12px;
                color: #B6B6B699;
            }
            .contenido p {
                font-size: 14px;
                color: #444;
                margin: 0;
            }
            .esquina-doblada {
                position: absolute;
                z-index: 100;
                bottom: -39px;
                right: -30px;
                width: 30px;
                height: 30px;
                background-color: red;
            }
            .files {
                gap: 10px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
            }
        </style>
    </head>
    
    <body>
        <header>
            <img src="https://i.ibb.co/TgYQL13/logo.png" alt="icon" />
        </header>
        <main>
            <section>
                <h1>
                    <strong>Interés de contribuir y sumarse en sus procesos de primera</strong>
                </h1>
                <h1>
                    Estimado ${nombre}, por medio del presente correo me comunico contigo para hacerte llegar la información
                    que solicitas sobre nuestros servicios, esperando poder servirles y contribuir a cada uno de sus
                    procesos.
                    Esperamos sea de utilidad y de igual forma nos puedas apoyar con algunos detalles sobre tus necesidades
                    para poder
                    saber de mejor manera como podemos crear más valor para ustedes. <br />
                    Añadimos un grupo de link's donde puedes leer más acerca de algunos de nuestros servicios de
                    interés:<br />
                </h1>
                <h1>
                    Saludos cordiales
                </h1>
                <div class="files">
                    <a class="nota" target="_blank" href="https://contiar.mx/docs/CONTIAR-SOLUCIONES-ITS-2024.pdf">
                        <div class="cabecera">
                            <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png"
                                alt="icon-pdf" />
                            <div class="data">
                                <h3>Sistemas Inteligentes de Transporte</h3>
                                <span>ENLACE</span>
                            </div>
                            <div class="esquina-doblada"></div>
                        </div>
                    </a>
                    <a class="nota" target="_blank" href="https://contiar.mx/docs/1.pdf">
                        <div class="cabecera">
                            <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png"
                                alt="icon-pdf" />
                            <div class="data">
                                <h3>Análisis, Diseño y Mantenimiento de Sistemas</h3>
                                <span>ENLACE</span>
                            </div>
                            <div class="esquina-doblada"></div>
                        </div>
                    </a>
                    <a class="nota" target="_blank" href="https://contiar.mx/docs/2.pdf">
                        <div class="cabecera">
                            <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png"
                                alt="icon-pdf" />
                            <div class="data">
                                <h3>Integración de hardware y software</h3>
                                <span>ENLACE</span>
                            </div>
                            <div class="esquina-doblada"></div>
                        </div>
                    </a>
                    <a class="nota" target="_blank" href="https://contiar.mx/docs/3.pdf">
                        <div class="cabecera">
                            <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png"
                                alt="icon-pdf" />
                            <div class="data">
                                <h3>Análisis y Automatización De Procesos</h3>
                                <span>ENLACE</span>
                            </div>
                            <div class="esquina-doblada"></div>
                        </div>
                    </a>
                    <a class="nota" target="_blank" href="https://contiar.mx/docs/4.pdf">
                        <div class="cabecera">
                            <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png"
                                alt="icon-pdf" />
                            <div class="data">
                                <h3>Diseño de Arquitectura Segura TICs</h3>
                                <span>ENLACE</span>
                            </div>
                            <div class="esquina-doblada"></div>
                        </div>
                    </a>
                    <a class="nota" target="_blank" href="https://contiar.mx/docs/5.pdf">
                        <div class="cabecera">
                            <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png"
                                alt="icon-pdf" />
                            <div class="data">
                                <h3>Capacitación en ciberseguridad</h3>
                                <span>ENLACE</span>
                            </div>
                            <div class="esquina-doblada"></div>
                        </div>
                    </a>
                    <a class="nota" target="_blank" href="https://contiar.mx/docs/6.pdf">
                        <div class="cabecera">
                            <img src="https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_3_pdf_x16.png"
                                alt="icon-pdf" />
                            <div class="data">
                                <h3>Servicio de Actualización y Concientización para administradores y usuarios de Servicios
                                    TICs</h3>
                                <span>ENLACE</span>
                            </div>
                            <div class="esquina-doblada"></div>
                        </div>
                    </a>
                </div>
                <br />
                <div class="div">
                    <a class="btn-resend"
                        href="mailto:luis.ruiz@contiar.mx?cc=grupo.cti.clients.reply@gmail.com&subject=Tengo interés de contribuir y sumarse en sus procesos&body=Hola,%0D%0A%0D%0AEstimado Contiar Soluciones Por medio del presente correo me comunico contigo para hacerte saber que estoy interesado en solicitar uno de sus servicios... (Añada más información) %0D%0A%0D%0ASaludos cordiales.%0D%0A%0D%0AAtentamente%0D%0A%0D%0A${nombre}">
                        Responder a ${correo}
                    </a>
                </div>
                <br />
            </section>
        </main>
        <footer>
            <p>
                &copy; 2024 CONTIAR SOLUCIONES S.A. DE C.V.
                <br />Todos los derechos reservados.<br /><br />
                Ejército Nacional 769, Piso 2, Colonia Granada, C.P. 11520, Alcaldía Miguel Hidalgo, CDMX y Real de San Juan
                102, Col. Real de San Jerónimo, C.P. 64634, Monterrey, N.L. <br />
            </p>
            <a href="https://contiar.mx/Privacidad">Aviso de Privacidad</a> | <a href="https://contiar.mx/">contiar.mx</a>
        </footer>
    </body>
    </html>`
}

module.exports = emial_first_contiar_receveid;