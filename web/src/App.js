import React from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
