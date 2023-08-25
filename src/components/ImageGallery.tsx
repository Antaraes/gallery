"use client";
import Image from "next/image";
import { FC } from "react";
import useFirestore from "@/hooks/useFirestore";
import "react-loading-skeleton/dist/skeleton.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/config";
import useAuth from "@/hooks/useAuth";
interface ImageGalleryProps {}

const ImageGallery: FC<ImageGalleryProps> = ({}) => {
  const { docs: images, isLoading } = useFirestore("images");
  const { user } = useAuth();
  const savedImagesCollection = collection(db, "savedImages");

  return (
    <div className="w-full h-[500px] overflow-y-auto mt-10">
      <div className=" image-container">
        {images.map((item, index) => (
          <div key={index} className="mb-5 image-box group relative">
            <Image
              src={item.imageURL}
              alt={item.imageURL}
              className="w-full rounded-2xl img"
              width={200}
              height={200}
            />
            <div className="absolute w-full h-full flex flex-col justify-between items-end opacity-0 left-0 top-0 p-5 fd-sh group-hover:opacity-100 bg-darksecondary bg-opacity-50">
              <div>
                <button
                  className="btn"
                  onClick={async () => {
                    try {
                      await addDoc(savedImagesCollection, {
                        userEmail: user?.email, // You can replace this with the actual user's email
                        imageURL: item.imageURL,
                        saved_at: new Date(),
                      });
                      console.log("Image saved successfully!");
                    } catch (error) {
                      console.error("Error saving image:", error);
                    }
                  }}
                >
                  Save
                </button>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <p className=" text-darktext text-2xl">...</p>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href={item.imageURL}
                        download
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Download Image
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Report Pin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
