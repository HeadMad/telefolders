import { app } from "./firebase";
import { getFirestore, collection, getDocs,  } from "firebase/firestore";

  

export default async function(path, userId) {
  path = 'Files/' + path.replaceAll('/', '/Files/') + '/Files';

  const result = [];
  const db = getFirestore(app);
  const filesRef = collection(db, path);
  const querySnapshot = await getDocs(filesRef)
  querySnapshot.forEach((doc) => {
    console.log(doc)
      result.push(doc.data())
  });
  result.sort((f1, f2) => f2.date - f1.date)
  return result;
}