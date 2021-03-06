import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Header from "../components/shared/header";
import Sidebar_Nuevo from "../components/shared/sidebar_nuevo";
import styles from "../styles/Sidebar.module.css";

const Inicio: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Perfil - Real Life Experience</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header></Header>

      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <Sidebar_Nuevo opcion={"nuevo"} />
          </div>
          <div className="col py-3 text-center">
            <h3>¿Aun no llevas el curso? Conoce más aquí</h3>

            {/* <video autoPlay style={{ width: "500px", height: "500px" }}>
              <source src="https://youtu.be/KL6vbTCOEGU" />
            </video> */}

            <iframe
              width="80%"
              height="80%"
              src="https://www.youtube-nocookie.com/embed/KL6vbTCOEGU"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
