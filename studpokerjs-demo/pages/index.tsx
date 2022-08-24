import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import PackageJSON from "../package.json";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>StudPoker.js</title>
        <meta name="StudPoker.js" content="Demo of studpokerjs library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <span className={styles.title}>STUDPOKER.JS</span>
          <span className={styles.title} style={{ fontSize: "0.4rem" }}>
            v
          </span>
        </div>

        <span className={styles.title} style={{ fontSize: "0.8rem" }}>
          {PackageJSON.version}
        </span>
        <section className={styles.section}></section>
      </main>
    </div>
  );
};

export default Home;
