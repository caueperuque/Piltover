import React from 'react';
import styles from './styles.module.css';

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2>Bem-vindo a Piltover</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>Piltover é uma próspera cidade progressista. Uma potência cultural e comercial, Piltover é financiada por uma cena de tecnologia rica e a indústria Hextech, que pesquisa as relíquias mágicas de Runeterra.</p>
            <p>Situada no penhasco sobre o distrito de Zaun e na costa marítima, a cidade oferece oportunidades para inventores e empresários ambiciosos.</p>
          </div>
          <div className={styles.aboutImage}>
            <img src="https://miro.medium.com/v2/resize:fit:1200/1*SCm5G3uACbT96P0ATHbDzA.jpeg" alt="Vista de Piltover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 