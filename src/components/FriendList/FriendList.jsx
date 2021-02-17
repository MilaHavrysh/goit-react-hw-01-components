import React from "react";
import PropTypes from 'prop-types';

const FriendList=({friends})=>(
<ul className="friend-list">
 {friends.map(({id, avatar, name, isOnline})=>(
   <li key={id} className="item">
     <span className="status">{isOnline}</span>
     <img className="avatar" src={avatar} alt="" width="48" />
     <p className="name">{name}</p>
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