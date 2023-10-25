import { v4 } from "uuid";
import firebase, { db } from "./config";

export const addDocument = (collection: string, data: any) => {
  const query = db.collection(collection);

  query.add({
    ...data,
    uid: v4(),
    status: true,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const delDocument = (collection: string, data: string) => {
  let collectionRef = db.collection(collection).where("uid", "==", data);
  collectionRef.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      doc.ref.delete();
    });
  });
};

export const delAllDocument = (collection: string) => {
  let collectionRef = db.collection(collection);
  collectionRef.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      doc.ref.delete();
    });
  });
};

export const updDocument = (
  collection: string,
  selectedUid: string,
  data: any
) => {
  let collectionRef = db.collection(collection).where("uid", "==", selectedUid);
  collectionRef.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      doc.ref.update(data);
    });
  });
};

export const updAllDocument = (collection: string, data: any) => {
  let collectionRef = db.collection(collection);
  collectionRef.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      doc.ref.update(data);
    });
  });
};

export const uploadFile = async (
  collection: string,
  e: React.ChangeEvent<HTMLInputElement>,
  setPhotoURL: (url: string) => void
) => {
  const file = e.target?.files?.[0];
  if (file) {
    const storageRef = await firebase
      .storage()
      .ref(`${collection}/${file.name}`)
      .put(file);
    const imageSrc = await storageRef.ref.getDownloadURL();
    setPhotoURL(imageSrc);
  }
};

export const generateKeywords = (data: string): string[] => {
  const name = data
    .toLowerCase()
    .split(" ")
    .filter((word) => word);

  const length = name.length;
  let flagArray: boolean[] = [];
  let result: string[] = [];
  let stringArray: string[] = [];

  for (let i = 0; i < length; i++) {
    flagArray[i] = false;
  }

  const createKeywords = (name: string) => {
    const arrName: any = [];
    let curName = "";
    name.split("").forEach((letter) => {
      curName += letter;
      arrName.push(curName);
    });
    return arrName;
  };

  function findPermutation(k: number) {
    for (let i = 0; i < length; i++) {
      if (!flagArray[i]) {
        flagArray[i] = true;
        result[k] = name[i];

        if (k === length - 1) {
          stringArray.push(result.join(" "));
        }

        findPermutation(k + 1);
        flagArray[i] = false;
      }
    }
  }

  findPermutation(0);

  const keywords = stringArray.reduce((acc: any, cur: any) => {
    const words = createKeywords(cur);
    return [...acc, ...words];
  }, []);

  return keywords;
};
