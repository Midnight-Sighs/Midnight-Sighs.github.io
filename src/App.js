import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

import Header from './Components/Header';
import Stars from './Components/Stars';
import MainText from './Components/MainText';
import Projects from './Components/Projects';
import Technologies from './Components/Technologies';
import OtherTechLibraries from './Components/OtherTechLibraries';
import Art from './Components/Art';
import About from './Components/About';

import './Styles/animation.scss'
import './App.scss';

function App() {

    return (
        <div id="bg-img">
            <Header />
            <Outlet />
            <br />
        </div>
    );
}

export default App;
