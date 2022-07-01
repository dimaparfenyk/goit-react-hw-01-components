import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendsList from "components/FriendsList/FriendsList";

import user from "./data/user.json";
import stats from "./data/stats.json";
import friends from "./data/friends.json"


export const App = () => {
  return (
    <div>
     <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stats} title={stats.title} />
      <FriendsList friends={friends} />;
    </div>
    
  );
};

console.dir(App)