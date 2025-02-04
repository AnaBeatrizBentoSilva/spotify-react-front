import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react';

function App() {
  const [artists, setArtists] = useState([]);
  return (
    <>
    <Header setArtists={setArtists} />
      <Sidebar />
      <Main artists={artists} />
      <Footer />
    </>
  );
}

export default App;
