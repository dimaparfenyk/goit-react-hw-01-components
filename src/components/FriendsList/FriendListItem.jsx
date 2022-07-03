import PropTypes from 'prop-types';
import css from './friend.module.css';
import { iconSize } from 'constance';

const FriendListItem = ({ avatar, name, isOnline}) => {
   
  return (<li className={css.item}>
        <span className={css[isOnline]}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width={iconSize.lg} />
        <p className={css.name}>{name}</p>
    </li>
    );
   
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default FriendListItem;