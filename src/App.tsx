import { Header } from './components/Header';
import { ProductsSection } from './components/ProductsSection';
import { CreatorSection } from './components/CreatorSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main id="main" className="site-main">
        <ProductsSection />
        <CreatorSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
