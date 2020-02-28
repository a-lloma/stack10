import React, { useState, useEffect } from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

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

  async function handleAddDev(e) {
    e.preventDefault();

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username"
              value={github_username}
              onChange={e => setGithub_username(e.target.value)}
              required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs"
              value={techs}
              onChange={e => setTechs(e.target.value)}
              required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" value={latitude}
                onChange={e => setLatitude(e.target.value)}
                required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude"
                onChange={e => setLongitude(e.target.value)}
                value={longitude} required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/35180706?v=4" alt="Palloma" />
              <div className="user-info">
                <strong> Palloma Adolfi</strong>
                <span> ReactJS, React, Vue</span>
              </div>
            </header>
            <p>Dev front-end</p>
            <a href="https://github.com/lloma93">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/35180706?v=4" alt="Palloma" />
              <div className="user-info">
                <strong> Palloma Adolfi</strong>
                <span> ReactJS, React, Vue</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="https://github.com/lloma93">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/35180706?v=4" alt="Palloma" />
              <div className="user-info">
                <strong> Palloma Adolfi</strong>
                <span> ReactJS, React, Vue</span>
              </div>
            </header>
            <p>Dev front-end</p>
            <a href="https://github.com/lloma93">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/35180706?v=4" alt="Palloma" />
              <div className="user-info">
                <strong> Palloma Adolfi</strong>
                <span> ReactJS, React, Vue</span>
              </div>
            </header>
            <p>Dev front-end</p>
            <a href="https://github.com/lloma93">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default App;
