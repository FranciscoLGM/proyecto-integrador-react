import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-light text-center p-4">
      <div className="container">
        <section className="d-flex flex-sm-row flex-column justify-content-center gap-2 pt-2">
          <p className="m-0 fs-6 text-center">Diseñado y codeado con ❤️ por:</p>
          <a
            href="https://franciscolopezgarciamayorga.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary fs-6 fw-semibold"
          >
            FranciscoLGM
          </a>
        </section>
        <section className="d-flex justify-content-center gap-4 fs-3 pt-2">
          <article className="pt-3">
            <a
              href="https://codepen.io/franciscolopezg/pens/public"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-codepen"></i>
            </a>
          </article>
          <article className="pt-3">
            <a
              href="https://github.com/FranciscoLGM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github-alt"></i>
            </a>
          </article>
          <article className="pt-3">
            <a
              href="https://linkedin.com/in/francisco-lopez-garciamayorga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </article>
          <article className="pt-3">
            <a
              href="https://t.me/Francisco_LopezG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
          </article>
        </section>
        <section className="pt-3 d-flex justify-content-center gap-2 text-secondary pt-4">
          <article>
            {/* Button trigger modal */}
            <p
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="m-0 fs-6"
            >
              Disclaimer
            </p>

            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5 fw-bold text-primary"
                      id="exampleModalLabel"
                    >
                      Sobre los links
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-start">
                    <p className="disclaimer">
                      Un link dentro de una página web (denominado también
                      enlace, vínculo o hipervínculo) es un elemento que hace
                      referencia a otro recurso.
                    </p>
                    <p className="disclaimer">
                      Los links son simples enlaces que direccionan hacia cierta
                      información o activan determinados contenidos, pero que en
                      ningún caso constituyen reproducciones de los contenidos a
                      los cuales enlaza. Tales enlaces son de libre circulación
                      por Internet y accesibles desde cualquier buscador.
                    </p>
                    <p className="disclaimer">
                      En el servidor de este sitio no hay películas, ni ningún
                      contenido ilegal. Un link no vulnera el derecho de
                      reproducción; las direcciones URL son meros hechos que no
                      están protegidos por el derecho de autor por no implicar
                      la realización de una copia de una obra.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
          -<p className="fs-6 m-0">Fuente: YTS</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
