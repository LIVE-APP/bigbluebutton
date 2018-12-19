import { makeCall } from '/imports/ui/services/api/index';
import Users from '/imports/api/users';
import mapUser from '/imports/ui/services/user/mapUser';
import Auth from '/imports/ui/services/auth';
import enMeeting  from '/imports/ui/services/api/logout';

const endMeeting = () => {
//  makeCall('endMeeting', Auth.credentials);
enMeeting('endMeeting', Auth.credentials);

  //makeCall('endMeeting', Auth.credentials);
  
};

const isModerator = () => {
  const currentUserId = Auth.userID;
  const currentUser = Users.findOne({ userId: currentUserId });

  return (currentUser) ? mapUser(currentUser).isModerator : null;
};

export {
  endMeeting,
  isModerator,
};
