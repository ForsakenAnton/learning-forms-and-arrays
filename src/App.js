import logo from './logo.svg';
import './App.css';
import PersonalPage from './PersonalPage';
import Cities from './Cities';
import ValidationForm from './ValidationForm';
import MusicGroupsList from './MusicGroupsList';

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

  let musicGroups = [
    "Dream Theater",
    "Flying Colors", 
    "Rage", 
    "Blind Guardian",  
  ];

  return (
    <div className="App">
      <p>На фронт энд культурно забил, так что не пугаемся</p>
      <h2>Лабораторная работа</h2>
      <PersonalPage user={myInfo}></PersonalPage>
      <hr/>
      <Cities cities={cities}></Cities>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <h2>Домашняя работа</h2>
      <ValidationForm></ValidationForm>
      <hr/>
      <MusicGroupsList musicGroups={musicGroups}></MusicGroupsList>
    </div>
  );
}

export default App;
