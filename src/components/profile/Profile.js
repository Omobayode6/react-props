import React from "react";


const handleName = (profileName) => alert(`The profile name is ${profileName}`);



const Profile = ({user, handleName})=>{
  return(
    <div className="user">
      <img src= {require('../assests/user_profile.png')} alt={user.fullName} style= {{width: "100px"}} />
      <h2 onClick={() => handleName(user.fullName) }>{user.fullName}
      </h2>
      <h4>{user.profession}</h4>
      <p>{user.bio}</p> 
    </div>
  )
}


export  default Profile;
export {handleName};