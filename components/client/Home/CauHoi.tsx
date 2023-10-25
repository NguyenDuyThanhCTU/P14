"use client";
import React from "react";
import { Fragment } from "react";
import { Collapse } from "antd";
import { useContext } from "react";
import { useData } from "@Context/AppProvider";

export default function CauHoi() {
  const { cauhoi } = useData();
  const { Panel } = Collapse;

  const cauHoi = (
    <div className="m-5 rounded-lg">
      <Collapse
        accordion
        className="px-5 bg-gradient-to-bl from-white to-slate-300"
      >
        {cauhoi.map((data: any) =>
          data.status ? (
            <Panel header={data.cauhoi} key={data.uid}>
              <p>
                <strong className="font-bold">Trả lời : </strong>
                {data.cautraloi}
              </p>
            </Panel>
          ) : null
        )}
      </Collapse>
    </div>
  );

  return (
    <Fragment>
      <div className="border-b-2 border-red-500 mx-2 pt-2">
        <div className="flex justify-start font-bold">
          <div className="text-white bg-red-500 pt-1 px-2">
            CÂU HỎI THƯỜNG GẶP
          </div>
        </div>
      </div>
      <div>{cauHoi}</div>
    </Fragment>
  );
}
