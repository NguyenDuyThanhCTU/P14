import PageNewsDetail from "@components/client/Page/PageNewsDetail";

import React from "react";

const NewsDetailPage = async () => {
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-[url(https://firebasestorage.googleapis.com/v0/b/nongsanthuysanthienngoc.appspot.com/o/slidershow%2Fz4853720778081_5ed40331562ccb233380b133257a1b83.jpg?alt=media&token=5be1f27b-3228-4a2f-889b-e3453d3009d7)]">
        <div className="bg-[rgba(255,255,255,0.91)]">
          <PageNewsDetail />
        </div>
      </div>
    </>
  );
};

export default NewsDetailPage;
