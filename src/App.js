import logo from './logo.svg';
import './App.css';
import PersonalPage from './PersonalPage';
import Cities from './Cities';

function App() {

  const myInfo = {
    name: "Anton",
    surname: "Vladimirovich",
    lastname: "Belukha",
    phone: "+380974572106",
    gmail: "forsakenanton@gmail.com",
    city: "Krivoy Rog",
    workExperience: "12 years",
    skills: [
      "skill one",
      "skill two",
      "skill three",
    ]
  };

  let cities = [
    "Krivoy Rog",
    "Kiev",
    "Lvov"
  ];

  return (
    <div className="App">
      <PersonalPage user={myInfo}></PersonalPage>
      <hr/>
      <hr/>
      <Cities cities={cities}></Cities>
    </div>
  );
}

export default App;
