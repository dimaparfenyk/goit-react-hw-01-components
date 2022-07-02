import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendsList from "components/FriendsList/FriendsList";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";

import user from "./data/user.json";
import stats from "./data/stats.json";
import friends from "./data/friends.json";
import transactions from './data/transactions.json';


export const App = () => {
  return (
    <div>
     <Profile
        username={user.username}  // <--------NB!!! св-ва будущего объекта props
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        stats={stats}           // <--------NB!!! св-ва будущего объекта props
        title={stats.title}
      />
      
      <FriendsList
        friends={friends}     // <--------NB!!! св-ва будущего объекта props
      />

      <TransactionHistory items={transactions}/>
    </div>
    
  );
};
