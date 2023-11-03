import PageTinTuc from "@components/client/Page/PageTinTuc";
import React from "react";

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="py-5 p:w-auto d:w-[80vw] p:mx-auto d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10">
        {children}
      </div>
    </>
  );
};

export default NewsLayout;
