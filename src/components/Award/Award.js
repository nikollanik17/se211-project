import React from "react";
import styles from "./Award.module.scss";

const Award = () => {
  return (
    <div id="Award" className={styles.Award}>
      <h1 className={styles.heading}>Nagrada</h1>
      <img src="assets/award.jpg" alt="Award" />
      <h3>Prve 3 najbolje ekipe na takmičenju će dobiti sledeće nagrade:</h3>
      <div className={styles.places}>
        <p>
          1. mesto - <span> Sony Playstation 5</span>
        </p>
        <p>
          2. mesto - <span>Gaming PC</span>
        </p>
        <p>
          3. mesto - <span>Laptop</span>
        </p>
      </div>
    </div>
  );
};

export default Award;
