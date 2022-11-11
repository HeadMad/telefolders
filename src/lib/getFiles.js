import { app } from "./firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

  

export default async function(path, userId) {
  if (path === '/')
  throw new Error('You must chous the folder');
  path = 'Files/' + path.replace(/^\/(.+)?\/?$/, '$1').split('/').join('/Files/') + '/Files';

  const result = [];
  const db = getFirestore(app);
  const querySnapshot = await getDocs(collection(db, path))
  querySnapshot.forEach((doc) => {
    console.log(doc)
      result.push(doc.data())
  });
  return result;
}