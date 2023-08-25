"use client";
import { db } from "@/firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";

type Image = {
  created_at: Date;
  userEmail: string;
  imageURL: string;
};
const useFirestore = (collectionName: string) => {
  const [docs, setDocs] = useState<Image[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    let unsubscribe: () => void;
    const getData = async () => {
      try {
        const q = query(collection(db, collectionName), orderBy("created_at", "desc"));
        unsubscribe = onSnapshot(q, (querySnapshot) => {
          const images: Image[] = [];
          querySnapshot.forEach((doc) => {
            const imageURL = doc.data().imageURL;
            const created_at = doc.data().created_at.toDate();
            const userEmail = doc.data().userEmail;
            images.push({ imageURL, created_at, userEmail });
          });
          setDocs(images);
          setIsloading(false);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => unsubscribe && unsubscribe();
  }, [collectionName]);
  return {
    docs,
    isLoading,
  };
};
export default useFirestore;
