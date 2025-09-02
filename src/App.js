import './App.css';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  const sections = [
    {
      id: 'home',
      image: '/assets/home.png',
      title: 'Home',
      description: 'Welcome to Bolus-Connect, your companion for helping calculate bolus doses.',
    },
    {
      id: 'Logs',
      title: 'Logs',
      description: 'Logs provide a quick summary of recent boluses,glucose levels, and carbs to keep you informed at a glance.',
      image: '/assets/logs.png'
    },
    {
      id: 'calculator',
      title: 'Bolus Calculator',
      description: 'The bolus tab helps Calculate suggested bolus doses based on carb intake and current glucose.',
      image: '/assets/bolus.png'
    },
        {
      id: 'results',
      title: 'Bolus Results ',
      description: 'view your suggested bolus dosage',
      image: '/assets/bolusresult.png'
    },
    {
      id: 'settings',
      title: 'Settings',
      description: 'View your profile',
      image: '/assets/settings.png'
    },
    {
      id: 'parameters',
      title: 'Bolous Parameters',
      description: 'The Parameters tab allows you to set your CGM manufacturer, insulin-to-carb (I:C) ratio, target glucose, and insulin sensitivity factor (ISF)',
      image: '/assets/bolusparameters.png'
    },
    {
      id: 'nutrition',
      title: 'AI Powered Nutritional Lookup',
      description: 'Look up nutritional facts such as carbs and sugars all in one app with ChatGPT integration.',
      image: '/assets/nutrition.png'
    }
  ];

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Bolus-Connect</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home sections={sections} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
