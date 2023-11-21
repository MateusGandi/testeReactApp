import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link  } from 'react-router-dom';
import LoginPage from './views/LoginPage.js';
import NavBar from './components/NavBar.js';
import BarbeariasPage from './views/BarbeariasPage.js';
import DesktopPage from './components/desktop-page.js';
import DesktopBeginPage from './components/desktop-begin-page.js';
import PerfilPage from './views/PerfilPage.js';
import AgendamentoPage from './views/AgendamentoPage.js';
import { useHistory } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <>
      <nav>
          <ul>
            <li>
              <Link to="/login">About</Link>
            </li>
            <li>
              <Link to="/perfil">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Rotas */}
        <Routes>
          {/* Rota para a página de login */}
          <Route path="/login" element={<LoginPage />} />

          {/* Rota para a página de barbearias */}
          <Route path="/barbearias" element={<BarbeariasPage />} />

          {/* Rota para a página do perfil */}
          <Route path="/perfil" element={<PerfilPage />} />

          {/* Rota para a página de agendamento */}
          <Route path="/agendamento" element={<AgendamentoPage />} />

          {/* Página inicial (caso nenhuma rota corresponda) */}
          <Route path="/" element={<DesktopBeginPage />} />

          {/* Página padrão para rotas não correspondentes */}
          <Route path="*" element={<DesktopPage />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
