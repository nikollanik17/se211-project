import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.flex}>
          <MdEmail />
          <a href="mailto:office@cybergames.com">office@cybergames.com</a>
        </div>
        <div className={styles.flex}>
          <FaPhoneAlt />
          <a hef="tel:+381555333">+381/555-333</a>
        </div>
      </div>
      <div className={styles.copyright}>
        © Copyright 2021 - All rights reserved
      </div>
    </>
  );
};

export default Footer;
