import Contact from "@components/client/Page/Contact";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div className="flex flex-col d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-5">
        <div>
          <div className="uppercase font-bold text-[1.5rem] ">
            <div className="hover:text-mainblue before:w-[50px] before:h-[1px] before:inline-block  before:bg-black before:mr-2 ">
              Liên hệ
            </div>
          </div>
        </div>
        <>
          <Contact />
        </>
      </div>
    </div>
  );
};

export default ContactPage;
