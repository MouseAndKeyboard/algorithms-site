import React from 'react'
import MainHeader from './MainHeader';
import GameCanvas from './GameCanvas';

const App: React.FC<{}> = () => {
    return (
        <>
            <MainHeader Title='Algorithms' />
            <GameCanvas />
        </>
    );
}

export default App;