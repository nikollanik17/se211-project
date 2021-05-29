import styles from "./Concept.module.scss";
import conceptData from "../../../conceptData.json";

const Concept = ({ expiration }) => {
  let expire = new Date(expiration);

  let firstDay = new Date(expiration);
  firstDay.setDate(expire.getDate() + 1);
  let lastDay = new Date(expiration);
  lastDay.setDate(expire.getDate() + 3);

  return (
    <div id="Concept" className={styles.Concept}>
      <h1 className={styles.heading}>Koncept</h1>
      <div className={styles.conceptFlex}>
        <div className={styles.col}>
          <h2>Datum održavanja</h2>
          <div className={styles.datePlace}>
            {firstDay.getDate()}-{lastDay.getDate()} {lastDay.getMonth() + 1}.{" "}
            {lastDay.getFullYear()}.
          </div>
          <p>
            <span className={styles.highlight}>CyberGames</span> je intezivna
            vikend radionica koja omogućava dizajnerima, programerima,
            scenografima i muzičarima da se udružuju, sarađuju i razvijaju
            prototipove umetničkih projekata za video igre.
          </p>
          <p>
            Nakon uvodnih inspirativnih predavanja o razvoju video igara, timovi
            i pojedinci će imati priliku da iskažu svoju kreativnost u{" "}
            <span className={styles.highlight}>24-ČASOVNOM</span> događaju.
            Svakom timu obezbeđuju se ravnopravni uslovi, jedan računar sa
            odgovarajućim programima za razvoj video igara.
          </p>
        </div>
        <div className={styles.col}>
          <h2>Mesto održavanja</h2>
          <div className={styles.datePlace}>Univerzitet Metropolitan, Niš</div>
          <p>
            <span className={styles.highlight}>TEMA CYBERGAMES-A</span> biće
            utvrđena na početku događaja. Žiri će na kraju konkursa ocenjivati
            ideje na osnovu sledećih kriterijma:
          </p>
          <div className={styles.criteria}>
            {conceptData.map((elem, index) => (
              <p key={index}>{elem}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
