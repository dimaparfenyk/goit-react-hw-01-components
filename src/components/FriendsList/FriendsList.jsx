import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendsList = ({ friends }) => {   // <------ У компонента один параметр-объект
    return <ul className="friend_list">
     
     {friends.map(({id, avatar, name, isOnline}) => {
            return <FriendListItem
            key={id}                  // <--------key дается на самый верхний эл-т внутри мэпа
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          /> 
      })}
    </ul>      
};
 
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id:PropTypes.number.isRequired,  
        })
    ).isRequired,
};

export default FriendsList;