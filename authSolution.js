//Solution using a more robust approach with error handling and potential retries
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    console.log('User is signed in:', user);
  } else {
    // No user is signed in.
    console.log('No user is signed in.');
  }
}).catch(error => {
  // Handle potential errors during authentication state changes
  console.error('Error in onAuthStateChanged:', error);
  //Implement retry mechanism or alternative solution as needed
});