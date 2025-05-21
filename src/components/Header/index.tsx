import React from 'react';
import styles from './styles.module.css';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}></div>
      <nav className={styles.nav}>
        <div className={styles.logo}>PILTOVER</div>
        <ul className={styles.navLinks}>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#champions">Campeões</a></li>
          <li><a href="#technology">Tecnologia</a></li>
          <li><a href="#explore">Explorar</a></li>
        </ul>
      </nav>
      <div className={styles.hero}>
        <h1>PILTOVER</h1>
        <h2>A Cidade do Progresso</h2>
        <p>Onde inovação, tecnologia e progresso se encontram</p>
        <a href="#champions" className={styles.ctaButton}>Conheça os Campeões</a>
      </div>
    </header>
  );
};

export default Header;