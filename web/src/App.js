import React, { useEffect, useState } from 'react';

// Componente:  Bloco isolado de HTML, CSS e JS o qual não interfere no restante da aplicação
// Propriedade: Informação que um componente pai passa o componente filho 
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGihubUsername] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form action="">
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              type="text"
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGihubUsername(e.target.value)} />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              type="text"
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number"
                name="longitude"
                id="longitude"
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/13579453?s=460&v=4" alt="Anderson Ganhara" />
              <div className="user-info">
                <strong>Anderson Ganhara</strong>
                <span>ReactJS, React Native</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro excepturi adipisci magnam quae. Ipsam dolor fugiat consectetur aspernatur eaque sunt. Vitae, dolorem magni praesentium molestias eaque ipsa earum minus?</p>
            <a href="https://github.com/aganhara">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/13579453?s=460&v=4" alt="Anderson Ganhara" />
              <div className="user-info">
                <strong>Anderson Ganhara</strong>
                <span>ReactJS, React Native</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro excepturi adipisci magnam quae. Ipsam dolor fugiat consectetur aspernatur eaque sunt. Vitae, dolorem magni praesentium molestias eaque ipsa earum minus?</p>
            <a href="https://github.com/aganhara">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/13579453?s=460&v=4" alt="Anderson Ganhara" />
              <div className="user-info">
                <strong>Anderson Ganhara</strong>
                <span>ReactJS, React Native</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro excepturi adipisci magnam quae. Ipsam dolor fugiat consectetur aspernatur eaque sunt. Vitae, dolorem magni praesentium molestias eaque ipsa earum minus?</p>
            <a href="https://github.com/aganhara">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/13579453?s=460&v=4" alt="Anderson Ganhara" />
              <div className="user-info">
                <strong>Anderson Ganhara</strong>
                <span>ReactJS, React Native</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro excepturi adipisci magnam quae. Ipsam dolor fugiat consectetur aspernatur eaque sunt. Vitae, dolorem magni praesentium molestias eaque ipsa earum minus?</p>
            <a href="https://github.com/aganhara">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
