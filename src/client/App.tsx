import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';

const App: React.FC<{}> = () => {
    return (
        <BrowserRouter>
            <Route path='/' component={Home} />
            
        </ BrowserRouter>
    );
}

export default App;