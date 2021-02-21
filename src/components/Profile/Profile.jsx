import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';
console.log(styles)


const Profile=({name, tag, location, avatar, stats})=> 

      (<div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={styles.avatar}
    />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
    <ul className={styles.stats}>
    {Object.keys(stats)
    .map((key)=>(        
    <li key={key} className={styles.stats_item}>
      <span className={styles.stats_item_label}>{key}</span>
      <span className={styles.stats_item_data}>
      {key==="followers"&&stats[key]===0?'No followers':stats[key]}
      </span>
    </li>))}
    </ul>
   
  </div>
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