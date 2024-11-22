import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  const results = await Promise.allSettled([signUpPromise, uploadPromise]);

  return results.map(result => ({
    status: result.status,
    value: result.status === 'fulfilled'
      ? result.value
      : result.reason.message
  }));
}
