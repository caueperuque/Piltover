import React from 'react';
import styles from './styles.module.css';

interface ExploreCardProps {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({ imageUrl, altText, title, description }) => {
  return (
    <div className={styles.exploreCard}>
      <img src={imageUrl} alt={altText} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

interface ExploreProps {}

const Explore: React.FC<ExploreProps> = ({}) => {
  const exploreData: ExploreCardProps[] = [
    {
      imageUrl: "https://static.wikia.nocookie.net/leagueoflegends/images/b/bc/03PZ001-full.png",
      altText: "Academia de Piltover",
      title: "Academia de Piltover",
      description: "Centro de inovação e pesquisa onde mentes brilhantes trabalham em novas tecnologias."
    },
    {
      imageUrl: "https://preview.redd.it/nqesj1oc968e1.jpeg?auto=webp&s=9d4a82d8356c223f548bb9a649695e4a861c3a3c",
      altText: "Mercado de Piltover",
      title: "Mercado de Piltover",
      description: "Um vibrante centro comercial onde mercadorias de todo o mundo podem ser encontradas."
    },
    {
      imageUrl: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/4ecab5f219dcf813fe6ade24568ed60a22b75a96-1422x800.jpg",
      altText: "Ponte Hextech",
      title: "Ponte Hextech",
      description: "Uma maravilha da engenharia que conecta Piltover ao resto do mundo."
    }
  ];

  return (
    <section id="explore" className={styles.exploreSection}>
      <div className={styles.container}>
        <h2>Explore Piltover</h2>
        <div className={styles.exploreGrid}>
          {exploreData.map(card => (
            <ExploreCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore; 