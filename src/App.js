import './App.css';

function App() {
  const sections = [
    {
      id: 'home',
      title: 'Home',
      description:
        'Welcome to Bolus Connect, your companion for managing bolus insulin doses.'
    },
    {
      id: 'dashboard',
      title: 'Dashboard',
      description:
        'Quick summary of recent boluses and glucose levels to keep you informed at a glance.'
    },
    {
      id: 'calculator',
      title: 'Bolus Calculator',
      description:
        'Calculate suggested bolus doses based on carb intake and current glucose.'
    },
    {
      id: 'meals',
      title: 'Meal Planner',
      description:
        'Store favorite meals and carb counts for fast entry when it is time to eat.'
    },
    {
      id: 'logbook',
      title: 'Logbook',
      description:
        'Review historical bolus entries and personal notes for better tracking.'
    },
    {
      id: 'reminders',
      title: 'Reminders',
      description:
        'Set notifications so you never miss an important dose or check.'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description:
        'Visualize trends in insulin usage and glucose response over time.'
    },
    {
      id: 'profile',
      title: 'Profile',
      description:
        'Manage your personal and medical information in one secure place.'
    },
    {
      id: 'settings',
      title: 'Settings',
      description:
        'Customize Bolus Connect to fit your preferences and needs.'
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
          <img
            src={`https://via.placeholder.com/600x400?text=${encodeURIComponent(
              section.title
            )}`}
            alt={`${section.title} screenshot`}
          />
          <p>{section.description}</p>
        </section>
      ))}
    </div>
  );
}

export default App;
