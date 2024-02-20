import { h, Fragment } from "preact";
import { lazy, Suspense } from "preact/compat";
import Styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer
      className={`${Styles.Footer} footer has-text-centered is-secondary centering-item`}
    >
      <div class="container">
        <div class="columns">
          <a href="#" className={`column ${Styles.FootLnkClr}`}>
            Mentions Légales
          </a>
        </div>

        <ul>
          <li>Éloïse Martin , Sophrologue</li>
          <li>{import.meta.env.EMAIL}</li>
          <li>{import.meta.env.PHONE}</li>
          <li>© 2023 Tous droits réservés</li>
          <li>
            Site web crée par{" "}
            <a className={Styles.FootLnkClr} href="#">
              GL.digital
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
