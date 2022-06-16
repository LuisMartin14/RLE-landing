import React from "react";
import Link from "next/link";
import Head from "next/head";

const Header = () => {
  return (
    <React.Fragment>
      <nav id="navbar-principal" className="navbar bg-light px-3">
        {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}
        <ul className="nav nav-pills">
          <li className="nav-item mx-2">
            <Link href={"/"}>Principal</Link>
          </li>
          <li className="nav-item mx-2">
            <Link href={"/calculadora"}>Calculadora RLE</Link>
          </li>
          <li className="nav-item mx-2">
            <Link href={"/noticias"}>Noticias</Link>
          </li>
          <li className="nav-item mx-2">
            <Link href={"/calendario"}>Calendario RLE</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
