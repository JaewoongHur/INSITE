import { getButtonDetail } from "@api/accumulApi";
import { ButtonType } from "@customtypes/dataTypes";
import { RootState } from "@reducer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function ClickCount() {
  const selectedButton = useSelector(
    (state: RootState) => state.SelectedItemInfo.selectedButton,
  );
  const [data, setData] = useState<ButtonType[]>([]);
  // const [seriesData, setSeriesData] = useState<[number, number][]>();
  // const dummy = [
  //   {
  //     id: 0,
  //     counts: 100,
  //     date: "2023-11-03",
  //   },
  //   {
  //     id: 0,
  //     counts: 5,
  //     date: "2023-11-04",
  //   },
  //   {
  //     id: 0,
  //     counts: 5,
  //     date: "2023-11-08",
  //   },
  //   {
  //     id: 1,
  //     counts: 6,
  //     date: "2023-11-09",
  //   },
  //   {
  //     id: 2,
  //     counts: 15,
  //     date: "2023-11-10",
  //   },
  //   {
  //     id: 3,
  //     counts: 1,
  //     date: "2023-11-11",
  //   },
  //   {
  //     id: 4,
  //     counts: 50,
  //     date: "2023-11-12",
  //   },
  // ];

  useEffect(() => {
    const getDetailData = async () => {
      try {
        const response = await getButtonDetail(selectedButton);
        setData(response.clickCountsDtoList);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error); // 에러 처리
      }
    };
    getDetailData();
  }, [selectedButton]);

  const formattedData = data.map((item) => [
    new Date(item.date).getTime(),
    item.counts,
  ]);

  const options = {
    credits: {
      enabled: false, // 워터마크 제거
    },
    accessibility: {
      enabled: false,
    },
    rangeSelector: {
      selected: 1,
    },
    xAxis: {
      title: "",
      type: "datetime",
      labels: {
        style: {
          color: "white",
        },
        format: "{value:%y-%m-%d}", // 날짜 형식 지정
      },
    },
    yAxis: {
      title: "",
      min: 0,
      tickInterval: 10, // 레이블 간격 설정
      labels: {
        style: {
          color: "white",
        },
        format: "{value}회", // 레이블 형식 지정
      },
    },
    chart: {
      marginTop: 30,
      borderRadius: 15,
      title: "",
      backgroundColor: "black",
      width: 350,
      height: 290,
    },
    title: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Counts",
        data: formattedData,
        tooltip: {
          valueDecimals: 0,
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default ClickCount;
