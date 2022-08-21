import Navbar from './navbar-top';
import Footer from './footer';
import About from '../pages/about';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}
