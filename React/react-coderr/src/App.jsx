import './App.css';
import './profile.css';
import Profile from './profile.jsx';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const profiles = [
    { id: 1, name: "Atharv Chauhan", className: "IT-C", rollno: 25 },
    { id: 2, name: "Priya Singh", className: "IT-A", rollno: 12 },
    { id: 3, name: "Rahul Kumar", className: "IT-B", rollno: 8 },
    { id: 4, name: "Sneha Sharma", className: "IT-D", rollno: 19 },
  ];

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Profile Page</h1>

      <div className="profile-list">
        {profiles.map((profile) => (
          <Profile
            key={profile.id}
            name={profile.name}
            className={profile.className}
            rollno={profile.rollno}
          />
        ))}
      </div>

      <div className="counter">
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

export default App;
