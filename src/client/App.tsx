import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './home_page/Home';
import GameTheoryPage from './game_theory/GameTheoryPage';

const App: React.FC<{}> = () => {
    return (
        <BrowserRouter>
            <Route path='/' component={Home} />
            <Route path='/gametheory/' component={GameTheoryPage} />
        </ BrowserRouter>
    );
}

export default App;