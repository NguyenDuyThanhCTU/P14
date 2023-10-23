"use client";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { SiZalo } from "react-icons/si";

function Hotline() {
  const { SocialMedia, ContactData } = useData();

  return (
    <div className="fixed bottom-7 right-10  box-border flex flex-col gap-5">
      <div className="d:flex  p:hidden items-center ">
        <Link
          href={`https://${SocialMedia[0]}`}
          className="h-14 w-14 p-2 bg-blue-500  flex items-center rounded-full justify-center"
        >
          <SiZalo className="text-white text-[40px]" />
        </Link>
      </div>
      <div className="flex items-center ">
        <Link
          href={`https://m.me/alphasmart368`}
          className="h-14 w-14 bg-blue-400 border  text-white flex items-center rounded-full justify-center"
        >
          <BsMessenger className=" w-full h-full p-3" />
        </Link>
      </div>
      <div className="p:hidden d:flex items-center ">
        <Link
          href={`${ContactData.location}`}
          className="h-14 w-14 bg-orange-500 border  text-white flex items-center rounded-full justify-center"
        >
          <IoLocationSharp className=" w-full h-full p-3" />
        </Link>
      </div>
      <Link href={`tel:${ContactData.phone}`}>
        <div className="flex items-center">
          <div className="text-black font-semibold d:flex p:hidden justify-start items-center rounded-full w-[250px]  h-[60px] bg-white shadow-2xl absolute right-5">
            <span className="ml-5">Liên hệ với chúng tôi</span>
          </div>
          <div className="h-14 w-14   call-animation">
            <BiPhoneCall className="text-white text-[40px]" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Hotline;
