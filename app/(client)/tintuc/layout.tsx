import React from "react";

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-cover bg-no-repeat bg-[url(https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2Fz4853720778081_5ed40331562ccb233380b133257a1b83.jpg?alt=media&token=5be1f27b-3228-4a2f-889b-e3453d3009d7)]">
      <div className="bg-[rgba(255,255,255,0.56)]">
        <div className=" py-5 p:w-auto d:w-[80vw] p:mx-auto d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
