import React from "react";
import PropTypes from "prop-types";


const Profile = (props) => {

  //destructuring props
  const {fullName, bio, Profession, handleName} = props
  
  return (
    <div className="user">
      <h2>{fullName}</h2>
      <h4>{Profession}</h4>
      <p>{bio}</p>
      <button onClick={() => handleName(fullName)}>Click Me</button>
      {/* <div>{props.children}</div> */}
    </div>
  )
}

PropTypes.Profile = {
    fullName: PropTypes.string,
    Profession: PropTypes.string,
    bio: PropTypes.string, 
}

Profile.defaultProps = {
  fullName: "John Brown",
  Profession: "UI/UX",
  bio: "A Ui/UX that takes delight in web accessibility and users." 
  }



export default Profile