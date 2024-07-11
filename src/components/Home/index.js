import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import './index.scss';

const nameArray = [' ', 'F', 'u', 'r', 'q', 'a', 'n'];
const jobArray = ['T', 'e', 'c', 'h', '\n', 'E', 'n', 't', 'h', 'u', 's', 'i', 'a', 's', 't','.'];


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>    
                        <span className={`${letterClass} _12`}>i,</span>    
                        <br /> 
                        <span className={`${letterClass} _13`}>I</span>    
                        <span className={`${letterClass} _14`}>'m </span>    
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={17} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={21} />
                    </h1>
                    <h2>Web Developer / AI Aspirant</h2>
                    <Link to="/furqanx11/project" className='flat-button'>See My Work</Link>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home;