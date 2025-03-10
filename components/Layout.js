import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
}
