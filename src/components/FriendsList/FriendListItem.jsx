import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline}) => {
    return (<li className="item">
        <span className={String(isOnline)}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className={name}>{name}</p>
    </li>);
};

export default FriendListItem;

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
}