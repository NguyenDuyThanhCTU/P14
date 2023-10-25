"use client";
import { Divider } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import React, { Fragment, useContext } from "react";
import { AiOutlineAreaChart } from "react-icons/ai";
import { AppContext } from "../../Context/AppProvider";

export default function DoanhThu() {
  const { doanhthu } = useContext(AppContext);
  const generateOptions = (data: any) => {
    const categories = data.map((data: any) =>
      moment.unix(data.createdAt).format("DD/MM")
    );
    return {
      chart: {
        height: 500,
      },
      title: {
        text: "Doanh thu",
      },
      xAxis: {
        categories: categories,
        crosshair: true,
      },
      colors: ["blue"],
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
        labels: {
          align: "right",
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y} VNĐ</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Doanh thu",
          data: data.map((data: any) => data.tongtien),
        },
      ],
    };
  };
  return (
    <Fragment>
      <div className="m-5">
        <div className="shadow-lg p-3 my-3 bg-gray-200 flex justify-start w-full">
          <strong className="text-red-500 mr-2">Trang quản lý </strong>/ Doanh
          thu
        </div>
        <Divider orientation="center">
          <div className="flex items-center text-lg font-bold text-blue-500">
            <AiOutlineAreaChart className="mr-2" /> QUẢN LÝ DOANH THU
          </div>
        </Divider>
      </div>
      <div className="m-5">
        <HighchartsReact
          highcharts={Highcharts}
          options={generateOptions(doanhthu)}
        />
      </div>
    </Fragment>
  );
}
