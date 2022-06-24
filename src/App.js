import React from 'react';
import './App.css';
import Profile from "./components/profile/Profile"


function App() {
   
  const handleName = (name) => {
     alert(`The profile user is ${name}`)
  }


  return (
    <div className="App">
      <img src= {require('./components/assests/user_profile.png')} alt="Omobayode" />
      <Profile fullName = {"Omobayode Festus"}  
      bio = {"A web developer wit a very strong visual perception of design, ❤ simplicity, and white spaces"}
      Profession = {"Web Developer"}
      handleName = {handleName}
      />
    </div>
  );
}

export default App;
