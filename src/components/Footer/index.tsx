import React from 'react';
import styles from './styles.module.css';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>PILTOVER</div>
          <div className={styles.footerLinks}>
            <ul>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#champions">Campeões</a></li>
              <li><a href="#technology">Tecnologia</a></li>
              <li><a href="#explore">Explorar</a></li>
            </ul>
          </div>
          <div className={styles.footerCredit}>
            <p>Inspirado no universo de League of Legends &copy; Riot Games</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 