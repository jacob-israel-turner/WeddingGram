export const handlePictureTaken = pic => {
  return new Promise((resolve, reject) => {
    console.log(pic);
    resolve(Math.floor(Math.random() * 1000));
  })
}
