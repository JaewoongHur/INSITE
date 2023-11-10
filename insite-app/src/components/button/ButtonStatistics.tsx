import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { ButtonDIstDtoType } from "@customtypes/dataTypes";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@reducer";
import { getButtonDistData } from "@api/accumulApi";

function ButtonStatistics() {
  const [data, setData] = useState<ButtonDIstDtoType[]>([]);
  const [avg, setAvg] = useState<number>(0);

  const startDateTime = useSelector(
    (state: RootState) => state.dateSelectionInfo.start,
  );

  const endDateTime = useSelector(
    (state: RootState) => state.dateSelectionInfo.end,
  );

  useEffect(() => {
    const parseStartDateTime = new Date(startDateTime);
    const parseEndDateTime = new Date(endDateTime);
    const getData = async () => {
      try {
        const response = await getButtonDistData(
          parseStartDateTime,
          parseEndDateTime,
        );
        if (response) {
          setAvg(response.totalAvg);
          setData(response.buttonDistDtoList);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error); // 에러 처리
      }
    };
    getData();
  }, [endDateTime, startDateTime]);

  const transformedData = data.map((item) => ({
    name: item.name,
    clickCounts: item.clickCounts,
    percentage: parseFloat(item.increaseDecreaseRate.toFixed(4)),
  }));

  const options = {
    credits: {
      enabled: false,
    },
    accessibility: {
      enabled: false,
    },
    chart: {
      type: "column",
      marginTop: 30,
      width: 450,
      height: 300,
      borderRadius: 15,
      backgroundColor: "transparent",
      scrollablePlotArea: {
        minWidth: 300,
        scrollPositionX: 1,
      },
    },
    title: {
      text: "",
      style: {
        color: "white",
      },
    },
    xAxis: {
      categories: transformedData.map((item) => item.name),
      title: {
        text: "",
        style: {
          color: "white",
        },
      },
      labels: {
        style: {
          color: "white",
        },
      },
    },
    yAxis: [
      {
        title: {
          text: "",
          style: {
            color: "white",
          },
        },
        labels: {
          style: {
            color: "white",
          },
        },
      },
      {
        title: {
          text: "",
          style: {
            color: "white",
          },
        },
        labels: {
          style: {
            color: "white",
          },
        },
        opposite: true,
      },
    ],
    tooltip: {
      shared: true,
      style: {
        color: "black",
      },
    },
    legend: {
      itemStyle: {
        color: "white",
      },
    },
    series: [
      {
        name: "클릭 수",
        data: transformedData.map((item) => item.clickCounts),
        yAxis: 0,
        dataLabels: {
          style: {
            color: "white",
          },
        },
        color: "#6646ef",
      },
      {
        name: "증감률",
        data: transformedData.map((item) => item.percentage),
        yAxis: 1,
        type: "line",
        dataLabels: {
          style: {
            color: "white",
          },
        },
        color: "#0db6e0",
      },
      {
        name: "클릭 평균",
        data: Array(data.length).fill(parseFloat(avg.toFixed(2))),
        yAxis: 0,
        type: "line",
        dataLabels: {
          style: {
            color: "white",
          },
        },
        color: "#00f194",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default ButtonStatistics;
