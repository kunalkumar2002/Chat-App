export const getSender = (loggedUser, users) => {
  // Check if both users[0] and users[1] are defined
  if (users[0]?.name && users[1]?.name) {
    // Check if the first user is the logged-in user
    if (users[0]._id === loggedUser._id) {
      return users[1].name; // Return the name of the second user
    } else {
      return users[0].name; // Return the name of the first user
    }
  } else {
    // Handle the case when either users[0] or users[1] is undefined
    return "Unknown"; // or any default value
  }
};
export const getSenderFull = (loggedUser, users) => {
  // Check if both users[0] and users[1] are defined
  if (users[0]?.name && users[1]?.name) {
    // Check if the first user is the logged-in user
    if (users[0]._id === loggedUser._id) {
      return users[1]; // Return the name of the second user
    } else {
      return users[0]; // Return the name of the first user
    }
  } else {
    // Handle the case when either users[0] or users[1] is undefined
    return "Unknown"; // or any default value
  }
};
