import Image from "next/image";
import Navbar from "@/components/Navbar";
import UploadForm from "@/components/UploadForm";
import ImageGallery from "@/components/ImageGallery";

export default function Home() {
  return (
    <div className=" mx-auto h-screen  overflow-hidden ">
      <Navbar />
      <UploadForm />
      <ImageGallery />
    </div>
  );
}
