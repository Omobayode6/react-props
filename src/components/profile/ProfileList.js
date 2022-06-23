import React from "react";
import Profile, {handleName} from "./Profile";


const ProfileList = ({usersProfile}) =>{
  
  return(
    <div>
    {usersProfile.map((user, key) =>(
      <Profile user = {user} key = {key} handleName = {handleName} />

    ))}
    </div>
  )
}

export default ProfileList;