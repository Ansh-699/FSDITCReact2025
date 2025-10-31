import './App.css'
import './profile.css'
import Profile from './profile.jsx'

function App() {
  const profiles = [
    { id: 1, name: "Ansh Tyagi", className: "IT-C", rollno: 25 },
    { id: 2, name: "Priya Singh", className: "IT-A", rollno: 12 },
    { id: 3, name: "Rahul Kumar", className: "IT-B", rollno: 8 },
  ];

  return (
    <div>
      <h1>Profile Page</h1>     
      {profiles.map((profile) => (
         <Profile name={profile.name} className={profile.className} rollno={profile.rollno} />
      ))}
    </div>
  )
}

export default App
