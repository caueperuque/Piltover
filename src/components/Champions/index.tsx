import React from 'react';
import styles from './styles.module.css';

interface ChampionCardProps {
  id: string;
  name: string;
  title: string;
  description: string;
  quote: string;
  imageUrl: string;
}

const ChampionCard: React.FC<ChampionCardProps> = ({ id, name, title, description, quote, imageUrl }) => {
  return (
    <div className={`${styles.championCard} ${styles[id]}`}>
      <div className={styles.championImage}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.championInfo}>
        <h3>{name}</h3>
        <p className={styles.championTitle}>{title}</p>
        <p>{description}</p>
        <div className={styles.championQuote}>{quote}</div>
      </div>
    </div>
  );
};

interface ChampionsProps {}

const Champions: React.FC<ChampionsProps> = ({}) => {
  const championsData: ChampionCardProps[] = [
    {
      id: "jinx",
      name: "Jinx",
      title: "A Gatilho Desenfreado",
      description: "Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para espalhar o caos sem se preocupar com as consequências.",
      quote: "\"Vamos deixar tudo em ruínas!\"",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg"
    },
    {
      id: "vi",
      name: "Vi",
      title: "A Defensora de Piltover",
      description: "Ex-criminosa das ruas de Zaun, Vi é uma mulher impulsiva, temperamental e teimosa que trabalha para manter a paz em Piltover.",
      quote: "\"Primeiro socamos, depois fazemos perguntas.\"",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg"
    },
    {
      id: "caitlyn",
      name: "Caitlyn",
      title: "A Xerife de Piltover",
      description: "Renomada caçadora de criminosos, Caitlyn é a melhor pacificadora da cidade, trabalhando para manter a ordem nas ruas.",
      quote: "\"Tenho você na minha mira.\"",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg"
    },
    {
      id: "jayce",
      name: "Jayce",
      title: "O Defensor do Amanhã",
      description: "Inventor, cientista e guerreiro, Jayce utiliza sua inteligência, força e martelo transformador hextech para proteger sua cidade natal.",
      quote: "\"Eu luto pelo progresso de Piltover!\"",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_0.jpg"
    },
    {
      id: "heimerdinger",
      name: "Heimerdinger",
      title: "O Inventor Venerado",
      description: "Professor e inventor yordle, Heimerdinger é um dos cientistas mais inovadores de Piltover, dedicado à pesquisa de tecnologia hextech.",
      quote: "\"Ideias requintadas demandam metodologias requintadas.\"",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg"
    },
    {
      id: "ekko",
      name: "Ekko",
      title: "O Rapaz que Estilhaçou o Tempo",
      description: "Um prodígio de Zaun que manipula o tempo, Ekko usa sua invenção para explorar as diversas possibilidades da realidade.",
      quote: "\"Se não deu certo da primeira vez, tente, tente de novo.\"",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg"
    }
  ];

  return (
    <section id="champions" className={styles.championsSection}>
      <div className={styles.container}>
        <h2>Os Campeões de Piltover</h2>
        <div className={styles.championsGrid}>
          {championsData.map(champion => (
            <ChampionCard key={champion.id} {...champion} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Champions; 