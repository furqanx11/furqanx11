import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <>
            {
                strArray.map((char, i) => {
                    if (char === '\n') {
                        return <br key={char + i} />;
                    } else {
                        return (
                            <span key={char + i} className={`${letterClass} _${i + idx}`}>
                                {char}
                            </span>
                        );
                    }
                })
            }
        </>
    );
};

export default AnimatedLetters;