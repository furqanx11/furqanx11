import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faGitAlt, faJsSquare, faReact, faHtml5, faCss3} from '@fortawesome/free-brands-svg-icons';
import Loader from "react-loaders";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e', '!']}
              idx={15}
            />
          </h1>
          <p>
            I'm a computer science student with strong proficiency in Python, machine learning and web development.
          </p>
          <p>
            My experience includes implementing various machine learning algorithms, building end-to-end machine learning pipelines, deploying them on web and implementing deep learning models.
          </p>
          <ul className="social-icons">
            <li>
              <a href="https://www.linkedin.com/in/furqanx11/" target="_blank" rel="noopener noreferrer" className="linkedin">
                <FaLinkedin size={20} />
              </a>
            </li>
            <li>
              <a href="https://www.github.com/furqanx11" target="_blank" rel="noopener noreferrer" className="git">
                <FaGithub size={20} />
              </a>
            </li>
          </ul>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color='#3776AB' />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color='#61DAFB' />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color='#F7DF1E' />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGitAlt} color='#F34F29' />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faHtml5} color='#E34F26' />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faCss3} color='#1572B6' />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
