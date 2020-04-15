import React from 'react'
import MainHeader from './MainHeader';
import GameCanvas from './GameCanvas';

const Home: React.FC<{}> = () => {
    return (
        <>
            <MainHeader Title='Algorithms' />
            <GameCanvas />
        </>
    );  
}

export default Home;