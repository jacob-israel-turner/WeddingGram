import { rootRef, fireStack } from './constants'

export const handlePictureTaken = async pic => {
  pic.timestamp = new Date().getTime()
  console.log(pic.path)
  const uploadResults = await fireStack.uploadFile(`images/${pic.name}-${pic.timestamp}.jpg`, pic.path, {}, function(){})
  console.log(uploadResults)
  return uploadResults;
}
