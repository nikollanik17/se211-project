import React from "react";
import styles from "./Agenda.module.scss";

const Agenda = ({ expiration }) => {
  let expire = new Date(expiration);

  let firstDay = new Date(expiration);
  firstDay.setDate(expire.getDate() + 1);
  let secondDay = new Date(expiration);
  secondDay.setDate(expire.getDate() + 2);
  let lastDay = new Date(expiration);
  lastDay.setDate(expire.getDate() + 3);

  return (
    <div id="Agenda" className={styles.Agenda}>
      <h1 className={styles.heading}>Agenda</h1>
      <div className={styles.schedule}>
        <h3>
          <span>
            {firstDay.getDate()}.{firstDay.getMonth() + 1}
          </span>{" "}
          - Tokom večeri definišemo timove, predstavljamo concept i družimo se
          igrajući video igre uživajući u hrani i piću.
        </h3>
        <h3>
          <span>
            {secondDay.getDate()}.{secondDay.getMonth() + 1}
          </span>{" "}
          - Timovi dobijaju temu na kojoj će raditi i započinju rad na svojim
          projektima.
        </h3>
        <h3>
          <span>
            {lastDay.getDate()}.{lastDay.getMonth() + 1}
          </span>{" "}
          - Timovi dobijaju temu na kojoj će raditi i započinju rad na svojim
          projektima.
        </h3>
        <h3>
          <span>10:00H - 13:00H</span> Rad sa mentorima
        </h3>
        <h3>
          <span>13:00H - 13:30H</span> Prezentacija projekta
        </h3>
        <h3>
          <span>14:00H</span> - Proglašenje pobednika
        </h3>
      </div>
    </div>
  );
};

export default Agenda;
