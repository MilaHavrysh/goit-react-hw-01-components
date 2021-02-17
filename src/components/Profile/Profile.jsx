import React from 'react';
import PropTypes from 'prop-types';

const Profile=({name, tag, location, avatar, stats:{followers, views, likes }})=> 

      (<div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
      className="avatar"
    />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers: </span>
      {followers===0?(<span>user has no followers, you can be the first</span>):
      <span className="quantity">{followers}</span>}
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>)

Profile.propTypes={
  name: PropTypes.string.isRequired, 
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats:PropTypes.shape({
      followers:PropTypes.number,
      views:PropTypes.number,
      likes:PropTypes.number,
    }).isRequired 
}

export default Profile;