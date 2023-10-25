"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useCollectionWhere = (collection: any, condition: any) => {
  const [data, getData] = useState<any>([]);

  useEffect(() => {
    let collectionRef = db
      .collection(collection)
      .where("uid", "==", condition)
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

export default useCollectionWhere;
