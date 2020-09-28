import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "../../common/components/Chart";
import { mapToChartData } from "../../common/utils/mapData";
import AppButton from "../../common/components/AppButton";
import appConstants from "../../common/constants/appConstants";
import Loader from "../../common/components/Loader";
import PropTypes from "prop-types";

const Home = ({ theme }) => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("ohlc");

  useEffect(() => {
    getData();
    return () => {};
  }, []);
  const getData = async () => {
    //Checking Internet Connection
    let online = window.navigator.onLine;
    if (online) {
      try {
        const res = await axios.get(
          `${appConstants.BASE_URL}/api/historical?interval=1`
        );

        let data = res.data;
        let historicalData = mapToChartData(data);
        localStorage.setItem("historicalData", JSON.stringify(historicalData));
        setData(historicalData);
      } catch (error) {
        console.log(error);
      }
    } else {
      if (localStorage.getItem("historicalData")) {
        const historicalData = JSON.parse(
          localStorage.getItem("historicalData")
        );
        setData(historicalData);
      }
    }
  };
  return (
    <div className="home-container">
      {data.length > 0 ? (
        <>
          <AppButton type={type} setType={setType} />

          <Chart
            chartData={data}
            type={type}
            title={"Historical Data"}
            theme={theme ? "dark2" : "light2"}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
//Default Props
Home.defaultProps = {
  theme: false,
};
//Proptypes for Home
Home.propTypes = {
  theme: PropTypes.bool.isRequired,
};
export default Home;
