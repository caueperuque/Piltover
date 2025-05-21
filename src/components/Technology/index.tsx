import React from 'react';
import styles from './styles.module.css';

interface TechnologyProps {}

const Technology: React.FC<TechnologyProps> = ({}) => {
  return (
    <section id="technology" className={styles.technologySection}>
      <div className={styles.container}>
        <h2>A Tecnologia Hextech</h2>
        <div className={styles.techContent}>
          <div className={styles.techInfo}>
            <p>A tecnologia Hextech de Piltover combina magia e ciência, resultando em invenções revolucionárias que impulsionam o progresso da cidade e todo o mundo de Runeterra.</p>
            <p>Do transporte à medicina, das comunicações à defesa, a Hextech permeia todos os aspectos da sociedade progressista de Piltover.</p>
            <a href="#explore" className={styles.techButton}>Descobrir Mais</a>
          </div>
          <div className={styles.techImage}>
            <img src="https://preview.redd.it/2tsjvsrg0wvb1.jpg?auto=webp&s=dc680a0f85a9147e1f7222b193fd2e0f3d8761a6" alt="Tecnologia Hextech" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology; 