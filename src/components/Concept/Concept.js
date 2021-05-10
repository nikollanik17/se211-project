import styles from "./Concept.module.scss";
import conceptData from "../../../conceptData.json";

const Concept = () => {
  return (
    <div id="Concept" className={styles.Concept}>
      <h1 className={styles.heading}>Koncept</h1>
      <div className={styles.conceptFlex}>
        <div className={styles.col}>
          <h2>Datum održavanja</h2>
          <div className={styles.datePlace}>14-15 Jun 2021</div>
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
              <span key={index}>{elem}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
