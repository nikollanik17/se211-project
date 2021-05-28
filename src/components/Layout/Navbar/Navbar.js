import { useState } from "react";
import Link from "next/link";
import style from "./Navbar.module.scss";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [navOpened, setNavOpened] = useState(false);

  const toogleNav = () => {
    setNavOpened((prevState) => !prevState);
  };

  const scrollToElem = (id) => {
    const elem = document.getElementById(id);
    elem.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav className={style.navigation}>
        <div
          className={style.logoContainer}
          onClick={() => scrollToElem("HomeSlider")}
        >
          <Logo onClick={toogleNav} />
        </div>
        <ul>
          <li>
            <div onClick={() => scrollToElem("Concept")}>
              <a>Gde kada</a>
            </div>
          </li>
          <li>
            <div onClick={() => scrollToElem("Concept")}>
              <a>Koncept</a>
            </div>
          </li>
          <li>
            <div onClick={() => scrollToElem("Award")}>
              <a>Nagrada</a>
            </div>
          </li>
          <li>
            <div onClick={() => scrollToElem("Agenda")}>
              <a>Agenda</a>
            </div>
          </li>
          <li>
            <div onClick={() => scrollToElem("Commission")}>
              <a>Komisija</a>
            </div>
          </li>
          <li>
            {localStorage.getItem("jwtToken") ? (
              <Link href="/adminpanel">
                <a>Admin panel</a>
              </Link>
            ) : (
              <Link href="/prijava">
                <a>Prijava</a>
              </Link>
            )}
          </li>
        </ul>

        <div className="mobile_nav" onClick={toogleNav}>
          <div className="hamburger">
            <div className={"line" + (navOpened ? " active-line" : "")} />
            <div className={"line" + (navOpened ? " active-line" : "")} />
          </div>
        </div>
      </nav>
      <div className={"nav-links" + (navOpened ? " active-links" : "")}>
        <div className="listItem">
          <div className="imgWrapper"></div>
          <Link className="nav-link" href="/" onClick={toogleNav}>
            <div onClick={toogleNav}>Gde kada</div>
          </Link>
        </div>
        <div className="listItem">
          <div className="imgWrapper"></div>
          <Link className="nav-link" href="/" onClick={toogleNav}>
            <div onClick={toogleNav}>Koncept</div>
          </Link>
        </div>
        <div className="listItem">
          <div className="imgWrapper"></div>
          <Link className="nav-link" href="/" onClick={toogleNav}>
            <div onClick={toogleNav}>Nagrada</div>
          </Link>
        </div>
        <div className="listItem">
          <div className="imgWrapper"></div>
          <Link className="nav-link" href="/" onClick={toogleNav}>
            <div onClick={toogleNav}>Agenda</div>
          </Link>
        </div>
        <div className="listItem">
          <div className="imgWrapper"></div>
          <Link className="nav-link" href="/" onClick={toogleNav}>
            <div onClick={toogleNav}>Prijava</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
