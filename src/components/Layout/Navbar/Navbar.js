import { useEffect, useState } from "react";
import Link from "next/link";
import style from "./Navbar.module.scss";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [navOpened, setNavOpened] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const toogleNav = () => {
    setNavOpened((prevState) => !prevState);
  };

  const scrollToElem = (id) => {
    const elem = document.getElementById(id);
    elem.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToElemMobile = (id) => {
    scrollToElem(id);
    toogleNav();
  };

  useEffect(() => {
    if (localStorage.getItem("jwtToken")) {
      setIsAuth(true);
    }
  }, []);

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
            {isAuth ? (
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
          <div className="nav-link" onClick={() => goToElemMobile("Concept")}>
            <div>Gde kada</div>
          </div>
        </div>
        <div className="listItem">
          <div className="nav-link" onClick={() => goToElemMobile("Concept")}>
            <div>Koncept</div>
          </div>
        </div>
        <div className="listItem">
          <div className="nav-link" onClick={() => goToElemMobile("Award")}>
            <div>Nagrada</div>
          </div>
        </div>
        <div className="listItem">
          <div className="nav-link" onClick={() => goToElemMobile("Agenda")}>
            <div>Agenda</div>
          </div>
        </div>
        <div className="listItem">
          <div
            className="nav-link"
            onClick={() => goToElemMobile("Commission")}
          >
            <div>Komisija</div>
          </div>
        </div>
        <div className="listItem">
          {isAuth ? (
            <Link className="nav-link" href="/adminpanel">
              <div>Admin panel</div>
            </Link>
          ) : (
            <Link className="nav-link" href="/prijava">
              <div>Prijava</div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
