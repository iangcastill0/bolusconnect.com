import './App.css';

function App() {
  const sections = [
    {
      id: 'home',
      title: 'Home',
      description:
        'Welcome to Bolus Connect, your companion for managing bolus insulin doses.',
      image:
        'https://via.placeholder.com/600x400?text=' +
        encodeURIComponent('Home')
    },
    {
      id: 'dashboard',
      title: 'Dashboard',
      description:
        'Quick summary of recent boluses and glucose levels to keep you informed at a glance.',
      image:
        'https://via.placeholder.com/600x400?text=' +
        encodeURIComponent('Dashboard')
    },
    {
      id: 'calculator',
      title: 'Bolus Calculator',
      description:
        'Calculate suggested bolus doses based on carb intake and current glucose.',
      image:
        'https://via.placeholder.com/600x400?text=' +
        encodeURIComponent('Bolus Calculator')
    },
    {
      id: 'meals',
      title: 'Meal Planner',
      description:
        'Store favorite meals and carb counts for fast entry when it is time to eat.',
      image:
        'https://via.placeholder.com/600x400?text=' +
        encodeURIComponent('Meal Planner')
    },
    {
      id: 'logbook',
      title: 'Logbook',
      description:
        'Review historical bolus entries and personal notes for better tracking.',
      image:
        'https://via.placeholder.com/600x400?text=' +
        encodeURIComponent('Logbook')
    },
    {
      id: 'reminders',
      title: 'Reminders',
      description:
        'Set notifications so you never miss an important dose or check.',
      image:
        'https://via.placeholder.com/600x400?text=' +
        encodeURIComponent('Reminders')
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description:
        'Visualize trends in insulin usage and glucose response over time.',
      image:
        'https://via.placeholder.com/600x400?text=' +
        encodeURIComponent('Analytics')
    },
    {
      id: 'profile',
      title: 'Profile',
      description:
        'Manage your personal and medical information in one secure place.',
      image:
        'https://via.placeholder.com/600x400?text=' +
        encodeURIComponent('Profile')
    },
    {
      id: 'settings',
      title: 'Settings',
      description:
        'Customize Bolus Connect to fit your preferences and needs.',
      image:
        'https://via.placeholder.com/600x400?text=' +
        encodeURIComponent('Settings')
    }
  ];

  return (
    <div className="App">
      <header>
        <h1>Bolus Connect</h1>
      </header>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="section">
          <h2>{section.title}</h2>
          <img src={section.image} alt={`${section.title} screenshot`} />
          <p>{section.description}</p>
        </section>
      ))}
    </div>
  );
}

export default App;
