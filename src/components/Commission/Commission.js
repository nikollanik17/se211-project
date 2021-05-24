import React from "react";
import styles from "./Commission.module.scss";
import { MdEmail } from "react-icons/md";

const Commission = () => {
  return (
    <div id="Commission" className={styles.Commission}>
      <h1 className={styles.heading}>Komisija</h1>
      <div className={styles.flex}>
        <div className={styles.col}>
          <img src="assets/komisija1.png" />
          <h4>Petar Peric</h4>
          <div className={styles.email}>
            <MdEmail />
            <a href="mailto:petar@cybergames.com">petar@cybergames.com</a>
          </div>
        </div>
        <div className={styles.col}>
          <img src="assets/komisija2.png" />
          <h4>Ana Stojkovic</h4>
          <div className={styles.email}>
            <MdEmail />{" "}
            <a href="mailto:ana@cybergames.com">ana@cybergames.com</a>
          </div>
        </div>
        <div className={styles.col}>
          <img src="assets/komisija3.png" />
          <h4>Marko Markovic</h4>
          <div className={styles.email}>
            <MdEmail />
            <a href="mailto:marko@cybergames.com">marko@cybergames.com</a>
          </div>
        </div>
        <div className={styles.col}>
          <img src="assets/komisija4.png" />
          <h4>Dragana Tosic</h4>
          <div className={styles.email}>
            <MdEmail />
            <a href="mailto:dragana@cybergames.com">dragana@cybergames.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commission;
