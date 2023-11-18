import React from "react";
import "../../styles/MyProfileComponent/ShortProfile.css";

const FeedSidebar = ({userData}) => {
  return (
    <div className="feed-container">
      <div className="profile-photo">
      <img src={ userData.profileImage ?`http://localhost:4000/fetchProfileImage/${userData.profileImage}` : `/images/user-profile-photo.svg`} alt="User Profile Photo" />

      </div>
      <h1 className="user-name">
        {userData.firstName} {userData.lastName}
      </h1>
      <p className="user-headline">{userData.headline}</p>
      <p className="user-conections">646 followers * 500+ connections</p>
    </div>
  );
};

export default FeedSidebar;
