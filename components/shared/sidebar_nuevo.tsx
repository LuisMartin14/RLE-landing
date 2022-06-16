import React from "react";
import Link from "next/link";
import Head from "next/head";

import styles from "../../styles/Sidebar.module.css";

const opciones = {
  nuevo: [
    {
      label: "Conoce RLE",
      href: "#",
    },
    {
      label: "Requisitos",
      href: "#",
    },
    {
      label: "Módulos de preparación",
      href: "#",
    },
    {
      label: "Modalidades RLE",
      href: "#",
    },
    {
      label: "Formatos",
      href: "#",
    },
    {
      label: "Links",
      href: "#",
    },
    {
      label: "Sesiones de acompamiento",
      href: "#",
    },
    {
      label: "Portal de empleabilidad",
      href: "#",
    },
    {
      label: "Tutoriales",
      href: "#",
    },
  ],
  viejo: [
    {
      label: "Conoce RLE",
      href: "#",
    },
    {
      label: "Conoce RLE",
      href: "#",
    },
  ],
};

const Sidebar_Nuevo = ({ opcion }) => {
  const [select, setSelect] = React.useState(false);

  // const opcion = "viejo";
  return (
    <React.Fragment>
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          {opciones[opcion].map((link) => {
            return (
              <li key={link.label} className={"nav-item" + " " + styles.menu}>
                <Link
                  href={link.href}
                  className={"nav-link" + " " + styles.link}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar_Nuevo;
