import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FrequentlyAsked from './components/FrequentlyAsked';
import SignIn from './components/SignIn';
import Stats from './components/Stats'
import Blogs from './components/Blogs';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Blogs />
      <Stats />
      <FrequentlyAsked />
      <Footer />
      <SignIn />
    </>
  );
}

export default App;
