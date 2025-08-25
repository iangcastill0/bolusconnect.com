import './App.css';

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
      <header>
        <h1>Bolus-Connect</h1>
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
