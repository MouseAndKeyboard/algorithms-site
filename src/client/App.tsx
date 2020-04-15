import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './home_page/Home';
import GameTheoryPage from './game_theory/GameTheoryPage';

const App: React.FC<{}> = () => {
    return (
        <>
            <Route exact path='/' component={Home} />
            <Route exact path='/gametheory' component={GameTheoryPage} />
        </>
    );
}

export default App;