import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <MainContent />
    </div>
}
 
export default App;
import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="image 49.png" alt="L-MOBILE" />
      </div>
      <nav>
        <ul className="menu">
          <li><a id="lien" href="#"><i className="fas fa-home" id="icon"></i>Dashboard</a></li>
          <li><div className="container"><i className="fas fa-tasks" id="icon"></i><a id="lien" href="#">Service order</a></div></li>
          <li><div className="container"><i className="fas fa-users" id="icon"></i><a id="lien" href="#">Users</a></div></li>
          <li><div className="container"><i className="fas fa-building" id="icon"></i><a id="lien" href="#">Companies</a></div></li>
          <li><div className="container"><i className="fas fa-newspaper" id="icon"></i><a id="lien" href="#">Articles</a></div></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
