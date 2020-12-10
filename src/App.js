import logo from './logo.svg';
import './App.css';
import PersonalPage from './PersonalPage';
import Cities from './Cities';
import ValidationForm from './ValidationForm';

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
    </div>
  );
}

export default App;
