import { useState } from "react";
import Link from "next/link";
import style from "./Navbar.module.scss";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [navOpened, setNavOpened] = useState(false);

  const toogleNav = () => {
    setNavOpened((prevState) => !prevState);
  };

  return (
    <>
      <nav className={style.navigation}>
        <div className={style.logoContainer}>
          <Logo onClick={toogleNav} />
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>Gde kada</a>
            </Link>
          </li>
          <li>
            <Link href="#Concept">
              <a>Koncept</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Nagrada</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Agenda</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Prijava</a>
            </Link>
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
