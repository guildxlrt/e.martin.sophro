import { h, Fragment } from "preact";
import { lazy, Suspense } from "preact/compat";
import Styles from "./Header.module.scss";
import { useState } from "preact/hooks";

export default function Header() {
  const [open, setOpen] = useState(false);

  const setBurgerState = () => {
    console.log(open);
    setOpen(!open);
  };

  return (
    <header className={Styles.Stickybar}>
      <nav className={`navbar ${Styles.Navbar}`}>
        <div class="container">
          <div class="navbar-brand">
            <button
              className={
                open
                  ? "navbar-burger is-marginless is-active"
                  : "navbar-burger is-marginless"
              }
              onClick={setBurgerState}
            >
              <span class="has-text-dark"></span>
              <span class="has-text-dark"></span>
              <span class="has-text-dark"></span>
            </button>
            <a className={`navbar-item ${Styles.Logo}`} href="/">
              <img src="/logos/logo.webp" class="logo" alt="logo" />
            </a>
          </div>

          <div id="burger" className={`navbar-menu ${open ? "is-active" : ""}`}>
            <div className={`navbar-end ${Styles.NavbarEnd}`}>
              <a
                href="/presentation"
                className={`navbar-item ${Styles.NavbarItem}`}
              >
                Qui suis-je ?
              </a>
              <a href="#" className={`navbar-item ${Styles.NavbarItem}`}>
                Séances
              </a>
              <a href="/" className={`navbar-item ${Styles.NavbarItem}`}>
                <div>Acceuil</div>
              </a>
            </div>
          </div>
        </div>
        {/* <a class="usr-log" href="{{route('user')}}">
                    @if(typeof user === 'number')
                        <img
                        src="/icons/circle-user-solid_on.svg"
                        class="usr-img"
                        alt="logon"
                        />
                    @elseif(user === false)
                        <img
                        src="/icons/circle-user-solid_off.svg"
                        class="usr-img"
                        alt="logoff"
                        />
                    @end
                    </a> */}
      </nav>
    </header>
  );
}
