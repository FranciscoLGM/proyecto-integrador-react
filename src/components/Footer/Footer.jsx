import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date();
  return (
    <footer className="text-light text-center p-4">
      <div className="container">
        <section className="d-flex justify-content-center gap-2 pt-2">
          <p className="m-0 fs-6">Diseñado y codeado con ❤️ por</p>
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
              <i class="fa-brands fa-codepen"></i>
            </a>
          </article>
          <article className="pt-3">
            <a
              href="https://github.com/FranciscoLGM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-github-alt"></i>
            </a>
          </article>
          <article className="pt-3">
            <a
              href="https://linkedin.com/in/francisco-lopez-garciamayorga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </article>
          <article className="pt-3">
            <a
              href="https://t.me/Francisco_LopezG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-telegram"></i>
            </a>
          </article>
        </section>
        <section className="pt-3 d-flex justify-content-center gap-2 text-secondary pt-4">
          <p className="fs-6 m-0">Disclaimer</p> -
          <p className="fs-6 m-0">Fuente: YTS</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
