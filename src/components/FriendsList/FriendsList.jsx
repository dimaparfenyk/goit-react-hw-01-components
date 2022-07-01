import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendsList = ({ friends }) => {
    return <ul className="friend-list">
     
     {friends.map(friend => {
           
          return <FriendListItem
              key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}/> 
      })}
</ul>  
};

export default FriendsList;