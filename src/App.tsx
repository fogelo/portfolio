import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Main} from './components/main/Main';
import {Skills} from './components/skills/Skills';
import {Works} from './components/works/Works';
import {RemoteWork} from './components/remoteWork/RemoteWork';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <RemoteWork/>
        </div>
    );
}

export default App;
