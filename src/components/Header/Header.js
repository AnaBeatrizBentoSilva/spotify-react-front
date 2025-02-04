import React, {useState, useEffect} from "react";
import './Header.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';

const Header = ({ setArtists }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setArtists([]);
      return;
    }

    const fetchArtists = async () => {
      try {
        const response = await fetch(`http://localhost:3005/artists?name_like=${searchTerm}`);
        const data = await response.json();

        const filteredArtists = data.filter(artist =>
          artist.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        setArtists(filteredArtists);
      } catch (error) {
        console.error("Erro ao buscar artistas:", error);
        setArtists([]);
      }
    };

    fetchArtists();
  }, [searchTerm, setArtists]);

    return(
        <nav className="header__navigation">
          <div className="navigation">
            <button className="arrow-left">
              <img
                src={smallLeft}
                alt="seta esquerda"
              />
            </button>
            <button className="arrow-right">
              <img
                src={smallRight}
                alt="seta direita"
              />
            </button>
          </div>

          <div className="header__search">
            <img src={search} alt="buscar" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} 
              maxLength="800" 
              autoCorrect="off" 
              autoCapitalize="off" 
              spellCheck="false"
              placeholder="O que você quer ouvir?"
            />
          </div>

          <div className="header__login">
            <button className="subscribe">Inscreva-se</button>
            <button className="login">Entrar</button>
          </div>
        </nav>
        
    )
}

export default Header;