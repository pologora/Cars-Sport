import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/header/Header';
import Hero from './components/Hero';
import Info from './components/Info';

function App() {
  return (
    <div className='bg-light-primary font-roboto-condensed text-base'>
      <Header />
      <Hero />
      <Gallery />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
