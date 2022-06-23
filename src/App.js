import React from 'react';
import './App.css';
import ProfileList from './components/profile/ProfileList';


function App() {

  const usersProfile = [
    {
      fullName: `Omobayode Festus`,
      profession: `Web Developer`,
      bio: 'A web developer wit a very strong visual perception of design, ❤ simplicity, and white spaces.',
      
    },
    {
      fullName: `John Brown`,
      profession: `UI/UX`,
      bio: 'A Ui/UX that takes delight in web accessibility and users.',
    },
    {
      fullName: `Temitayo Solomon`,
      profession: `Data Analyst`,
      bio: 'A data analyst who loves easearch and interpretation of datas to solve problem.',
    },
  ]



  return (
    <div className="App">
     <ProfileList usersProfile = {usersProfile} />
    </div>
  );
}

export default App;
