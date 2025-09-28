import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductsSection } from './components/ProductsSection';
import { CreatorSection } from './components/CreatorSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetail } from './components/ProductDetail';
import './App.css';

function HomePage() {
  return (
    <>
      <ProductsSection />
      <CreatorSection />
      <LocationSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <main id="main" className="site-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
