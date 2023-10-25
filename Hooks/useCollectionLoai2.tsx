"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useCollectionLoai2 = (collection: any, condition: any) => {
  const [data, getData] = useState<any>([]);

  useEffect(() => {
    let collectionRef = db
      .collection(collection)
      .where("loai2", "==", condition)
      .orderBy("createdAt");
    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      getData(data.reverse());
    });
    return unsubscribe;
  }, [collection, condition]);
  return data;
};

export default useCollectionLoai2;
