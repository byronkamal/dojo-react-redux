import React from 'react';
import { browserHistory } from 'react-router';
const NavBar = () => {

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <a onClick={ () => browserHistory.push("/")} className="brand-logo">Exemplo de Rotas</a>
          <ul className="right hide-on-med-and-down">
            <li><a onClick={ () => browserHistory.push("/buscar_filme")}>Buscar Filme</a></li>
            <li><a onClick={ () => browserHistory.push("/resultado")}>Resultado da Busca</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
