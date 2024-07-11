import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from "react-loaders";
import urdulogo from '../../assets/images/urdus.png';
import sigma from '../../assets/images/Sigma.PNG';
import game from '../../assets/images/game.PNG';


const cardsData = [
  {
    image: urdulogo,
    title: 'Urdu Script',
    description: 'A programming language with Urdu keywords.',
    url : 'https://github.com/furqanx11/urduscript'
  },
  {
    image: sigma,
    title: 'AI Virtual Assistant',
    description: 'The Intelligent Virtual Assistant, "Sigma," is meticulously designed to assist users in performing a wide array of tasks through intuitive voice commands ',
  },
  {
    image: game,
    title: 'Video Game Recommendation System',
    description: 'A web-based game recommendation system using Django, a high-level Python web framework, and machine learning techniques.',
  },
];

const Card = ({ image, title, description, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
    </a>
    
  );
}

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);
    
    return (
        <>
        <div className="container project-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray = {['M', 'y', ' ', 'W', 'o', 'r', 'k']}
                    idx = {15}
                    />
                </h1>
            </div>
            <div className="cards-container">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              url={card.url}
            />
          ))}
        </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}
export default Projects;