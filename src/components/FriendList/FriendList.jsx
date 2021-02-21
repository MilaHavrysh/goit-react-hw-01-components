import React from "react";
import PropTypes from 'prop-types';
import styles from './FriendList.module.css'

const FriendList=({friends})=>(
<ul className={styles.friend_list}>
 {friends.map(({id, avatar, name, isOnline})=>(
   
   <li key={id} className={styles.item}>
     <span className={styles.is_online}
     style={{backgroundColor:isOnline?"#008000":'red'}}
     >
     </span>     
     <img className={styles.avatar} src={avatar} alt="" width="48" />
     <p className={styles.name}>{name}</p>
   </li>))}
</ul>)

FriendList.propTypes={
friends:PropTypes.arrayOf(
  PropTypes.shape({
id:PropTypes.number,
avatar:PropTypes.string,
name: PropTypes.string,
isOnline:PropTypes.bool,
}).isRequired
)}


export default FriendList