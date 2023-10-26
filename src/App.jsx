import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Portfolio from './Components/Portfolio/Portfolio';
import Skills from './Components/Skills/Skills';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 300) {
            setIsHeaderFixed(true);
        } else {
            setIsHeaderFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const appContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <>
            <div className="App__container" style={appContainerStyle}>
                <Header isFixed={isHeaderFixed} />
                <Content />
                <Portfolio />
                <Skills />
                <Contacts />
                <Footer />
            </div>
        </>
    );
}

export default App;
