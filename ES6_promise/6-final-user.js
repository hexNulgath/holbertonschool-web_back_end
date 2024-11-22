import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPromise]).then(results => {
    return results.map(result => ({
      status: result.status,
      value: result.status === 'fulfilled'
        ? result.value // This will be the user object
        : `Error: ${result.reason.message}` // This will be the error message
    }));
  });
}
