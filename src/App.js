import Header from './Components/Header';
import Stars from './Components/Stars';
import MainText from './Components/MainText';
import Projects from './Components/Projects';
import Technologies from './Components/Technologies';
import OtherTechLibraries from './Components/OtherTechLibraries';
import Art from './Components/Art';

import './Styles/animation.scss'
import './App.scss';

function App() {

    return (
        <div id="bg-img">
            <Stars />
            <Header />
            <MainText />
            <Projects />
            <Technologies />
            <OtherTechLibraries />
            <Art />
        </div>
    );
}

export default App;
