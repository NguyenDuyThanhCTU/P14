"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useCollection = (collection: any) => {
  const [data, getData] = useState([]);

  useEffect(() => {
    let collectionRef = db.collection(collection).orderBy("createdAt");
    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const data: any = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      getData(data.reverse());
    });
    return unsubscribe;
  }, [collection]);
  return data;
};

export default useCollection;
