export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`<rejected> Error: ${filename} cannot be processed`));
}
