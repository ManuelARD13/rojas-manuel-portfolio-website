import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import MainContent from 'components/MainContent/MainContent';
import Navbar from 'components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Header />
        <MainContent />
      </main>
      <Footer />
    </>
  );
}
